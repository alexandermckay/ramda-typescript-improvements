# Ramda Typescript Improvements

## Overview

- Typescript and Ramda currently work well together but there is room for improvement
- Ramda is Javascript library maintained by Javascript developers. Therefore the aim of this repo is to push for improvements to the `@types/ramda` library rather than to change the core `ramda` library.

## Development

- Each file (such as `src/type/isNil`) should show how the types could be improved to provide greater type safety.
- Any updates to a functions type signature should be added to `src/ramda-ext/index.d.ts`
- Any update should include a section in this `readme.md` file that explains how to use the functions in a typescript project. See below for examples.

## Functions

### Type

#### is

- You need to provide a generic for `is` to work as a custom type guard.

```typescript
const isNumber = is<number>(Number)
const a = (): number | string => {...}
if (is<number>(Number, a)) a * a // equivalent to below
if (isNumber(a)) a * a // equivalent to above
else return parseInt(a)
```

#### isNil

```typescript
ifElse(isNil, ..., ...)
```

#### propIs

- You need to provide a generic for `propIs` to work correctly.

```typescript
const book = {title: "Harry Potter", year: 2020}
R.propIs<Book>(String, "title", book)
R.propIs<Book>(Number, "year")(book)
R.propIs<Book>(String)("title")(book)
```

#### type

```typescript
compose(toLower, type)
```
