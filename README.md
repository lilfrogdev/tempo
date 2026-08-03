# tempo
a cli project manager built in rust

## Security scanning fixture

This repository doubles as a test target for [Vulnfrog](https://vulnfrog.com).
`package.json`, `package-lock.json` and `src/insecure-examples.js` are
**deliberately vulnerable** and exist only to produce scanner findings:

- pinned npm dependencies with known advisories, declared as direct dependencies
- code patterns that static analysis should flag

None of it is imported, executed, or shipped. Don't copy any of it into real
code, and don't treat open findings on this repository as a live risk.

Diagnostic PR for reproducing out-of-diff Vulnfrog review comments; do not merge.
