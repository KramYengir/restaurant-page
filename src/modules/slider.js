import "../styles/slider.scss";

const messages = [
  "Our <span>Fish</span> Are Line Caught From Sustainable Fishing Grounds, delivered fresh every day",
  "Our <span>Chips</span> Are Made Using Quality Potatoes Peeled & Chipped Fresh On The Day",
  "We <span>Fry</span> In 100% Uncontaminated & Sustainable Vegetable Oil, Filtered Every Day",
  "All Of Our <span>Packaging</span> & Utensils Are 100% Recyclable & Biodegradable",
];

const icons = ["fa-fish", "fa-lines-leaning", "fa-droplet", "fa-leaf"];

const Slider = (() => {
  const sliderContainer = document.createElement("div");
  const prevBtn = document.createElement("button");
  const nextBtn = document.createElement("button");
  const slides = [];
  const dotEls = [];

  sliderContainer.classList.add("slider-container");
  prevBtn.classList.add("prev-btn");
  prevBtn.setAttribute("aria-label", "Previous Slide");
  nextBtn.classList.add("next-btn");
  nextBtn.setAttribute("aria-label", "Next Slide");
  prevBtn.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;
  nextBtn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;

  // create slide & dot elements
  messages.forEach((msg, i) => {
    // slide first
    const slide = document.createElement("div");
    slide.classList.add("slide");
    slide.dataset.index = i;
    slide.id = `slide${i}`;

    // then textbox
    const textBox = document.createElement("div");
    textBox.classList.add("flex-centered");
    const icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add(`${icons[i]}`);
    const p = document.createElement("p");
    p.innerHTML = msg;
    textBox.appendChild(p);
    textBox.appendChild(icon);
    slide.appendChild(textBox);

    // then dots
    const dot = document.createElement("div");
    dot.dataset.index = i;
    dot.classList.add("dot");
    dot.id = `dot${i}`;

    if (i === 0) {
      slide.classList.add("active-slide");
      dot.classList.add("active-dot");
    }

    slides.push(slide);
    dotEls.push(dot);
  });

  slides.forEach((el) => {
    sliderContainer.appendChild(el);
  });

  sliderContainer.appendChild(prevBtn);
  sliderContainer.appendChild(nextBtn);
  dotEls.forEach((el) => {
    sliderContainer.appendChild(el);
  });

  // functions
  nextBtn.addEventListener("click", () => {
    loadNextSlide();
    setCurrentDot();
  });

  prevBtn.addEventListener("click", () => {
    loadPrevSlide();
    setCurrentDot();
  });

  dotEls.forEach((dot, i) => {
    dot.addEventListener("click", () => {
      goToSlide(i);
      setCurrentDot();
    });
  });

  // Keyboard navigation
  sliderContainer.addEventListener("keydown", (event) => {
    if (event.key === "ArrowLeft") {
      loadPrevSlide();
      setCurrentDot();
    } else if (event.key === "ArrowRight") {
      loadNextSlide();
      setCurrentDot();
    }
  });

  // Ensure button elements are focusable
  prevBtn.setAttribute("tabindex", "0");
  nextBtn.setAttribute("tabindex", "0");

  // Ensure buttons are accessible with Enter key
  prevBtn.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      loadPrevSlide();
      setCurrentDot();
    }
  });

  nextBtn.addEventListener("keydown", (event) => {
    if (event.key === "Enter") {
      loadNextSlide();
      setCurrentDot();
    }
  });

  sliderContainer.addEventListener("touchstart", handleTouchStart);
  sliderContainer.addEventListener("touchmove", handleTouchMove);

  let startX;

  function handleTouchStart(event) {
    startX = event.touches[0].clientX;
  }

  function handleTouchMove(event) {
    if (!startX) return;

    const currentX = event.touches[0].clientX;
    const diffX = startX - currentX;

    // Adjust this threshold based on your needs
    if (Math.abs(diffX) > 50) {
      // Swipe right
      if (diffX > 0) {
        loadNextSlide();
      }
      // Swipe left
      else {
        loadPrevSlide();
      }

      setCurrentDot();

      // Reset startX to avoid rapid swiping
      startX = null;
    }
  }

  function loadNextSlide() {
    const currentSlide = getCurrentSlide();

    slides.forEach((slide, i) => {
      if (slide === currentSlide) {
        if (i === slides.length - 1) {
          slides[0].classList.add("active-slide");
        } else {
          slides[i + 1].classList.add("active-slide");
        }
      }
    });

    currentSlide.classList.remove("active-slide");
  }

  function loadPrevSlide() {
    const currentSlide = getCurrentSlide();

    slides.forEach((slide, i) => {
      if (slide === currentSlide) {
        if (i === 0) {
          slides[slides.length - 1].classList.add("active-slide");
        } else {
          slides[i - 1].classList.add("active-slide");
        }
      }
    });

    currentSlide.classList.remove("active-slide");
  }

  function getCurrentSlide() {
    return document.querySelector(".active-slide");
  }

  function setCurrentDot() {
    const currentSlide = getCurrentSlide();

    dotEls.forEach((dot, i) => {
      if (currentSlide.dataset.index == i) {
        dot.classList.add("active-dot");
      } else {
        dot.classList.remove("active-dot");
      }
    });
  }

  function goToSlide(index) {
    slides.forEach((slide, i) => {
      if (slide.dataset.index == index) {
        slide.classList.add("active-slide");
      } else {
        slide.classList.remove("active-slide");
      }
    });
  }

  return sliderContainer;
})();

export default Slider;
