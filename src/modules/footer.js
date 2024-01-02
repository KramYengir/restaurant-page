import "../styles/footer.scss";

// copyright icon
// <i class="fa-regular fa-copyright"></i>;

const buildFooter = (() => {
  const footer = document.createElement("footer");
  const rigneyMadeLink = document.createElement("a");

  rigneyMadeLink.innerText = "Rigney Made 2023 Ⓒ";
  rigneyMadeLink.href = "https://rigneymade.com/";
  rigneyMadeLink.setAttribute("target", "_blank");
  rigneyMadeLink.setAttribute("rel", "noreferrer noopener");

  footer.appendChild(rigneyMadeLink);

  return footer;
})();

export default buildFooter;
