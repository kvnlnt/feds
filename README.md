# Notice
Change is coming to FEDS. It's being split in two:

1. :boom: FEDS (Front-end Design System): Will become a full blown component and application FedRAMP compliant framework for those who are concerned about security, standards and building software that lasts. It will be a 100% native, 100% testable, 100% dependency free, type safe (typescript) and have everything you need including: Design System, State Management, Templating, Routing, Testing, etc.
2. 💅 [FENO](https://github.com/kvnlnt/feno) (Front-end Nomenclature): "Feno" as in Phenotype (the set of observable characteristics or traits of an organism) will be an utility first css framework tailor made for FEDS. Following an established set of Nomenclature of: types -> atoms -> elements where types are primatives such as "moods" and "colors", atoms are the composable atomic class definitions based on the types and elements are collections of atoms that provide various degrees of control, namespacing and optimizations.

---

💀 All this below is dead, starting over.

# FEDS

Front-end Design System

![Build Status](https://reportingsystemsinc.visualstudio.com/Development/_apis/build/status/FEDS-build-pipeline)

## Purpose

Framework agnostic CSS library starter toolkit utilizing best practices

## Features

- Atomic (tachyons, short-hand syntax called "Atoms")
- Responsive (mobile first, container-queries)
- Framework agnostic (it's just css)
- Intuitive conventions (BEM, OOCSS)
- Styleguide
- Deployment friendly (autoprefixed, optimized, CI friendly)
- Standards based (Future proof, IDE friendly)

# Usage

    npm run build

Workflow is based around the auto generated style guide. Start the app, edit code and checkout the style guide generated in the [public folder](./public)

# Core Concepts

## Workflow

Once you've established a base set of:

- Params
- Atoms
- Molecules

You can create a set of Patterns. Once established, you want to avoid changing Params, Atoms and Molecules as they act as your design's foundation. Patterns is the place to introduce new "components" and train your users how to use your library. This abstraction is key in maintaining complexity. Being nothing more than a composition of Molecules and Atoms there's little concern to adding or subtracting from your pattern library.

## How It Works

Take a look at the `./src/styles` folder. It's a collection of config files.

- [atoms](./themes/base/atoms.json) - config file for your atoms css
- [fonts](./themes/base/fonts.json) - config file for your fonts
- [molecules](./themes/base/molecules.json) - config file for your molecules css
- [params](./themes/base/params.json) - config file for your variables
- [resets](./themes/base/resets.json) - config file for any reset/normalizing css

There's an npm task called `build`. It reads the configs and spits out artifacts. Pretty simple.

## Testing

Tests are run in dev using TestCafe. Running `npm test` triggers all tests in the `test` directory. Upon success the `package.json` file "test" key is set to the current build number. If tests fail, the "test" key is set to "false".

The `npm test:ci` task attempts to match the build number with the test number. A match proves that tests were successfully run against the build. This means all tests are executed and proved as part of dev process, eliminating the need to emulate browsers, etc on the server during deployment.

# Articles / Influences

- [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)- Brad Frost
- [BEM](http://getbem.com/) - CSS naming convention
- [Bulma](https://bulma.io/) - A great CSS framework
- [Cardinal Css](http://cardinalcss.com/) - A great CSS framework
- [Container Queries](https://ethanmarcotte.com/wrote/on-container-queries/) - #1 requested feature of web devs
- [Tachyons](http://tachyons.io/) - An "atomic" CSS Framework
- [You Might Not Need A CSS Framework](https://hacks.mozilla.org/2016/04/you-might-not-need-a-css-framework/) - How CSS frameworks might not be the best fit for complex projects
- [You Might Not Need Js](http://youmightnotneedjs.com/) - Speaks for itself
