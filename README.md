EPFL Elements Styles
====================

This repository contains a very simple module that just downloads the latest version of the built elements https://github.com/epfl-si/elements/archive/refs/heads/dist/frontend.zip", unzip and remove the javascript files. The main idea is to use it in the epfl react library (https://gitlab.epfl.ch/sti-it/epfl-sti-react-library) but you might find some other uses.


Install
--------

The install command will execute the `downloadElements` script that will execute the step described above. Please note this library is installed on our internal repo so the first step is to create an `.npmrc` (or `.yarnrc` file if you use yarn), where this pattern is defined: 


`.npmrc` example
```
@epfl-sti:registry=https://npm.pkg.github.com
registry=https://registry.npmjs.org/
```

`.yarnrc` example
```
@epfl-sti::registry" "https://npm.pkg.github.com/"
```

Once you create those files, you can install the library by simply issue an `npm install` (or `yarn add`):


```
npm install @epfl-sti/epfl-elements-styles
```

<i>Note: Don't forget the previous step. Without an .npmrc or .yarnrc file, the install process just won't work.</i>

License
-------

MIT

Author Information
------------------

Juan Convers (juan dot convers at epfl dot ch).

