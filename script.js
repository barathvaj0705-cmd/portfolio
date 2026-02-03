const frame = document.getElementById("animation-frame");

const totalFrames = 240;
const startFrame = 1;
const endFrame = totalFrames;

function getFramePath(index) {
  return `images/ezgif-frame-${String(index).padStart(3, "0")}.jpg`;
}

window.addEventListener("scroll", () => {
  const scrollTop = window.scrollY;
  const docHeight = document.body.scrollHeight - window.innerHeight;
  const scrollFraction = scrollTop / docHeight;

  const frameIndex = Math.min(
    endFrame,
    Math.max(
      startFrame,
      Math.floor(scrollFraction * totalFrames)
    )
  );

  frame.src = getFramePath(frameIndex);
});
