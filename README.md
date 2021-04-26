# MapkitJS Jwt Generator

Use this script to generate a JWT for MapkitJS.

Written using node.js.

# Usage

1. Create a Maps ID and private key as described [here](https://developer.apple.com/documentation/mapkitjs/creating_a_maps_identifier_and_a_private_key). Make sure to download the private key and store it in a safe place.

2. Edit the options object in `jwt-generator.js` so it contains the following information specific to your team and expiry date:

    - keyid
    - issuer
    - expiresIn 

3. From the terminal. Run this script, passing in the path to the private key.

```
node jwt-generator.js path/to/your/key.here
```

4. The terminal will output the JWT. Copy it and use in your projects.

## Acknowledgements

Adapted from a [blog post](https://www.jvt.me/posts/2020/02/19/sign-jwt-nodejs/) by [Jamie Tanna](https://twitter.com/jamietanna).