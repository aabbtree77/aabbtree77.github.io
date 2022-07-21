<div class="heading">
        <h1>Selected Projects</h1>
        <p class="timestamp">21 July 2022</p>
        <hr>
</div>

<br> 

### [(ATmega16, C) $\rightarrow$ Paper Guillotine](https://github.com/aabbtree77/adast)

A joint work with Saulius Rakauskas (Infovega). He dissected hardware, designed the board and prepared factory requirements, I wrote microcontroller code in C (avr-gcc). This marvel machine (repaired by us in 2020) is still in operation (2022).

<br>

###  [(ESP32, MicroPython) $\rightarrow$ Wi-Fi Control](https://github.com/aabbtree77/esp32-mqtt-experiments)

IoT with ESP32, MQTT and MicroPython. Despite a very low RAM and limited software, ESP32 enables one to control sensors over Wi-Fi, even with resilience.

<br> 

### [(OpenGL, Go) $\rightarrow$ Volumetrically-Lit Sponza](https://github.com/aabbtree77/twinpeekz)

A full volumetric lighting in Go (forward rendering, shadow mapping) following the C/C++ work of **[Balázs Tóth, Tamás Umenhoffer (2009)](https://diglib.eg.org/handle/10.2312/egs.20091048.057-060)** and **[Tomas Öhberg (2017)](https://gitlab.com/tomasoh/100_procent_more_volume)**. The code shows the impact of a garbage collector in a realistic (multi-pass, PBR-based) OpenGL pipeline.

<br> 

### [MNIST-0.17 (Python)](https://github.com/aabbtree77/MNIST-0.17)

A confirmation that Jonas Matuzas' CNN model is the most convincing result in the MNIST digit recognition so far (2022).

<br> 

### [FMM Simulation $\rightarrow$ 3D Shape Normalization (MATLAB)](https://diglib.eg.org/handle/10.2312/3dor.20141044.009-015)

PostDoc Chronicles 3: Lugano, 2013-2014. I managed to map the "Unroll the Swiss Roll" problem to electrostatics and approximate distance 
constraint handling via simple projections ala Karmarkar and Cimmino in linear algebra. Davide Boscaini handled the constraint gradient exactly and pushed the error rates.

<br>

### [Cloud Computing (Scilab)](https://hal.archives-ouvertes.fr/hal-00723427)

PostDoc Chronicles 2: Saint-Étienne, 2012-2013. A minimization of fluid pressure simulated with the Navier-Stokes flow implemented before me with OpenFOAM, CATIA, STAR CCM+ and ParaView, running on the ProActive PACA Grid (INRIA) cloud via Scilab-to-Java bridge managed by Fabien Viale. Minimization involved kriging and CMA-ES as a meta-optimizer of the expected multi-point improvement whose MC integration I sped up with a specialized unscented transform.

To describe the parallelization part of the problem, a simple analogy will suffice: Imagine moving in a 3D game faster than the world around you being generated, you may get stuck inside walls or places that cannot be escaped. In order to predict the next optimal candidate batch faster, one reads the available cloud node result immediately, but the multi-point world is not loaded yet to make a movement. One can see how this is resolved in the report aiming at a synchronous progress just running faster/asynchronously.

<br> 
 
### [Modified Thomson Problem (Unpublished)](https://github.com/aabbtree77/aabbtree77.github.io/blob/main/pdfs/ucla2009.pdf)

PostDoc Chronicles 1: Los Angeles, 2008-2009. A failure, though rank arguments and Eq. 30 came up somewhat unexpectedly. 
The ability to linearize a problem and investigate its Jacobian structure 
is underrated, but I could not make it into a bigger program.

<br> 


<table align="center">
    <tr>
    <th align="center"> Ramunas Girdziusas, D.Sc. (Tech.) 2008</th>
    </tr>
    <tr>
    <td align="center">
    <img src="./imgs/rg.jpg"  alt="Ramunas Girdziusas, 2008" width="70%" >
    </td>
    </tr>
</table>

<br> 
 
### [Anisotropic Diffusion Filters (DSc Thesis)](https://aaltodoc.aalto.fi/handle/123456789/2999)

My DSc (PhD) thesis, Espoo 2002-2008. Essentially, it is this **[IJCNN-2005](https://ieeexplore.ieee.org/document/1555991)** paper polished in **[ICCV2007](https://ieeexplore.ieee.org/document/4408895)** and **[ACCV2007](https://link.springer.com/chapter/10.1007/978-3-540-76386-4_77)**. A good test case could have been the bilateral upscaling stage in volumetric light rendering. 
 
One could further pytorch these models by wrapping them into transformer networks or making a leap into **[convolutions](https://distill.pub/2021/understanding-gnns/)** **[on](https://blog.twitter.com/engineering/en_us/topics/insights/2021/graph-neural-networks-as-neural-diffusion-pdes)** **[graphs](https://twitter.com/mmbronstein/status/1407260749295239168)**, but the state of the art CNN might be tough to beat.
 
  <div class="blockquote">

  R.I.P.
  <br>

  Daffertshofer-Haken-1994 as a strategically wrong, but inspiring paper,
  Jaynes, machine learning in 2000s, my great nine years in Finland: Suomenlinna, Serena... Vaida Rutkauskaitė, Alexander Ilin, Vitaliy Nevdacha, 
  Mykola Ivanchenko, <em>Elia Liitiäinen</em>, Jan-Hendrik Schleimer, Jarrod Creado, <em>Leo Michael</em>, 
  <em>Jaakko Martti Johannes Miettinen</em>, Ville Rantamaula, Dexter He, 
  Mikko Katajamaa, Petteri Räisänen, Jaakko Peltonen, Petri Hyötylä, Matthieu Molinier, Jagdeesh Rajani, Sandro Grech, Ivan Ore, Giedrius Zavadskis, 
  Anita Bisi, Sergej Doudorov, Maxim Govtva, Paola Huaynate... I remember you.
  </div>

<br> 

<div class="blockquote">
  <table align="center">
  <tr>
  <td><div> “You're a picture on a piano.”</div></td>
  </tr>
  <tr>
  <td colspan="1" style="text-align:right"><div>- Get Carter, 2000</div></td>
  </tr>
  </table>
</div>

<br>

<div class="qube-perspective spin03">
  <div class="sq-50 qube-preserve3d">
    <ul class="qube cube03">
      <li class="front"></li>
      <li class="left"></li>
      <li class="back"></li>
      <li class="right"></li>
      <li class="top"></li>
      <li class="bottom"></li>
    </ul>
  </div>
</div>

<br>

<br>

<br>
