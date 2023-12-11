import "../styles/footer.scss";

// copyright icon
// <i class="fa-regular fa-copyright"></i>;

const buildFooter = (() => {
  const footer = document.createElement("footer");
  const madeByRigneyLink = document.createElement("a");

  madeByRigneyLink.innerText = `Made by Rigney 2023`;
  madeByRigneyLink.href = "https://madebyrigney.com/";
  madeByRigneyLink.setAttribute("target", "_blank");
  madeByRigneyLink.setAttribute("rel", "noreferrer noopener");

  footer.appendChild(madeByRigneyLink);

  return footer;
})();

export default buildFooter;
