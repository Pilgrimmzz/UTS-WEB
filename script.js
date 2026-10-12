const STORAGE_KEY = "laguin-messages-v1";
let selectedTrack = null;
const $ = (id) => document.getElementById(id);
const spotifyForm = $("spotifyForm");
const spotifyLink = $("spotifyLink");
const spotifyStatus = $("spotifyStatus");
const spotifyPlayer = $("spotifyPlayer");
const messageForm = $("messageForm");
const formStatus = $("formStatus");
const messageInput = $("message");
const charCount = $("charCount");

function getMessages() {
  try {
    const parsed = JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]");
    return Array.isArray(parsed) ? parsed : [];
  } catch { return []; }
}

if (spotifyForm) {
  spotifyForm.addEventListener("submit", async (event) => {
    event.preventDefault();
    const rawLink = spotifyLink.value.trim();
    let url;
    try { url = new URL(rawLink); }
    catch { spotifyStatus.textContent = "Tautan tidak valid. Salin tautan lagu dari Spotify."; return; }
    const allowedHosts = ["open.spotify.com", "www.open.spotify.com"];
    const parts = url.pathname.split("/").filter(Boolean);
    const trackIndex = parts.indexOf("track");
    const trackId = trackIndex >= 0 ? parts[trackIndex + 1] : "";
    if (!allowedHosts.includes(url.hostname) || !trackId || !/^[a-zA-Z0-9]+$/.test(trackId)) {
      spotifyStatus.textContent = "Gunakan tautan lagu Spotify dengan format open.spotify.com/track/..."; return;
    }
    const trackUrl = `https://open.spotify.com/track/${trackId}`;
    selectedTrack = { id: trackId, title: "Lagu Spotify pilihanmu", artist: "Artis tidak tersedia", image: "", url: trackUrl };
    spotifyStatus.textContent = "Memuat informasi lagu...";
    try {
      const response = await fetch(`https://open.spotify.com/oembed?url=${encodeURIComponent(trackUrl)}`);
      if (response.ok) {
        const details = await response.json();
        selectedTrack.title = details.title || selectedTrack.title;
        selectedTrack.image = details.thumbnail_url || "";
        try {
          const musicResponse = await fetch(`https://itunes.apple.com/search?term=${encodeURIComponent(selectedTrack.title)}&entity=song&limit=10`);
          if (musicResponse.ok) {
            const data = await musicResponse.json();
            const results = data.results || [];
            const normalized = selectedTrack.title.toLowerCase().replace(/[^a-z0-9]/g, "");
            const match = results.find(song => song.trackName?.toLowerCase().replace(/[^a-z0-9]/g, "") === normalized) || results[0];
            if (match) {
              selectedTrack.artist = match.artistName || "Artis tidak tersedia";
              selectedTrack.image = match.artworkUrl100?.replace("100x100bb", "600x600bb") || selectedTrack.image;
            }
          }
        } catch {}
      }
    } catch {}
    const iframe = document.createElement("iframe");
    iframe.src = `https://open.spotify.com/embed/track/${encodeURIComponent(trackId)}?utm_source=generator`;
    iframe.width = "100%"; iframe.height = "152";
    iframe.allow = "autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture";
    iframe.loading = "lazy"; iframe.title = "Pemutar lagu Spotify";
    spotifyPlayer.replaceChildren(iframe); spotifyPlayer.hidden = false;
    spotifyStatus.textContent = "Lagu berhasil dimuat. Pastikan lagu yang tampil sudah benar.";
  });
}
if (messageInput && charCount) messageInput.addEventListener("input", () => { charCount.textContent = `${messageInput.value.length}/300`; });

function createTextElement(tag, className, text) {
  const el = document.createElement(tag); if (className) el.className = className; el.textContent = text; return el;
}
function createMessageCard(item) {
  const card = document.createElement("article"); card.className = "message-card";
  const top = document.createElement("div"); top.className = "message-card-top";
  let mark;
  if (item.track?.image) { mark = document.createElement("img"); mark.className = "song-cover"; mark.src = item.track.image; mark.alt = `Cover ${item.track?.title || "lagu"}`; mark.loading = "lazy"; }
  else { mark = createTextElement("div", "music-mark", "♫"); mark.setAttribute("aria-hidden", "true"); }
  const info = document.createElement("div");
  info.append(createTextElement("h3", "song-title", item.track?.title || "Lagu Spotify"), createTextElement("p", "song-subtitle", item.track?.artist || "Artis tidak tersedia"));
  top.append(mark, info);
  const dedication = createTextElement("p", "song-subtitle", `Untuk: ${item.recipient}`); dedication.style.marginTop = "18px";
  const message = createTextElement("p", "message-text", `“${item.message}”`);
  const meta = document.createElement("div"); meta.className = "message-meta";
  const sender = document.createElement("div"); sender.className = "sender-info";
  sender.append(createTextElement("span", "sender-label", "FROM"), createTextElement("strong", "sender-name", item.sender || "Anonim"), createTextElement("span", "sender-date", item.date || ""));
  meta.append(sender);
  const actions = document.createElement("div"); actions.className = "message-actions";
  const link = document.createElement("a"); link.href = item.track?.url || "https://open.spotify.com/"; link.target = "_blank"; link.rel = "noopener noreferrer"; link.textContent = "Buka lagu ↗"; actions.append(link);
  if (document.body.dataset.page === "history") {
    const deleteButton = document.createElement("button"); deleteButton.type = "button"; deleteButton.className = "delete-message-button"; deleteButton.textContent = "Hapus"; deleteButton.dataset.deleteMessage = item.id; deleteButton.setAttribute("aria-label", `Hapus kiriman lagu ${item.track?.title || "ini"}`); actions.append(deleteButton);
  }
  meta.append(sender, actions);
  card.append(top, dedication, message, meta); return card;
}
function renderInto(containerId, emptyId, items) {
  const container = $(containerId), empty = $(emptyId); if (!container || !empty) return;
  container.replaceChildren(); empty.hidden = items.length > 0;
  items.forEach(item => container.append(createMessageCard(item)));
}
function renderMessages() { renderInto("messageResults", "emptyState", getMessages()); }
function renderHistory() { renderInto("historyResults", "historyEmptyState", getMessages()); }
function renderHomeRecent() { renderInto("homeMessageResults", "homeEmptyState", getMessages().slice(0, 3)); }

if (messageForm) {
  messageForm.addEventListener("submit", (event) => {
    event.preventDefault(); if (formStatus) formStatus.textContent = "";
    if (!selectedTrack) { formStatus.textContent = "Tempel dan muat tautan lagu Spotify terlebih dahulu."; $("spotifyLink")?.focus(); return; }
    const senderValue = $("sender").value.trim(), recipient = $("recipient").value.trim(), message = messageInput.value.trim();
    if (!recipient || !message) { formStatus.textContent = "Nama penerima dan pesan wajib diisi."; return; }
    const item = { id: `${Date.now()}-${Math.random().toString(16).slice(2)}`, sender: senderValue || "Anonim", recipient, message, track: selectedTrack, date: new Date().toLocaleDateString("id-ID", { day: "numeric", month: "short", year: "numeric" }) };
    const messages = getMessages(); messages.unshift(item);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(messages.slice(0, 50))); }
    catch { formStatus.textContent = "Kiriman tidak bisa disimpan. Periksa pengaturan penyimpanan browser."; return; }
    messageForm.reset(); if (charCount) charCount.textContent = "0/300";
    formStatus.textContent = "Kiriman berhasil disimpan di browser ini.";
    window.location.href = "kirimanlagu.html";
  });
}
const currentPage = document.body.dataset.page;
document.querySelectorAll("[data-nav]").forEach(link => {
  if (link.dataset.nav === currentPage) { link.classList.add("active"); link.setAttribute("aria-current", "page"); }
});
if (currentPage === "beranda") renderHomeRecent();
if (currentPage === "kirimanlagu") renderMessages();
if (currentPage === "history") renderHistory();


// Penghapusan hanya tersedia di halaman History, dengan dialog konfirmasi khusus.
document.addEventListener("click", (event) => {
  const button = event.target.closest("[data-delete-message]");
  if (!button || document.body.dataset.page !== "history") return;
  const id = button.dataset.deleteMessage;
  const item = getMessages().find(message => message.id === id);
  if (!item) return;

  const overlay = document.createElement("div");
  overlay.className = "delete-dialog-overlay";
  overlay.innerHTML = `
    <section class="delete-dialog" role="dialog" aria-modal="true" aria-labelledby="deleteDialogTitle" aria-describedby="deleteDialogDescription">
      <div class="delete-dialog-icon" aria-hidden="true">!</div>
      <p class="eyebrow">KONFIRMASI HAPUS</p>
      <h2 id="deleteDialogTitle">Hapus kiriman ini?</h2>
      <p id="deleteDialogDescription" class="delete-dialog-copy">Kiriman <strong class="delete-dialog-song"></strong> akan dihapus dari Beranda, Kiriman Lagu, dan History. Tindakan ini tidak dapat dibatalkan.</p>
      <div class="delete-dialog-actions">
        <button type="button" class="button button-secondary" data-cancel-delete>Batal</button>
        <button type="button" class="button button-danger" data-confirm-delete><span aria-hidden="true"></span> Ya, hapus</button>
      </div>
    </section>`;
  overlay.querySelector(".delete-dialog-song").textContent = `“${item.track?.title || "Lagu Spotify"}”`;
  document.body.append(overlay);
  const cancelButton = overlay.querySelector("[data-cancel-delete]");
  const confirmButton = overlay.querySelector("[data-confirm-delete]");
  const closeDialog = () => overlay.remove();
  cancelButton.addEventListener("click", closeDialog);
  overlay.addEventListener("click", e => { if (e.target === overlay) closeDialog(); });
  document.addEventListener("keydown", function escapeDialog(e) {
    if (e.key === "Escape" && document.body.contains(overlay)) { closeDialog(); document.removeEventListener("keydown", escapeDialog); }
  });
  confirmButton.addEventListener("click", () => {
    const remaining = getMessages().filter(message => message.id !== id);
    try { localStorage.setItem(STORAGE_KEY, JSON.stringify(remaining)); }
    catch { overlay.querySelector(".delete-dialog-copy").textContent = "Kiriman belum bisa dihapus. Periksa pengaturan penyimpanan browser lalu coba lagi."; return; }
    closeDialog();
    renderHistory();
  });
  cancelButton.focus();
});
