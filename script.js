/* SLIDER */
const slider = document.getElementById("slider");
const wrapper = document.getElementById("sliderWrapper");
let currentX = 0;
let direction = 0;
const speed = 3;

wrapper.addEventListener("mousemove", e => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  if (x < rect.width * 0.25) direction = 1;
  else if (x > rect.width * 0.75) direction = -1;
  else direction = 0;
});

wrapper.addEventListener("mouseleave", () => direction = 0);

function animate() {
  currentX += direction * speed;
  const maxScroll = -(slider.scrollWidth - wrapper.clientWidth);
  if (currentX > 0) currentX = 0;
  if (currentX < maxScroll) currentX = maxScroll;
  slider.style.transform = `translateX(${currentX}px)`;
  requestAnimationFrame(animate);
}
animate();

/* EXPLORE SCROLL */
function scrollToExplore() {
  document.getElementById("about").scrollIntoView({ behavior: "smooth" });
}

/* LIGHTBOX */
const lightbox = document.getElementById("lightbox");
const lightboxImg = document.getElementById("lightbox-img");

document.querySelectorAll(".gallery-item img").forEach(img => {
  img.addEventListener("click", () => {
    lightbox.style.display = "flex";
    lightboxImg.src = img.src;
  });
});

lightbox.addEventListener("click", () => {
  lightbox.style.display = "none";
});
