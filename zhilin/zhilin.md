# [Pavel Zhilin (2003)](https://ru.wikipedia.org/wiki/%D0%96%D0%B8%D0%BB%D0%B8%D0%BD,_%D0%9F%D0%B0%D0%B2%D0%B5%D0%BB_%D0%90%D0%BD%D0%B4%D1%80%D0%B5%D0%B5%D0%B2%D0%B8%D1%87_(%D0%BC%D0%B5%D1%85%D0%B0%D0%BD%D0%B8%D0%BA))

[(2003 Ru)](http://teormeh.net/Zhilin_New/pdf/Zhilin_Invariant_rus.pdf), [(2005 Eng)](http://teormeh.net/Zhilin_New/pdf/Zhilin_Invariant_eng.pdf)

There is a theorem in Lie theory, which states that an invariant multivariate function $f$ satisfies a necessary and sufficient condition $Gf=0$, where $G$ is the Lie group generator, see e.g. &#167; 68, page 82 in [J. E. Campbell (1903)](https://archive.org/details/introductorytrea00campuoft). Abraham Cohen (1911) and Leonard Eugene Dickson (1924) are also readable (bourbaki-free).

P.A. Zhilin extends the theorem to the functions of multiple vectors and matrices. He establishes the solution chain: from the functional equation to the first-order linear partial differential equation, followed by the characteristic ordinary differential equation system and ultimately leading to conserved integrals serving as invariants. 

The functional equation is solved with a trick which gives a single weight to multiple parameters. I would have differentiated w.r.t. all the rotation matrix elements independently, only to become lost. I have seen this trick in use before: when evaluating sparse matrix determinants, and when extending a single-argument Taylor series to the multivariate case.

The resulting Zhilin’s PDE is still messy since one may or may not get rid of the group parameters. However, notice that such a jump to the case of multiple transforming objects of different types (vectors, matrices) brings no systems of PDEs to solve. There is only one dependent variable with all the vectors and matrices acting as independent ones. The PDE is linear and homogeneous. 

P.A. Zhilin belonged to theoretical mechanics. Paradoxically, this is the only place where I have found the way to construct invariant functions.
