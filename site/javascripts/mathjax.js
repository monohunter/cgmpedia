window.MathJax = {
  tex: {
    inlineMath: [["\\(", "\\)"]],
    displayMath: [["\\[", "\\]"]],
    processEscapes: true,
    processEnvironments: true,
    // 关键配置：告诉 MathJax 加载 mhchem 宏包
    packages: {'[+]': ['mhchem']} 
  },
  options: {
    ignoreHtmlClass: ".*|",
    processHtmlClass: "arithmatex"
  },
  // 关键配置：从外部引入 mhchem 组件
  loader: {load: ['[tex]/mhchem']} 
};