// Parsed a scoped package name into name, version, and path.
const RE_SCOPED = /^(@[^\/]+\/[^@\/]+)(?:@([^\/]+))?(\/.*)?$/
// Parsed a non-scoped package name into name, version, path
const RE_NON_SCOPED = /^([^@\/]+)(?:@([^\/]+))?(\/.*)?$/

export function parse(input: string) {
  const m = RE_SCOPED.exec(input) || RE_NON_SCOPED.exec(input)

  if (!m) {
    throw new Error(`[parse-package-name] invalid package name: ${input}`)
  }

  return {
    name: m[1] || '',
    version: m[2] || 'latest',
    path: m[3] || '',
  }
}
