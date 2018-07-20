# FEDS

Front-end Design System

## Purpose

Framework agnostic CSS library starter toolkit utilizing best practices

## Features

- Atomic (tachyons, short-hand syntax called "Atoms")
- Responsive (mobile first, container-queries)
- Framework agnostic (it's just css)
- Intuitive conventions (BEM, OOCSS)
- Styleguide (called "patterns")
- Deployment friendly (autoprefixed, optimized, CI friendly)
- Standards based (Future proof, IDE friendly)

# Usage

    npm build

Workflow is based around the auto generated style guide. Start the app, edit code and checkout the style guide generated in the [public folder](./public)

# Core Concepts

## Workflow

Once you've established a base set of:

- Params
- Atoms
- Molecules

You can create a set of Patterns. Once established, you want to avoid changing Params, Atoms and Molecules as they act as your design's foundation. Patterns is the place to introduce new "components" and train your users how to use your library. This abstraction is key in maintaining complexity. Being nothing more than a composition of Molecules and Atoms there's little concern to adding or subtracting from your pattern library.

## How It Works

Take a look at the `./styles/base` folder. It's a collection of config files.

- [atoms](./themes/base/atoms.json) - config file for your atoms css
- [config](./themes/base/config.json) - basic metadata about the theme
- [fonts](./themes/base/fonts.json) - config file for your fonts
- [molecules](./themes/base/molecules.json) - config file for your molecules css
- [params](./themes/base/params.json) - config file for your variables
- [resets](./themes/base/resets.json) - config file for any reset/normalizing css

There's an npm task called `build`. It reads the configs and spits out an artifact. Pretty simple. The entire app is ~100 LOC and at this point I consider it's simplicity to be self documenting.

# Articles / Influences

- [Atomic Design](http://bradfrost.com/blog/post/atomic-web-design/)- Brad Frost
- [BEM](http://getbem.com/) - CSS naming convention
- [Bulma](https://bulma.io/) - A great CSS framework
- [Cardinal Css](http://cardinalcss.com/) - A great CSS framework
- [Container Queries](https://ethanmarcotte.com/wrote/on-container-queries/) - #1 requested feature of web devs
- [Tachyons](http://tachyons.io/) - An "atomic" CSS Framework
- [You Might Not Need A CSS Framework](https://hacks.mozilla.org/2016/04/you-might-not-need-a-css-framework/) - How CSS frameworks might not be the best fit for complex projects
- [You Might Not Need Js](http://youmightnotneedjs.com/) - Speaks for itself
