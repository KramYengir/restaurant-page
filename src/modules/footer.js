import "../styles/footer.scss";

// copyright icon
// <i class="fa-regular fa-copyright"></i>;

const buildFooter = (() => {
  const footer = document.createElement("footer");
  const text = document.createElement("p");
  text.innerText = `Made by Rigney 2023`;

  footer.appendChild(text);

  return footer;
})();

export default buildFooter;
