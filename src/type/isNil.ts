import {always, identity, ifElse, isNil} from "ramda"
import {log} from "../utils"

/**
 * @name isNil
 * @summary No action required
 */

const fn = ifElse(isNil, always("Bad Value"), identity)

log(fn(null))
log(fn("10"))
