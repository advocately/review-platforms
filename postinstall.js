// postinstall.js

/**
 * Script to run after npm install
 *
 * Copy selected files to user's directory
 */

'use strict'

var gentlyCopy = require('gently-copy')

var filesToCopy = './logos/'

// User's local directory
// Warning: This assumes the package is installed into `node_modules/<package-name>/`
var userPath = '../../public/assets/images/review-platforms/logos'

// Moving files to user's local directory
gentlyCopy(filesToCopy, userPath)
