/**
 * Deliberately insecure examples used to exercise Vulnfrog's code scanners.
 * Nothing here is reachable, exported, or run — it exists to produce findings.
 * Do not copy any of it into real code.
 */

const { execSync } = require("child_process")
const yaml = require("js-yaml")

// Command injection: user input concatenated straight into a shell command.
function listUserDirectory(username) {
    return execSync("ls -la /home/" + username).toString()
}

// SQL injection: query built by string concatenation rather than parameters.
function findUserByEmail(db, email) {
    return db.query("SELECT * FROM users WHERE email = '" + email + "'")
}

// Deserialisation of untrusted YAML with a schema that allows arbitrary types.
function parseConfig(untrustedYaml) {
    return yaml.load(untrustedYaml, { schema: yaml.DEFAULT_FULL_SCHEMA })
}

// Evaluating a string that came from the caller.
function runExpression(expression) {
    return eval(expression)
}

function executeUserCommand(userCommand) {
    return execSync(userCommand).toString()
}

// Regular expression built from unvalidated input.
function matchesPattern(input, pattern) {
    return new RegExp(pattern).test(input)
}

// Weak hashing for something password-shaped.
function hashPassword(password) {
    const crypto = require("crypto")
    return crypto.createHash("md5").update(password).digest("hex")
}

module.exports = {
    listUserDirectory,
    findUserByEmail,
    parseConfig,
    runExpression,
    executeUserCommand,
    matchesPattern,
    hashPassword,
}
