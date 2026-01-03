const slider = document.getElementById("slider");
const wrapper = document.getElementById("sliderWrapper");

let currentX = 0;
let direction = 0;
const speed = 3;

wrapper.addEventListener("mousemove", (e) => {
  const rect = wrapper.getBoundingClientRect();
  const x = e.clientX - rect.left;
  const width = rect.width;

  if (x < width * 0.25) {
    direction = 1;
  } else if (x > width * 0.75) {
    direction = -1;
  } else {
    direction = 0;
  }
});

wrapper.addEventListener("mouseleave", () => {
  direction = 0;
});

function animate() {
  currentX += direction * speed;

  const maxScroll = -(slider.scrollWidth - wrapper.clientWidth);
  if (currentX > 0) currentX = 0;
  if (currentX < maxScroll) currentX = maxScroll;

  slider.style.transform = `translateX(${currentX}px)`;
  requestAnimationFrame(animate);
}

animate();

/* EXPLORE BUTTON SCROLL */
function scrollToExplore() {
  document.getElementById("about").scrollIntoView({
    behavior: "smooth"
  });
}
