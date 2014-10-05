GalaxyCraft
===========

Well-resolved images of galaxies (like
[these](http://talk.galaxyzoo.org/#/collections/CGZL00003q) from Galaxy Zoo)
contain a lot of "morphological" information:  that is currently not being
extracted and used. This is because fitting very flexible yet physically
meangful models to high signal to noise ratio data of complex galaxies is
hard. We'd like to advance astronomy by enabling a lot of *new galaxy
astrophysics parameters* - such as the spiral arm winding tightness, star
formation clumpiness, dust texture, and so on - to be inferred from our
beautiful data.

GalaxyCraft is a web-based modeling tool that will enable anyone to choose a
galaxy from the zoo, and make an *artist's impression* of it using a standard
toolkit of simply parametrized but very realistic components: bulges, disks,
spiral rms, dust, and so on. When the lovingly crafted model looks right, 
then the parameters of that model *already constitute a measurement* of new
parameters; collecting many such measurements from a crowd of craftspeople
might lead to a meaningful posterior PDF for the parameters. A better approach
would be to enable automated posterior maximization and exploration intialized
with a crafted model, via a big red "optimize" button.

### [Demo](http://drphilmarshall.github.io/GalaxyCraft/)

* Textured galaxy model suggested by [Groeneboom & Dahle (2014)](https://github.com/drphilmarshall/GalaxyCraft/raw/master/doc/litter/GAMER_Groeneboom%2BDahle2014.pdf)
* Galaxy ray-tracing devloped at [Shadertoy](https://www.shadertoy.com/view/4dSSWm) and [jsfiddle](jsfiddle.net)


### Contributors:

* Otavio Good
* Phil Marshall
* Carl Gorringe

Science Hack Day, San Francisco, 2014.
