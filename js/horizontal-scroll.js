<<<<<<< HEAD
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const horizontalWrapper = document.querySelector("#AngebotDetails");
  const hSections = document.querySelectorAll(".h-section");
  let currentHIndex = 0;
  let isAnimating = false;

  let startX = 0;
  let startY = 0;

  function scrollHorizontal(index) {
    if (isAnimating) return;
    isAnimating = true;

    horizontalWrapper.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth"
    });

    hSections.forEach(sec => sec.classList.remove("active"));
    hSections[index].classList.add("active");

    setTimeout(() => isAnimating = false, 500);
  }

  function getCurrentSection() {
    let closest = sections[0];
    let minDist = Infinity;
    sections.forEach(sec => {
      const dist = Math.abs(sec.getBoundingClientRect().top);
      if (dist < minDist) {
        minDist = dist;
        closest = sec;
      }
    });
    return closest;
  }

  function scrollVertical(direction) {
    if (isAnimating) return;
    isAnimating = true;

    const current = getCurrentSection();
    const index = Array.from(sections).indexOf(current);

    if (direction === "next" && index < sections.length - 1)
      sections[index + 1].scrollIntoView({ behavior: "smooth" });
    else if (direction === "prev" && index > 0)
      sections[index - 1].scrollIntoView({ behavior: "smooth" });

    setTimeout(() => isAnimating = false, 500);
  }

  /* --- Mobile Touch --- */
  window.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    const current = getCurrentSection();

    if (current.id === "AngebotDetails") {
      const atTop = currentHIndex === 0;
      const atBottom = currentHIndex === hSections.length - 1;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
        // Horizontal Swipe
        if (diffX > 0 && currentHIndex < hSections.length - 1) currentHIndex++;
        else if (diffX < 0 && currentHIndex > 0) currentHIndex--;
        scrollHorizontal(currentHIndex);
      } else if (Math.abs(diffY) > 30) {
        // Vertikal: nur am Rand
        if ((atTop && diffY < 0) || (atBottom && diffY > 0)) {
          scrollVertical(diffY > 0 ? "next" : "prev");
        } // sonst normal scroll
      }
    } else {
      // Normal vertical scroll outside horizontal wrapper
      if (Math.abs(diffY) > 30) scrollVertical(diffY > 0 ? "next" : "prev");
    }
  }, { passive: false });

  /* --- Desktop Wheel Horizontal --- */
  window.addEventListener("wheel", e => {
    const current = getCurrentSection();
    const delta = e.deltaY;

    if (current.id === "AngebotDetails") {
      const atTop = currentHIndex === 0;
      const atBottom = currentHIndex === hSections.length - 1;

      if (!((atTop && delta < 0) || (atBottom && delta > 0))) e.preventDefault();

      if (delta > 0 && currentHIndex < hSections.length - 1) currentHIndex++;
      else if (delta < 0 && currentHIndex > 0) currentHIndex--;
      scrollHorizontal(currentHIndex);

      if (atTop && delta < 0) scrollVertical("prev");
      if (atBottom && delta > 0) scrollVertical("next");
    } else {
      scrollVertical(delta > 0 ? "next" : "prev");
    }
  }, { passive: false });

  /* --- Resize snap --- */
  window.addEventListener("resize", () => scrollHorizontal(currentHIndex));
=======
document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll("section");
  const horizontalWrapper = document.querySelector("#AngebotDetails");
  const hSections = document.querySelectorAll(".h-section");
  let currentHIndex = 0;
  let isAnimating = false;

  let startX = 0;
  let startY = 0;

  function scrollHorizontal(index) {
    if (isAnimating) return;
    isAnimating = true;

    horizontalWrapper.scrollTo({
      left: index * window.innerWidth,
      behavior: "smooth"
    });

    hSections.forEach(sec => sec.classList.remove("active"));
    hSections[index].classList.add("active");

    setTimeout(() => isAnimating = false, 500);
  }

  function getCurrentSection() {
    let closest = sections[0];
    let minDist = Infinity;
    sections.forEach(sec => {
      const dist = Math.abs(sec.getBoundingClientRect().top);
      if (dist < minDist) {
        minDist = dist;
        closest = sec;
      }
    });
    return closest;
  }

  function scrollVertical(direction) {
    if (isAnimating) return;
    isAnimating = true;

    const current = getCurrentSection();
    const index = Array.from(sections).indexOf(current);

    if (direction === "next" && index < sections.length - 1)
      sections[index + 1].scrollIntoView({ behavior: "smooth" });
    else if (direction === "prev" && index > 0)
      sections[index - 1].scrollIntoView({ behavior: "smooth" });

    setTimeout(() => isAnimating = false, 500);
  }

  /* --- Mobile Touch --- */
  window.addEventListener("touchstart", e => {
    startX = e.touches[0].clientX;
    startY = e.touches[0].clientY;
  }, { passive: true });

  window.addEventListener("touchend", e => {
    const endX = e.changedTouches[0].clientX;
    const endY = e.changedTouches[0].clientY;
    const diffX = startX - endX;
    const diffY = startY - endY;

    const current = getCurrentSection();

    if (current.id === "AngebotDetails") {
      const atTop = currentHIndex === 0;
      const atBottom = currentHIndex === hSections.length - 1;

      if (Math.abs(diffX) > Math.abs(diffY) && Math.abs(diffX) > 30) {
        // Horizontal Swipe
        if (diffX > 0 && currentHIndex < hSections.length - 1) currentHIndex++;
        else if (diffX < 0 && currentHIndex > 0) currentHIndex--;
        scrollHorizontal(currentHIndex);
      } else if (Math.abs(diffY) > 30) {
        // Vertikal: nur am Rand
        if ((atTop && diffY < 0) || (atBottom && diffY > 0)) {
          scrollVertical(diffY > 0 ? "next" : "prev");
        } // sonst normal scroll
      }
    } else {
      // Normal vertical scroll outside horizontal wrapper
      if (Math.abs(diffY) > 30) scrollVertical(diffY > 0 ? "next" : "prev");
    }
  }, { passive: false });

  /* --- Desktop Wheel Horizontal --- */
  window.addEventListener("wheel", e => {
    const current = getCurrentSection();
    const delta = e.deltaY;

    if (current.id === "AngebotDetails") {
      const atTop = currentHIndex === 0;
      const atBottom = currentHIndex === hSections.length - 1;

      if (!((atTop && delta < 0) || (atBottom && delta > 0))) e.preventDefault();

      if (delta > 0 && currentHIndex < hSections.length - 1) currentHIndex++;
      else if (delta < 0 && currentHIndex > 0) currentHIndex--;
      scrollHorizontal(currentHIndex);

      if (atTop && delta < 0) scrollVertical("prev");
      if (atBottom && delta > 0) scrollVertical("next");
    } else {
      scrollVertical(delta > 0 ? "next" : "prev");
    }
  }, { passive: false });

  /* --- Resize snap --- */
  window.addEventListener("resize", () => scrollHorizontal(currentHIndex));
>>>>>>> c28808a4cf6732635907c4c3c8b6c85a7d87d235
});