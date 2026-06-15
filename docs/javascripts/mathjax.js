window.MathJax = {
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