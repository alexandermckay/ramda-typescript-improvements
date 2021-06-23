import {compose, toLower, type} from "ramda"

/**
 * @name type
 * @summary No action required
 */

const fn = compose(toLower, type)

fn("Hello")
fn(null)
