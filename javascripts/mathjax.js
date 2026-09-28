// 与 mkdocs.yml 配套使用：当前未启用 navigation.instant。
// 本文件只声明配置，由随后加载的 MathJax 主库自动完成首次排版。
// 不提前调用 typesetPromise，也不重复重置、排版整个页面。
window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  }
};

// tex-mml-chtml 组合包已包含 AMS 支持，无需额外预加载。
// 当前 docs 的 Markdown/HTML/JS 中未检出 \ce、\pu、\require 的使用，
// 因此不预加载 mhchem；未来新增化学公式时再按需要配置。
// 暂不开启 ui/lazy：现有文章使用 \label、\eqref，先保证引用行为稳定。