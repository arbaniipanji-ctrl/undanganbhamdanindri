
const weddingDate = new Date("2026-11-01T09:00:00+07:00");

const cover = document.getElementById("cover");
const mainContent = document.getElementById("mainContent");
const openInvitation = document.getElementById("openInvitation");
const musicBtn = document.getElementById("musicBtn");
const bgMusic = document.getElementById("bgMusic");


openInvitation.addEventListener("click", () => {
  cover.style.display = "none";
  mainContent.classList.remove("hidden");
  document.body.classList.remove("locked");
  window.scrollTo({top: 0, behavior: "instant"});

  bgMusic.play().catch(err => {
    console.log("Autoplay diblokir, klik tombol musik:", err);
  });
});

function updateCountdown(){
  const now = new Date();
  const diff = weddingDate - now;
  if(diff <= 0){
    ["days","hours","minutes","seconds"].forEach(id => document.getElementById(id).textContent = "00");
    document.getElementById("countdown").innerHTML = "<h3>🎉 Hari Bahagia Telah Tiba! 🎉</h3>";
    return;
  }
  const days = Math.floor(diff / 86400000);
  const hours = Math.floor((diff / 3600000) % 24);
  const minutes = Math.floor((diff / 60000) % 60);
  const seconds = Math.floor((diff / 1000) % 60);
  document.getElementById("days").textContent = String(days).padStart(2,"0");
  document.getElementById("hours").textContent = String(hours).padStart(2,"0");
  document.getElementById("minutes").textContent = String(minutes).padStart(2,"0");
  document.getElementById("seconds").textContent = String(seconds).padStart(2,"0");
}
updateCountdown();
setInterval(updateCountdown,1000);

musicBtn.addEventListener("click", async () => {
  if(!bgMusic.src || bgMusic.src === window.location.href) {
    alert("Foto/far-east-movement-rocketeer-feat-ryan-tedder-of-one-republic.mp3");
    return;
  }
  if(bgMusic.paused){
    await bgMusic.play();
    musicBtn.textContent = "❚❚";
  }else{
    bgMusic.pause();
    musicBtn.textContent = "♫";
  }
});
