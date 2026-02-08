<<<<<<< HEAD
const canvas = document.getElementById("hero");
const ctx = canvas.getContext("2d");

const FRAME_COUNT = 30;
const FPS = 8;
const WIDTH = 1280;
const HEIGHT = 720;
const BASE_PATH = "https://www.hebammemarthaschmidbauer.at/wp-content/themes/PersonalTheme/assets/videos/Background/";
const EXT = canUseWebP() ? "webp" : "png";

let images = new Array(FRAME_COUNT);
let frame = 0;
let dir = 1;
let raf;
let lastTime = 0;
let started = false;


function canUseWebP() {
  // Prüft WebP-Unterstützung via Canvas
  const canvasTest = document.createElement('canvas');
  if (!!(canvasTest.getContext && canvasTest.getContext('2d'))) {
    return canvasTest.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}


/* =========================
   Canvas Setup (Retina)
========================= */
function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = WIDTH * dpr;
  canvas.height = HEIGHT * dpr;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resize();
window.addEventListener("resize", resize);

/* =========================
   Lazy Load Frame
========================= */
function loadFrame(i) {
  if (!images[i]) {
    const img = new Image();
    img.src = `${BASE_PATH}frame_${String(i + 1).padStart(2, "0")}.${EXT}`;
    img.onload = () => {
      images[i] = img;
    };
  }
}

/* =========================
   Draw Frame
========================= */
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  const img = images[frame];
  if (!img) return; // Frame not loaded yet

  const scale = Math.max(WIDTH / img.width, HEIGHT / img.height);
  const w = img.width * scale;
  const h = img.height * scale;
  const x = (WIDTH - w) / 2;
  const y = (HEIGHT - h) / 2;

  ctx.drawImage(img, x, y, w, h);
}

/* =========================
   Animation Loop
========================= */
const interval = 1000 / FPS;

function loop(time) {
  if (time - lastTime >= interval) {
    draw();

    // Preload next frame
    let nextFrame = frame + dir;
    if (nextFrame >= FRAME_COUNT) nextFrame = FRAME_COUNT - 1;
    if (nextFrame < 0) nextFrame = 0;
    loadFrame(nextFrame);

    // Update frame
    frame += dir;
    if (frame === FRAME_COUNT - 1 || frame === 0) dir *= -1;

    lastTime = time;
  }

  raf = requestAnimationFrame(loop);
}

/* =========================
   Visibility Pause
========================= */
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    cancelAnimationFrame(raf);
  } else {
    lastTime = performance.now();
    requestAnimationFrame(loop);
  }
});

// =========================
// Start Animation mit WebP/PNG Fallback
// =========================
images[0] = new Image();
images[0].src = `${BASE_PATH}frame_01.${EXT}`;
images[0].onload = () => {
  lastTime = performance.now();
  requestAnimationFrame(loop);
};



=======
const canvas = document.getElementById("hero");
const ctx = canvas.getContext("2d");

const FRAME_COUNT = 30;
const FPS = 8;
const WIDTH = 1280;
const HEIGHT = 720;
const BASE_PATH = "https://www.hebammemarthaschmidbauer.at/wp-content/themes/PersonalTheme/assets/videos/Background/";
const EXT = canUseWebP() ? "webp" : "png";

let images = new Array(FRAME_COUNT);
let frame = 0;
let dir = 1;
let raf;
let lastTime = 0;
let started = false;


function canUseWebP() {
  // Prüft WebP-Unterstützung via Canvas
  const canvasTest = document.createElement('canvas');
  if (!!(canvasTest.getContext && canvasTest.getContext('2d'))) {
    return canvasTest.toDataURL('image/webp').indexOf('data:image/webp') === 0;
  }
  return false;
}


/* =========================
   Canvas Setup (Retina)
========================= */
function resize() {
  const dpr = window.devicePixelRatio || 1;
  canvas.width = WIDTH * dpr;
  canvas.height = HEIGHT * dpr;
  canvas.style.width = "100%";
  canvas.style.height = "100%";
  ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
}
resize();
window.addEventListener("resize", resize);

/* =========================
   Lazy Load Frame
========================= */
function loadFrame(i) {
  if (!images[i]) {
    const img = new Image();
    img.src = `${BASE_PATH}frame_${String(i + 1).padStart(2, "0")}.${EXT}`;
    img.onload = () => {
      images[i] = img;
    };
  }
}

/* =========================
   Draw Frame
========================= */
function draw() {
  ctx.clearRect(0, 0, WIDTH, HEIGHT);

  const img = images[frame];
  if (!img) return; // Frame not loaded yet

  const scale = Math.max(WIDTH / img.width, HEIGHT / img.height);
  const w = img.width * scale;
  const h = img.height * scale;
  const x = (WIDTH - w) / 2;
  const y = (HEIGHT - h) / 2;

  ctx.drawImage(img, x, y, w, h);
}

/* =========================
   Animation Loop
========================= */
const interval = 1000 / FPS;

function loop(time) {
  if (time - lastTime >= interval) {
    draw();

    // Preload next frame
    let nextFrame = frame + dir;
    if (nextFrame >= FRAME_COUNT) nextFrame = FRAME_COUNT - 1;
    if (nextFrame < 0) nextFrame = 0;
    loadFrame(nextFrame);

    // Update frame
    frame += dir;
    if (frame === FRAME_COUNT - 1 || frame === 0) dir *= -1;

    lastTime = time;
  }

  raf = requestAnimationFrame(loop);
}

/* =========================
   Visibility Pause
========================= */
document.addEventListener("visibilitychange", () => {
  if (document.hidden) {
    cancelAnimationFrame(raf);
  } else {
    lastTime = performance.now();
    requestAnimationFrame(loop);
  }
});

// =========================
// Start Animation mit WebP/PNG Fallback
// =========================
images[0] = new Image();
images[0].src = `${BASE_PATH}frame_01.${EXT}`;
images[0].onload = () => {
  lastTime = performance.now();
  requestAnimationFrame(loop);
};



>>>>>>> c28808a4cf6732635907c4c3c8b6c85a7d87d235
