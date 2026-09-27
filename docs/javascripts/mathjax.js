window.MathJax = {
  loader: {
    load: ['[tex]/ams', 'ui/lazy'] // 关键1：加载 lazy 扩展库
  },
  tex: {
    // 明确告诉 MathJax 认识 $ 和 $$
    inlineMath: [["\\(", "\\)"], ["$", "$"]],
    displayMath: [["\\[", "\\]"], ["$$", "$$"]],
    processEscapes: true,
    processEnvironments: true,
    // 加载化学方程式 mhchem 宏包
    packages: {'[+]': ['mhchem']} 
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  // 关键配置：从外部引入 mhchem 组件
  loader: {load: ['[tex]/mhchem']} 
};

document$.subscribe(() => {
  // 关键：在无刷新跳转时重置 MathJax 的编号状态，防止编号无限累加
  if (window.MathJax && window.MathJax.startup) {
    MathJax.startup.document.state(0);
    MathJax.texReset();
  }
  MathJax.typesetPromise();
});