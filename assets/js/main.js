const $ = document.querySelector.bind(document);
const $$ = document.querySelectorAll.bind(document);

const THEME_STORAGE_KEY = "theme";
const config = JSON.parse(localStorage.getItem(THEME_STORAGE_KEY)) || {};
const body = $("body");
const darkModeBtn = $("#dark-mode-toggle");
let isDarkMode = darkModeBtn.checked;
console.log(config);
// console.log(body);
const setDarkMode = () => {
  body.setAttribute("data-bs-theme", "dark");
  isDarkMode = true;
  darkModeBtn.checked = true;
  setConfig(THEME_STORAGE_KEY, "data-theme", "dark");
};
const setLightMode = () => {
  body.setAttribute("data-bs-theme", "light");
  isDarkMode = false;
  darkModeBtn.checked = false;
  setConfig(THEME_STORAGE_KEY, "data-theme", "light");
};

const setConfig = (storageKey, key, value) => {
  config[key] = value;
  localStorage.setItem(storageKey, JSON.stringify(config));
};

if (config["data-theme"] && config["data-theme"] === "light") {
  setLightMode();
} else setDarkMode();

const handleToggleTheme = () => {
  console.log(isDarkMode);
  if (!isDarkMode) {
    setDarkMode();
  } else setLightMode();
};

darkModeBtn.addEventListener("click", handleToggleTheme);
