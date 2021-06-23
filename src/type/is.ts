import * as R from "ramda"

R.is(Number, 10)

/**
 * @name is
 * @summary Changes required
 * @description
 * - To be useful in Typescript, `is` needs to become a type guard.
 * - The `constructor` argument should also be restricted to only allow constructor functions.
 */
const squareOrConcat = (input: number | string) => {
	if (R.is<number>(Number, input)) return input * input // => number * number
	if (R.is<string>(String, input)) return input.concat(input) // => string.concat(string)
	return input
}

squareOrConcat(10) // => 100
