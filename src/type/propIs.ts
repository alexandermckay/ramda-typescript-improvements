import * as R from "ramda"

/**
 * @name propIs
 * @summary Changes required
 * @description
 * - First argument should only accept constructors
 * - Second argument can be any string when it should only be restricted to keys of object
 * - Third argument should be restricted to an object
 * - Provide a generic argument to ensure the key exists on the object
 * - Without the type guard better to use `is<x>(prop(y))`
 * - ❌ TODO: act as a type guard
 */

// First arg
R.propIs(String, "title", {title: "Harry Potter"})
R.propIs(undefined, "title", {title: "Harry Potter"})

// Second arg
R.propIs(String, "tite", {title: "Harry Potter"})
R.propIs(String, "title", {title: "Harry Potter"})

// 3. Third argument should be restrictable to an interface
interface Book {
	title: string
	year: number
}
R.propIs(String, "title", 10)
R.propIs<Book>(String, "title", {title: "", year: 2020})
R.propIs<Book>(Number, "year")({title: "", year: 2020})
R.propIs<Book>(String)("title")({title: "Harry Potter", year: 2020})
