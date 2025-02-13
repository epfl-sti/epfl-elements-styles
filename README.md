# EPFL Elements Styles

This repository contains a very simple module that just downloads the latest version of the built elements from [EPFL Elements GitHub](https://github.com/epfl-si/elements/archive/refs/heads/dist/frontend.zip), unzips it, and removes the JavaScript files. The main idea is to use it in the EPFL React Library, but you might find other uses for it.

## Installation

The install command will execute the `downloadElements` script that will perform the steps described above.

Once you create those files, you can install the library by simply issuing:

```bash
npm install @epfl-sti/epfl-elements-styles
```

Alternatively, you can use `yarn`:

```bash
yarn add @epfl-sti/epfl-elements-styles
```
or pnpm:

```bash
pnpm add @epfl-sti/epfl-elements-styles
```

## License

Apache 2.0 License

## Author Information

Juan Convers (juan.convers@epfl.ch)
