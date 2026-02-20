"use strict"

const is = require("@10xly/is-instance-of")
const Error = require("es-error-intrinsics/Error")

module.exports = (x) => {
  if (is(x, Error)) throw x
  return x
}
