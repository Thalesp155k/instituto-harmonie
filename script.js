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

const iconSoundOn = `
  <path d="M4 9v6h4l5 4V5L8 9H4zm11.5 3a3.5 3.5 0 0 0-2-3.16v6.32A3.5 3.5 0 0 0 15.5 12zm0-7v2.06a6 6 0 0 1 0 9.88V19a8 8 0 0 0 0-14z"></path>
`;

const iconMuted = `
  <path d="M4 9v6h4l5 4V5L8 9H4zm12.59 3 2.7-2.7-1.42-1.42-2.7 2.7-2.7-2.7-1.42 1.42 2.7 2.7-2.7 2.7 1.42 1.42 2.7-2.7 2.7 2.7 1.42-1.42-2.7-2.7z"></path>
`;

if (videoHarmonie) {

  videoHarmonie.muted = true;

  const observer = new IntersectionObserver(
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

  observer.observe(videoHarmonie);


  if (soundBtn && soundIcon) {

    soundIcon.innerHTML = videoHarmonie.muted
      ? iconMuted
      : iconSoundOn;

    soundBtn.addEventListener("click", () => {

      videoHarmonie.muted = !videoHarmonie.muted;

      soundIcon.innerHTML = videoHarmonie.muted
        ? iconMuted
        : iconSoundOn;

      videoHarmonie.play().catch(() => {});

    });

  }

}