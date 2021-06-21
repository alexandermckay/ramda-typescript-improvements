# Ramda Typescript Improvements

## Overview

- Typescript and Ramda currently work well together but there is room for improvement
- Ramda is Javascript library maintained by Javascript developers. Therefore the aim of this repo is to push for improvements to the `@types/ramda` library rather than to change the core `ramda` library.

## Development

- If you would like to test out a `ramda` function create a `playground.ts` file in the root of the project and run `npx nodemon` or `npm start`.
- Each file (such as `src/types/isNil`) should either show:
  - How the function can be used in a point-free or partially-applied manner
  - How the function types are restricting the function from being used in a point-free or partially-applied manner and detail changes to the type signature that would fix it.
