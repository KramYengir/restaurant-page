import "../styles/slider.scss";

const Slider = (() => {
  const sliderContainer = document.createElement("div");
  const prevBtn = document.createElement("button");
  const nextBtn = document.createElement("button");
  let slides = [];
  let dotEls = [];

  sliderContainer.classList.add("slider-container");
  prevBtn.classList.add("prev-btn");
  nextBtn.classList.add("next-btn");

  // create slide & dot elements
  for (let i = 0; i < 4; i++) {
    let slide = document.createElement("div");
    slide.classList.add("slide");
    slide.dataset.index = i;

    let dot = document.createElement("div");
    dot.dataset.index = i;
    dot.classList.add("dot");
    dot.id = `dot${i}`;

    if (i === 0) {
      slide.classList.add("active-slide");
      dot.classList.add("active-dot");
    }

    slides.push(slide);
    dotEls.push(dot);
  }

  slides.forEach((el) => {
    sliderContainer.appendChild(el);
  });

  //sliderContainer.appendChild(slide);
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

  function loadNextSlide() {
    let currentSlide = getCurrentSlide();

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
    console.log(getCurrentSlide());
  }

  function loadPrevSlide() {
    let currentSlide = getCurrentSlide();

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
    console.log(getCurrentSlide());
  }

  function getCurrentSlide() {
    return document.querySelector(".active-slide");
  }

  function setCurrentDot() {
    let currentSlide = getCurrentSlide();

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
