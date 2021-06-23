import {ifElse, isNil} from "ramda"

/**
 * @name isNil
 * @summary No action required
 */

const fn = ifElse(
	isNil,
	() => "Bad Value",
	() => "Good Value"
)

fn(null)
fn("10")
