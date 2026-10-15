// Shared by welcome.html, bye.html and privacy.html.
// zh is the markup default; EN lives in data-en (same convention and same localStorage key as index.html).
(function () {
  const $$ = (s) => [...document.querySelectorAll(s)];
  const root = document.documentElement;
  let lang = "zh";
  function apply(l) {
    lang = l === "en" ? "en" : "zh";
    root.lang = lang === "en" ? "en" : "zh-Hans";
    $$("[data-en]").forEach((el) => {
      if (el.dataset.zh === undefined) el.dataset.zh = el.innerHTML;
      el.innerHTML = lang === "en" ? el.dataset.en : el.dataset.zh;
    });
    if (root.dataset.titleEn) document.title = lang === "en" ? root.dataset.titleEn : root.dataset.titleZh;
    const b = document.getElementById("langBtn");
    if (b) b.textContent = lang === "en" ? "中" : "EN";
    try { localStorage.setItem("wisebird-lang", lang); } catch (e) {}
    document.dispatchEvent(new CustomEvent("wb-lang", { detail: lang }));
  }
  window.wbLang = () => lang;
  let l = "zh";
  const q = new URLSearchParams(location.search).get("lang");
  try { l = q || localStorage.getItem("wisebird-lang") || ((navigator.language || "zh").toLowerCase().startsWith("zh") ? "zh" : "en"); } catch (e) {}
  const b = document.getElementById("langBtn");
  if (b) b.addEventListener("click", () => apply(lang === "en" ? "zh" : "en"));
  apply(l);
})();
