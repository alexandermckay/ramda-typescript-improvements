import {compose, toLower, type} from "ramda"
import {log} from "src/utils"

/**
 * @name type
 * @summary No action required
 */

const fn = compose(toLower, type)

log(fn("Hello"))
log(fn(null))
