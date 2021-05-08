// A node.js script to generate a jwt from a MapKitJS private key.

const fs = require('fs');
const jwt = require('jsonwebtoken');

const privateKeyPath = process.argv.slice(2)

if (privateKeyPath[0] == null) {
  console.log("#################################################################")
  console.log("STOPPING SCRIPT: PATH TO PRIVATE KEY NOT FOUND.")
  console.log("Please add the path to the private key when calling this script.")
  console.log("Example: node mapkitjs-jwt-generator.js ~/path-to-your-private-key")
  console.log("#################################################################")
  process.exit(1)
}

const privateKey = fs
  .readFileSync(privateKeyPath[0])
  .toString()
  // required to handle newlines at the end of file, otherwise jsonwebtoken
  // doesn't like it!
  .replace(/\n$/, '');


// Optional values, these will appear in the payload section of the JWT.
// By default it is empty, jsonwebtoken populates the payload with the values needed for mapkit.
const payload = {

}

const options = {
  algorithm: "ES256", // This is the encryption algorithm mapkitjs requires, don't change this.
  keyid: "TMBN7T9Z2X", // This is the jwt kid, find this in the private key you create in the Apple Developer portal.
  issuer: "3CYLFTT3BH", // This is the team id in the Apple Developer portal.
  expiresIn: "365d", // Set to whatever expiry you need. Refer to the jsonwebtoken documentation for acceptable values: https://www.npmjs.com/package/jsonwebtoken#token-expiration-exp-claim

}

console.log(jwt.sign(payload, privateKey, options));