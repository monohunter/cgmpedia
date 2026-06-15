对傅里叶级数的介绍

## 复数之形式

利用Euler公式和简单的代数运算，可把实数形式的Fourier级数写成复数形式，根据欧拉公式，可知：
$$
\cos {n x}=\frac{1}{2}\left(\mathrm{e}^{in x}+\mathrm{e}^{-inx}\right), \quad \sin{n x}=\frac{1}{2i}\left(\mathrm{e}^{in x}-\mathrm{e}^{-in x}\right)=\frac{-i}{2}\left(\mathrm{e}^{in x}-\mathrm{e}^{-in x}\right)
$$


将之代入到Fourier展开式：
$$
f(x)=\frac{a_0}{2}+\sum_{n=1}^{\infty}{(a_n\cos nx +b_n \sin nx)} = \frac{a_0}{2}+\sum_{n=1}^{\infty}{\Big(a_n\frac{1}{2}(\mathrm{e}^{in x}+\mathrm{e}^{-inx})-b_n\frac{i}{2}(\mathrm{e}^{in x}-\mathrm{e}^{-in x})\Big)} = \frac{a_0}{2}+\sum_{n=1}^{\infty}{\Big( \frac{1}{2}(a_n-ib_n)\mathrm{e}^{inx}+\frac{1}{2}(a_n+ib_n)\mathrm{e}^{-inx}\Big)}
$$


而若令：
$$
C_n=\frac{1}{2}(a_n-ib_n)=\frac{1}{2}\Big(\frac{1}{\pi}\int_{-\pi}^{\pi}{f(x)\cos {nx} \, \mathrm{d}x}-i\frac{1}{\pi}\int_{-\pi}^{\pi}{f(x)\sin {nx} \, \mathrm{d}x}\Big) = \frac{1}{2\pi}\int_{-\pi}^{\pi}{f(x)\mathrm{e}^{-inx}\, \mathrm{d}x}
$$


把$n$取做$-n$，可得：
$$
C_{-n}=\frac{1}{2\pi}\int_{-\pi}^{\pi}{f(x)\mathrm{e}^{inx}\mathrm dx}=\frac{1}{2}(a_n+ib_n)
$$


把$n$取做$0$，可得：
$$
C_0=\frac{1}{2\pi}\int_{-\pi}^{\pi}{f(x)\, \mathrm{d}x}=\frac{a_0}{2}
$$


这样，Fourier展开式中的三项，就可以合起来了，只要$n$的取值遍历从$-\infty$到$+\infty$的所有整数：
$$
f(x) = \frac{a_0}{2}+\sum_{n=1}^{\infty}{\Big( \frac{1}{2}(a_n-ib_n)\mathrm{e}^{inx}+\frac{1}{2}(a_n+ib_n)\mathrm{e}^{-inx}\Big)} = C_0+\sum_{n=1}^{\infty}{C_n \mathrm{e}^{inx}}+\sum_{n=1}^{\infty}{C_{-n} \mathrm{e}^{-inx}} = \sum_{n=-\infty}^{\infty}{C_n \mathrm{e}^{inx}}
$$



因此，我们有如下之定义：Fourier级数的复数形式：设收敛条件满足，定义在$[-\pi,\pi]$上的函数$f$，可以写成：

$$
f\left(x\right)=\sum_{n=-\infty}^{\infty}{{C}_{n}\mathrm{e}^{inx}}
$$
其中，系数$C_n$的计算公式为：


$$
C_n=\frac{1}{2\pi}\int_{-\pi}^{\pi}{f\left(x\right)\mathrm{e}^{-inx}\, \mathrm{d}x},\quad n=0,\pm1,\pm2, \cdots
$$

