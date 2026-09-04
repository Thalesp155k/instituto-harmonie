const menuBtn = document.querySelector('.menu-btn');
const nav = document.querySelector('.nav');
if (menuBtn && nav) {
  menuBtn.addEventListener('click', () => {
    const isOpen = nav.classList.toggle('open');
    menuBtn.setAttribute('aria-expanded', String(isOpen));
  });
  nav.querySelectorAll('a').forEach(a => a.addEventListener('click', () => nav.classList.remove('open')));
}
const year = document.getElementById('year');
if (year) year.textContent = new Date().getFullYear();

const videoHarmonie = document.querySelector(".harmonie-video");
const soundBtn = document.querySelector(".video-sound-btn");
const soundIcon = document.querySelector(".sound-icon");

if (videoHarmonie) {

  const videoObserver = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {

        if (entry.isIntersecting) {

          videoHarmonie.play().catch(() => {});

        } else {

          videoHarmonie.pause();

        }

      });
    },
    {
      threshold: 0.35
    }
  );

  videoObserver.observe(videoHarmonie);


  if (soundBtn && soundIcon) {

    soundBtn.addEventListener("click", () => {

      videoHarmonie.muted = !videoHarmonie.muted;

      soundIcon.textContent = videoHarmonie.muted ? "🔇" : "🔊";

      videoHarmonie.play().catch(() => {});

    });

  }

}