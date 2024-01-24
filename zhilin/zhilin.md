# [Pavel Zhilin](https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D0%BB%D0%B8%D0%BD,_%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87_(%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D0%BA))

[(2003 Ru)](http://teormeh.net/Zhilin_New/pdf/Zhilin_Invariant_rus.pdf), [(2005 Eng)](http://teormeh.net/Zhilin_New/pdf/Zhilin_Invariant_eng.pdf)

If you are losing oxygen and drowning in complexity after learning some calculus and linear algebra, not wanting to go for homological algebra and abstract nonsense, this could be that narrow escape hatch. Or not.

This work is marvelous in how it compresses Lie theory without delving into groups and algebras.

There is a theorem in Lie theory, which states that an invariant multivariate function $f$ satisfies a necessary and sufficient condition $Gf=0$, where $G$ is the Lie group generator, see e.g. &#167; 68, page 82 in [J. E. Campbell (1903)](https://archive.org/details/introductorytrea00campuoft). Abraham Cohen (1911) and Leonard Eugene Dickson (1924) are also readable (bourbaki-free).

P.A. Zhilin, in a way, extends the theorem by formulating a goal of finding invariant multivariate functions of multiple vectors and matrices. He then establishes the solution chain: from the functional equation to the first-order linear partial differential equation, followed by the characteristic ordinary differential equation system and ultimately leading to conserved integrals serving as invariants. 

There is some unexpected creativity to solve the functional equation by introducing time and free parameters. At this stage, I would differentiate w.r.t. all the rotation matrix elements and then quickly get lost with multiple element derivatives and their symmetry, but P.A. Zhilin uses only a single parameter and the matrix exponential, the way, for instance, single-argument Taylor series have been generalized to a multivariate case.

The resulting Zhilin’s PDE is still messy since there are some group parameters left. One may or may not get rid of them. Solving such a PDE is not trivial and not much exposed in his work. However, notice that such a jump to the multivariate case of multiple transforming objects brings no systems of PDEs to solve. There is only one dependent variable with all the vectors and matrices acting as independent ones. The PDE is linear and homogeneous. 

The method of characteristics is somewhat optional. There are some additional problems mentioned in passing: the possibility of reconstructing objects from their invariants and the existence of polynomial dependencies between the invariants. How can we know/verify the number of polynomially-independent (irreducible) invariants?

P.A. Zhilin belonged to a theoretical mechanics community, nonlinear elasticity, call it the “Rivlin-Spencer” line. I suspect with these techniques one can also discover what P. Cvitanović calls “primitive tensors”, but the latter are moot.

In any case, I am content to collect this torch in darkness. To be capable to find the Euclidean distance as a rotational invariant, not just prove the property based on a given definition dropped out of the sky. P.A. Zhilin nearly closes the whole theme of Lie groups, tensors, spinors, and QFT for me, without ever really going there. I can better sleep at night now.
