import {Constructor} from "../types"
import {is} from "./is"
import * as R from "ramda"

R.propIs(Number)("age")({age: 1})

/**
 * @name propIs
 * @summary Changes required
 * @description
 * - Provide stricter types
 * - Provide a generic argument to ensure the key exists on the object
 * - ❌ TODO: act as a type guard
 */

function propIs<Obj extends object>(
	constructor: Constructor,
	key: keyof Obj,
	obj: Obj
): boolean
function propIs<Obj extends object>(
	constructor: Constructor,
	key: keyof Obj
): (obj: Obj) => boolean
function propIs<Obj extends object>(
	constructor: Constructor
): (key: keyof Obj) => (obj: Obj) => boolean
function propIs(constructor: any, key?: any, obj?: any) {
	const _propIs = (c: any, k: any, o: any) => is(c, o[k])
	if (key == null && obj == null) {
		return (key: any, obj?: any) => {
			if (obj == null) return (obj: any) => _propIs(constructor, key, obj)
			else return _propIs(constructor, key, obj)
		}
	} else if (obj == null) {
		return (obj: any) => _propIs(constructor, key, obj)
	} else {
		return _propIs(constructor, key, obj)
	}
}

// -- Example of Issue -- \\
// 1. First argument is untyped
R.propIs(String, "title", {title: "Harry Potter"}) // => Correct
R.propIs(undefined, "title", {title: "Harry Potter"}) // => Silent error
// New behaviour
propIs(undefined, "title", {title: "Harry Potter"}) // => Error - undefined is not a constructor

// 2. Second argument can be any string when it should only be restricted to keys of object
// Current behaviour
R.propIs(String, "tite", {title: "Harry Potter"}) // => Silent error
// New behavior
propIs(String, "tite", {title: "Harry Potter"}) // => Error - `tite` not on type 'title'
propIs(String, "title", {title: "Harry Potter"}) // => Error - `tite` not on type 'title'

// 3. Third argument should be restrictable to an interface
// Current behaviour
R.propIs(String, "title", 10) // => Silent error
// New behaviour
interface Book {
	title: string
	year: number
}
propIs<Book>(String, "title", 10) // should throw error - 10 is not an object

propIs<Book>(String)("title")({title: "Harry Potter", year: 2020}) // => Correct
