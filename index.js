'use strict'

const RE_SCOPED = /^(@[^/]+\/[^/@]+)(?:\/([^@]+))?(?:@([\s\S]+))?/
const RE_NORMAL = /^([^/@]+)(?:\/([^@]+))?(?:@([\s\S]+))?/

module.exports = function (input) {
  if (typeof input !== 'string') {
    throw new TypeError('Expected a string')
  }

  const matched = input.charAt(0) === '@' ? input.match(RE_SCOPED) : input.match(RE_NORMAL)

  if (!matched) {
    throw new Error(`[parse-package-name] "${input}" is not a valid string`)
  }

  return {
    name: matched[1],
    path: matched[2] || '',
    version: matched[3] || ''
  }
}
