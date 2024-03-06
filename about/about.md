# Ramūnas Girdziušas

[Contact](https://aabbtree77.github.io/contact/contact.html), [Github](https://github.com/aabbtree77?tab=repositories), [Résumé](https://aabbtree77.github.io/pdfs/RamunasGirdziusasResume.pdf), [CV](https://aabbtree77.github.io/pdfs/RamunasGirdziusasCV.pdf)

<div style="display: flex; justify-content: flex-start">
  <div style="font-size: 1rem;">Last Update: March 2024</div>
</div>

**"For the record, I'm not a vagrant. I'm a hobo." - [Reacher (2022)](https://screenrant.com/why-reacher-hobo-not-vagrant/)**

# Introduction

I studied electrical engineering in Lithuania from 1994 to 1999, followed by research in computer science in Finland from 2000 to 2008. Later I did three postdoc projects and came back to Vilnius (Lithuania) in 2014 with the goal to become a software engineer. Take a look at some of my work: [3D effects](https://github.com/aabbtree77/twinpeekz2), [embedded software](https://github.com/aabbtree77/adast), [IoT with P2P](https://github.com/aabbtree77/esp32-vpn), and [web development](https://github.com/aabbtree77/law2).

<br>

# Selected Projects

## Work in Progress

Vilnius, Now.

Building a web service which would help teachers automate student testing. Still in the early stages. SvelteKit, Lucia v3, Drizzle, SQLite, VPS.
 
<br>

## [lawtrust.eu](https://lawtrust.eu/): [lawlt.eu](http://www.lawlt.eu/) [Improved](https://github.com/aabbtree77/law2)

Vilnius, 2024.

Applied Tailwind CSS and Go string substitution to build a multilingual website for a lawyer who speaks nine different languages. Porkbun.com and github pages.

<br>

## [Web-Log](https://github.com/aabbtree77/miniguestlog)

Vilnius, 2023-2024.

A MERN app to log geolocation of the last 50 visitors of this homepage. MongoDB Atlas as a database, render.com for a server, github pages (frontend). ipify.org and geoip-lite API for the GeoLite data from MaxMind.

<br>

## [Paper Guillotine](https://github.com/aabbtree77/adast)

Vilnius, 2020 - 2024.

A joint work with Saulius Rakauskas (Infovega). We have been maintaining a real factory machine since February 2020 (last update February 2024). I wrote a microcontroller code in C (avr-gcc).

<br>

##  [P2P Connectivity](https://github.com/aabbtree77/esp32-vpn)

Vilnius, 2021 - 2022.

A joint work with Saulius Rakauskas (Infovega): A remote plant watering system with ESP32, MicroPython, Mosquitto MQTT, Ubuntu and [awl](https://github.com/anywherelan/awl). Numerous tests of hole punching through layers of routers and the use of the P2P network other than torrents (golibp2p).

<br> 

## [Volumetrically-Lit Sponza (Go, Nim)](https://github.com/aabbtree77/twinpeekz2)

Vilnius, 2020 - 2022.

Implemented volumetric lighting in [Go](https://github.com/aabbtree77/twinpeekz) and [Nim](https://github.com/aabbtree77/twinpeekz2) (forward rendering, shadow mapping, PBR, 3D ray marching, OpenGL) following the amazing works of [Balázs Tóth, Tamás Umenhoffer (2009)](https://diglib.eg.org/handle/10.2312/egs.20091048.057-060), and [Tomas Öhberg (2017)](https://gitlab.com/tomasoh/100_procent_more_volume).

<br>

## [Tensor Algebras](https://aabbtree77.github.io/shankland/shankland.html)

Vilnius, 2015 - 2020. 

Verified several tensor algebras of Donn G. Shankland, got lost with spinors.

["Après la montagne, il y a la montagne..." &#8722; Desireless, Hari om Ramakrishna (1989)](https://www.youtube.com/watch?v=18rZv8qWZqA)

<br>

## [MNIST-0.17 (Python)](https://github.com/aabbtree77/MNIST-0.17)

Vilnius, 2014 - 2015, 2020. 

Confirmed that Jonas Matuzas' CNN model is one of the most convincing results in the MNIST digit recognition. A reproducible research!

The MNIST digits are known to me since around 1999, my BSc times guided by Dalius Navakauskas in Vilnius. MNIST is not as interesting as CIFAR, and the entire image recognition problem got solved with AlexNet-2012, unexpectedly.

Starting around 2017 some very powerful deep networks appear: Transformers-BERT-ChatGPT, Alpha-(Go, Zero, Fold), NNUE, Stable Diffusion... [Alexander Skidanov](https://www.youtube.com/watch?v=1aK2u_fdiIY) and [Igor Ganichev](https://www.youtube.com/watch?v=-xh_XXlX0kE&t=8977s) mention their failures to teach deep networks mathematics and logical reasoning. Doron Zeilberger: ["All human proofs are shallow"](https://sites.math.rutgers.edu/~zeilberg/OPINIONS.html).

<br> 

## [3D Shape Normalization (Matlab)](https://diglib.eg.org/handle/10.2312/3dor.20141044.009-015)

PostDoc Chronicles 3: Lugano, 2013-2014. Mapped the "Unroll the Swiss Roll" problem to the fast multipole method-based electrostatics with an approximate distance 
constraint handling (simple projections ala Karmarkar and Cimmino in linear algebra). Davide Boscaini implemented the constraint gradient exactly and pushed the error rates.

Prof. Michael Bronstein was mixing machine learning with 3D and Riemannian geometry. I had a certain focus on [the protein data bank](https://www.rcsb.org/), trying to find data that was more physics-based and low dimensional, assuming atomic locations were erroneous and MDS-like methods would help cleaning them up. A few years later I would learn about AlphaFold and know what I was missing. Too late.

<br>

## [Cloud Computing (Scilab)](https://hal.archives-ouvertes.fr/hal-00723427)

PostDoc Chronicles 2: Saint-Étienne, 2012-2013. 

Optimization of the fluid flow which was implemented before me with OpenFOAM, CATIA, STAR CCM+ and ParaView, running on the ProActive PACA Grid cloud (INRIA) via the Scilab-to-Java bridge managed by Fabien Viale. The optimization involved kriging and CMA-ES as the meta-optimizer of the expected multi-point improvement whose MC integration I sped up with a specialized unscented transform. See the [slides](https://github.com/aabbtree77/aabbtree77.github.io/blob/main/pdfs/optimization2012.pdf).

This was a special time as new French cloud computing networks were emerging. It took some effort to learn how to run the code on the PACA cloud, but once the project ended, we all got disconnected, including the project leader Rodolphe Le Riche.

<br> 
 
## [Modified Thomson Problem (Unpublished)](https://github.com/aabbtree77/aabbtree77.github.io/blob/main/pdfs/ucla2009.pdf)

PostDoc Chronicles 1: Los Angeles, 2008-2009. 

Neurobiology... Prof. Dario Ringach later suggested the modified Thomson problem (after [J.J. Thomson](https://en.wikipedia.org/wiki/J._J._Thomson)), and I did the analysis. Eq. 30 in the unpublished report came up somewhat unexpectedly. The ability to linearize a problem and investigate its Jacobian structure is underrated, but I could not extend it to a bigger program. I hit something called "syzygies", but algebraic geometry was beyond me.

The UCLA libraries were amazing, and so was the ocean. Arnold Schwarzenegger on TV, without a machine gun, reporting about a fiscal quarter. The death of Michael Jackson. My neighbor was hit with a baseball bat by the robbers. He spent a week in the hospital and received a twelve-thousand-dollar bill to pay which is nothing there.

<br> 
 
## [Anisotropic Diffusion Filters](https://aaltodoc.aalto.fi/handle/123456789/2999)

My DSc (PhD) thesis, Espoo 2002-2008.

It is mostly this **[IJCNN-2005](https://ieeexplore.ieee.org/document/1555991)** paper further polished in **[ICCV2007](https://ieeexplore.ieee.org/document/4408895)** and **[ACCV2007](https://link.springer.com/chapter/10.1007/978-3-540-76386-4_77)**. A pretty test case could have been the bilateral upscaling stage in volumetric light rendering, but diffusions are too slow for millisecond time-frames.
 
  <div class="blockquote">

  R.I.P.
  <br>

  Daffertshofer-Haken-1994 as a strategically wrong, but inspiring paper,
  E.T. Jaynes, machine learning in 2000s, my great nine years in Finland: Suomenlinna, Serena... Vaida Rutkauskaitė, Alexander Ilin, Vitaliy Nevdacha, 
  Mykola Ivanchenko, Elia Liitiäinen, Jan-Hendrik Schleimer, Jarrod Creado, Leo Michael, 
  Jaakko Martti Johannes Miettinen, Ville Rantamaula, Dexter He, 
  Mikko Katajamaa, Petteri Räisänen, Jaakko Peltonen, Petri Hyötylä, Matthieu Molinier, Jagdeesh Rajani, Sandro Grech, Ivan Ore, Giedrius Zavadskis, 
  Anita Bisi, Sergej Doudorov, Maxim Govtva, Paola Huaynate... I remember you.
  </div>

<br>

## UNIPEN Parser (Matlab)

May 2000.

My first job: At the CIS Lab in Finland (working with Jorma Laaksonen). During the first two weeks I wrote a parser which loaded UNIPEN data into Matlab structures. The code did not survive, but it was the use of fscanf with loops to read data the way it was stored. The only useful research code that I ever wrote...

<br>

<table align="center">
    <tr>
    <th align="left">Ilya Kabakov. The Man Who Flew into Space from his Apartment, 1988</th>
    </tr>
    <tr>
    <td>
    <img src="../imgs/IljaKabakov1986.png"  alt="Modern art, USSR" width="100%" >
    </td>
    </tr>
</table>

<br>

