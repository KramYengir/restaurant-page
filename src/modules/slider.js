import "../styles/slider.scss";

const msg0 = `Our <span>Fish</span> Are <span>Line Caught</span> From <span>Sustainable</span> Fishing Grounds`;
const msg1 = `Our <span>Chips</span> Are Made Using <span>Quality Potatoes</span> Peeled And Chipped <span>Fresh</span> On The Day`;
const msg2 = `We <span>Fry</span> In 100% Uncontaminated <span>Sustainable</span> Palm Oil`;
const msg3 = `All Of Our <span>Packaging</span> & Utensils Are <span>100%</span> Recyclable And <span>Biodegradable</span>`;

const icons = ["fa-fish", "fa-house", "fa-cat", "fa-dog"];

const msgs = [msg0, msg1, msg2, msg3];

const Slider = (() => {
  const sliderContainer = document.createElement("div");
  const prevBtn = document.createElement("button");
  const nextBtn = document.createElement("button");
  let slides = [];
  let dotEls = [];

  sliderContainer.classList.add("slider-container");
  prevBtn.classList.add("prev-btn");
  nextBtn.classList.add("next-btn");
  prevBtn.innerHTML = `<i class="fa-solid fa-chevron-left"></i>`;
  nextBtn.innerHTML = `<i class="fa-solid fa-chevron-right"></i>`;

  // create slide & dot elements
  for (let i = 0; i < 4; i++) {
    // slide first
    let slide = document.createElement("div");
    slide.classList.add("slide");
    slide.dataset.index = i;
    slide.id = `slide${i}`;

    // then textbox
    let textBox = document.createElement("div");
    textBox.classList.add("flex-centered");
    let icon = document.createElement("i");
    icon.classList.add("fa-solid");
    icon.classList.add(`${icons[i]}`);
    let p = document.createElement("p");
    p.innerHTML = msgs[i];
    textBox.appendChild(p);
    textBox.appendChild(icon);
    slide.appendChild(textBox);

    // then dots
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
