import * as R from "ramda"
import {Constructor} from "../types"

/**
 * @name is
 * @summary Changes required
 * @description
 * - To be useful in Typescript, `is` needs to become a type guard.
 * - The `constructor` argument should also be restricted to only allow constructor functions.
 */
export function is<Guard>(constructor: Constructor, v: any): v is Guard
export function is<Guard>(constructor: Constructor): (v: any) => v is Guard
export function is(constructor: Constructor, value?: any) {
	const _inner = (constructor: Constructor, value: any) =>
		(value != null && value.constructor === constructor) ||
		value instanceof constructor
	if (value != null) return _inner(constructor, value)
	else return (v: any) => _inner(constructor, v)
}

// -- Example of Issue -- \\

// Current
const squareConcatReturnA = (input: number | string) => {
	if (R.is(Number, input)) return input * input
	if (R.is(String, input)) return input.concat(input)
}

// Current imperative alternative
const squareConcatReturnB = (input: number | string) => {
	if (typeof input === "number") return input * input
	if (typeof input === "string") return input.concat(input)
	return input
}

// Improved version
const squareConcatReturnC = (input: number | string) => {
	if (is<number>(Number, input)) return input * input // => number * number
	if (is<string>(String, input)) return input.concat(input) // => string.concat(string)
	return input
}
