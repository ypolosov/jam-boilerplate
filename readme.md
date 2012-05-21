# About

Fork of html5-boilerplate, with number of tweaks.

## Installation 
Install csslint and styletto plugins with these commands:  

`npm install grunt-css`

`npm install grunt-styletto`

## Usage

First of all go to build directory:  
`cd build`  

Now you can use these commands:  

`grunt --base="../" watch` - watch for changes in css and js files. Auto-invokes jshint for js, styletto for css.  


`h5bp --base="../"` - lint, csslint, styletto  
`h5bp --base="../" watch` - same as above but watch task  
  
`h5bp --base="../" build` - jshint,concatenate and minify for js files, csslint plus styletto for styles  
`h5bp --base="../" publish` - same as build plus compress images