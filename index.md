# Ramūnas Girdziušas

[Contact](https://aabbtree77.github.io/contact/index.html), [Github](https://github.com/aabbtree77?tab=repositories), [CV (React Show-off)](https://aabbtree77.github.io/cv/), [resume.pdf](https://aabbtree77.github.io/pdfs/RamunasGirdziusasResume.pdf), [cv.pdf](https://aabbtree77.github.io/pdfs/RamunasGirdziusasCV.pdf)

<div style="display: flex; justify-content: flex-start">
  <div style="font-size: 1rem;">Last Update: November 2024</div>
</div>

I studied electrical engineering in Lithuania from 1994 to 1999, followed by research in machine learning in Finland from 2000 to 2008.

Later I did three postdoc projects and came back to Vilnius (Lithuania) in 2014 with the goal to become a software [engineer](https://1x.engineer/).

Take a look at some of my work in [hardware](https://github.com/aabbtree77/mona-lisa), [embedded software](https://github.com/aabbtree77/adast), [IoT](https://github.com/aabbtree77/esp32-vpn), [3D](https://github.com/aabbtree77/twinpeekz2), and [webdev](https://github.com/aabbtree77/auth-starter-backend).

# Selected Projects

## Work in Progress

Vilnius, Now.

Learning some ways to build web GUIs and services. My interim release includes [backend](https://github.com/aabbtree77/auth-starter-backend) and [frontend](https://github.com/aabbtree77/auth-starter-frontend) for a 3rd party-free user authentication.

## [lawtrust.eu](https://lawtrust.eu/): [lawlt.eu](http://www.lawlt.eu/) [Improved](https://github.com/aabbtree77/law2)

Vilnius, February 2024.

A multilingual website for a lawyer who speaks nine languages. Static HTML, Tailwind CSS, [gomarkdown](https://github.com/gomarkdown/markdown), porkbun.com, and github pages.

## [Web-Log](https://github.com/aabbtree77/miniguestlog)

Vilnius, 2023-2024.

A MERN app to [log](https://aabbtree77.github.io/miniguestlog/loadGuestsSpinner.html) geolocation of the last 50 visitors of this homepage. MongoDB Atlas, Compass, render.com, github pages, ipify.org, and geoip-lite API for the GeoLite data from MaxMind.

## [Paper Guillotine](https://github.com/aabbtree77/adast)

Vilnius, 2020 - 2024.

A joint work with Saulius Rakauskas (Infovega). We have been maintaining a real factory machine since February 2020 (last update: February 2024). I wrote microcontroller code in C (avr-gcc).

## [P2P Connectivity](https://github.com/aabbtree77/esp32-vpn)

Vilnius, 2021 - 2022.

A joint work with Saulius Rakauskas (Infovega): A remote plant watering system with ESP32, MicroPython, Mosquitto MQTT, Ubuntu and [awl](https://github.com/anywherelan/awl) with golibp2p. Numerous tests of [hole punching](<https://en.wikipedia.org/wiki/Hole_punching_(networking)>) through layers of routers with the use of the P2P network other than torrents, to control an ESP32 device globally, without obscure 3rd party services.

## [Volumetrically-Lit Sponza (Go, Nim)](https://github.com/aabbtree77/twinpeekz2)

Vilnius, 2020 - 2022.

Implemented volumetric lighting in [Go](https://github.com/aabbtree77/twinpeekz) and [Nim](https://github.com/aabbtree77/twinpeekz2) (forward rendering, shadow mapping, PBR, 3D ray marching, OpenGL) following [Balázs Tóth, Tamás Umenhoffer (2009)](https://diglib.eg.org/handle/10.2312/egs.20091048.057-060), and [Tomas Öhberg (2017)](https://gitlab.com/tomasoh/100_procent_more_volume). Go and Nim are amazing projects, but their advantages (build systems, imperative code, WYSIWYG more or less) barely matter where a 3D backend is a horror story and one must resort to runtime tools like RenderDoc. OpenGL, Vulkan, or WebGPU? Gave up on this, but note that Vulkan already helps to run [d3d9-d3d11 on Linux](https://github.com/doitsujin/dxvk/issues/3789).

## [The Algebra of Tensor Fields](https://aabbtree77.github.io/tensors/)

Vilnius, 2015 - 2024.

Verified tensor algebras of Donn G. Shankland (1970).

["Après la montagne, il y a la montagne..." &#8722; Desireless, Hari om Ramakrishna (1989)](https://www.youtube.com/watch?v=18rZv8qWZqA)

## [MNIST-0.17 (Python)](https://github.com/aabbtree77/MNIST-0.17)

Vilnius, 2014 - 2015.

Confirmed that Jonas Matuzas' CNN model is one of the most convincing results in the MNIST digit recognition. Built my own kriging and Adam Coates et al. features-based "autoML" image recognition system which was sound, but not competitive enough. It relied on the block-Choleski inverse of a large covariance matrix which may not fit into 64GB RAM. This hyperparameter-free system was hard to scale beyond O(100K) vectors. It had the error rates inferior to those of the CNNs (85% CIFAR-10 accuracy vs world records reaching over 99%).

## [3D Shape Normalization (Matlab)](https://diglib.eg.org/handle/10.2312/3dor.20141044.009-015)

PostDoc Chronicles 3: Lugano, 2013-2014. My second encounter with quadratically-constrained quadratic cost optimization, where I have mapped the "Swiss Roll" problem to the fast multipole method-based electrostatics with an approximate distance
constraint handling (simple projections ala Karmarkar and Cimmino in linear algebra). Davide Boscaini implemented the constraint gradient exactly and pushed the error rates.

## [Cloud Computing (Scilab)](https://hal.archives-ouvertes.fr/hal-00723427)

PostDoc Chronicles 2: Saint-Étienne, 2012-2013.

Optimization of the fluid flow which was implemented before me with OpenFOAM, CATIA, STAR CCM+ and ParaView, running on the ProActive PACA Grid cloud (INRIA) via the Scilab-to-Java bridge managed by Fabien Viale. The optimization involved kriging and CMA-ES as the meta-optimizer of the expected multi-point improvement whose MC integration I sped up with a specialized unscented transform. See the [slides](https://github.com/aabbtree77/aabbtree77.github.io/blob/main/pdfs/optimization2012.pdf).

## [Modified Thomson Problem (Unpublished)](https://github.com/aabbtree77/aabbtree77.github.io/blob/main/pdfs/ucla2009.pdf)

PostDoc Chronicles 1: Los Angeles, 2008-2009.

Prof. Dario Ringach suggested to study the modified Thomson problem which is a quadratically-constrained quadratic cost optimization with some promising regularity. I attacked the problem with linearization and spectral analysis, obtained a few definite statements, but failed to build a larger research program out of it.

By the way, my neighbor was hit with a baseball bat by some robbers. He spent a week in the hospital and received a twelve-thousand-dollar bill to pay which was partially covered by the UCLA. 

## [Anisotropic Diffusion Filters](https://aaltodoc.aalto.fi/handle/123456789/2999)

My DSc (PhD) thesis, Espoo 2002-2008.

Applied Bayesian analysis to model selection in discontinuity-preserving filtering of signals in an additive noise. Guided by Dr. Jorma Laaksonen and Prof. Erkki Oja.

Daffertshofer-Haken-1994 as a strategically wrong, but inspiring paper, E.T. Jaynes, machine learning in 2000s, my great nine years in Finland: Suomenlinna, Serena... Vaida Rutkauskaitė, Alexander Ilin, Vitaliy Nevdacha, Mykola Ivanchenko, Elia Liitiäinen, Jan-Hendrik Schleimer, Jarrod Creado, Leo Michael, Jaakko Martti Johannes Miettinen, Ville Rantamaula, Dexter He, Mikko Katajamaa, Petteri Räisänen, Jaakko Peltonen, Petri Hyötylä, Matthieu Molinier, Jagdeesh Rajani, Sandro Grech, Ivan Ore, Giedrius Zavadskis, Anita Bisi, Sergej Doudorov, Maxim Govtva, Paola Huaynate... I remember you.

## UNIPEN Parser (Matlab)

May 2000.

My first job at the CIS Lab, Helsinki University of Technology (TKK), guided by Dr. Jorma Laaksonen. During the first two weeks I wrote a parser which loaded UNIPEN data into Matlab. The code did not survive. It was a non-recursive use of fscanf for the internal (CIS lab-specific) subset of UNIPEN.

<br>

<table align="center">
    <tr>
    <th align="left">Ilya Kabakov. The Man Who Flew into Space from his Apartment, 1988</th>
    </tr>
    <tr>
    <td>
    <img src="imgs/IljaKabakov1986.jpg"  alt="Modern art, USSR" width="100%" >
    </td>
    </tr>
</table>

<br>
