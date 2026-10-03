# 大O与小o

## 介绍

设函数 $f(x)$ 和 $g(x)$ 在 $x_0$ 点的某个去心邻域 $\check{U}(x_0)$上有定义，并设在 $\check{U}(x_0)$ 上 $g(x) \neq 0$。常用记号“$\mathcal{O}$”、“$o$”和“$\sim$”来表示 $f(x)$ 与 $g(x)$ 在 $x_0$ 点近旁的相对量级关系：

1. $f(x) = o(g(x)), \; (x \rightarrow x_0)$ 表示：$\frac{f(x)}{g(x)}$ 是 $x \to x_0$ 时的无穷小量，即 $\lim\limits_{x \rightarrow x_0} \frac{f(x)}{g(x)} = 0$。若 $x \rightarrow x_0$ 时 $f$ 和 $g$ 都是无穷小量，则称 $f(x)$ 是比 $g(x)$ 更高阶的无穷小。
2.  $f(x) = o(1), \; (x \to x_0)$  表示：$f(x)$ 是此极限过程的无穷小量。
3.  $f(x) = \mathcal{O}(g(x)),\; (x \rightarrow x_0)$  表示：$\frac{f(x)}{g(x)}$ 是 $x \rightarrow x_0$ 时的有界变量，即存在常数 $M > 0$，使得 $\left| \frac{f(x)}{g(x)} \right| \leqslant M$ 在 $x_0$ 点的某个去心邻域上成立，即成立：$|f(x)| \leqslant M |g(x)|$。注意$\mathcal{O}$记号本质上代表的是“上界”，$f(x) = \mathcal{O}(g(x))$ 意味着 $f$ 的增长速度不超过 $g$，亦即 $f$ 具备不超过 $g$ 的量级。
4.  $\textcolor{mypink}{f(x) = \mathcal{O}(1), \; (x \rightarrow x_0)}$ 表示：存在 $x_0$ 的某个去心邻域，使 $f$ 在其上有界。此谓 **局部有界量**。
5. 若有 $\lim\limits_{x \to x_0} \frac{f(x)}{g(x)} = l \neq 0$，而且当 $x \rightarrow x_0$ 时 $f$ 和 $g$ 都是无穷小量（或无穷大量），则称 $f$ 和 $g$ 是 **同阶的** 无穷小量（或无穷大量）。
6.  $\textcolor{mypink}{f(x) \sim g(x), \; (x \rightarrow x_0)}$ 表示：$\lim\limits_{x \rightarrow x_0} \frac{f(x)}{g(x)} = 1$。若当 $x \rightarrow x_0$ 时 $f$ 和 $g$ 都是无穷小量（或无穷大量），则称 $f(x)$ 和 $g(x)$ 是等价的无穷小量（或等价的无穷大量）。

这些含有渐近记号 $o$、$\mathcal{O}$ 以及 $\sim$ 的等式称为 **渐近等式**，它刻画了函数在某个极限过程中的 **渐近性态** 之间的关系。它们极大简化了对复杂函数的估算，使用它们在处理函数极限时非常有用，因为在很多情形下，我们并不需要知道某些量的十分具体的表达式，只需知道这个量的动态就已足够。这种等式不是量的相等，而是代表在极限过程中的关系。

## 几个初等函数的渐进等式

1.  $\sin {x}=x+o\left( x \right)$, $\tan{x}=x+o\left( x \right)$;
2.  $\cos{x}=1-\frac { 1 }{ 2 } { x }^{ 2 }+o\left({x}^{2}\right)=1+\mathcal{O}\left(x^2\right)$;
3.  $\mathrm{e}^{x}=1+x+o\left( x \right)$;
4.  $\ln(1+x)=x+o\left( x \right)=x-\frac{x^2}{2}+o\left(x^2\right)$;
5.  $(1+x)^{\mu}=1+{\mu}x+o\left(x \right)=1+{\mu}x+\mathcal{O}\left(x^2 \right)$；
6.  $\ln x=o(x^{-\alpha})~\left(x \rightarrow 0^{+}\right)~(\alpha >0)$;
7. $x^k=o\left(a^x\right)~\left(x\rightarrow +\infty\right)~(a>1)$.

## 常用等价无穷小量

1.  $x \sim \sin{x} \sim \tan{x} ~(x \rightarrow 0)$;
2.  $x \sim \arcsin{x} \sim \arctan{x}~(x \rightarrow 0)$; $x \sim \mathrm{e}^{x}-1~(x \rightarrow 0)$;
3.  $x \sim  \ln{\left( 1+x \right)}~(x \rightarrow 0)$;
4.  $\frac{1}{2}x \sim \sqrt{1+x}-1~(x \rightarrow 0)$;
5.  $\frac{1}{2}{x}^{2} \sim 1-\cos{x}~(x \rightarrow 0)$;
6.  $-\frac { 1 }{ 2 } { x }^{ 2 } \sim \ln { \cos { x }  }~(x \rightarrow 0)$;
7.  $\frac { 1 }{ 2 } { x }^{ 3 } \sim (\tan { x } -\sin { x }) ~(x \rightarrow 0)$;
8.  $\frac { 1 }{ 2 } { x }^{ 3 } \sim \left(\sin{x}-\arctan{x} \right) ~(x \rightarrow 0)$;
9.  ${ a }^{ x } - 1 \sim { x }{ \ln { a }  }~\left(x \rightarrow 0^{+}\right)~(a >0)$;
10.  $(1+x)^{\alpha}-1 \sim \alpha x~(x \rightarrow 0)$;
11.  $\log _{ a }{ \left( 1+x \right)} \sim \frac { x }{ \ln { a }  } ~(x \rightarrow 0)$.