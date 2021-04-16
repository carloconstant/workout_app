'use strict'

// use require with a reference to bundle the file and use it in this file
// const example = require('./example')
const api = require('./../scripts/auth/api')
const authEvents = require('./auth/events')
// use require without a reference to ensure a file is bundled
// require('./example')

$(() => {
  // your JS code goes here
  // $('.auth').hide()
  $('#sign-up').on('submit', authEvents.onSignUp)
  $('#sign-out').on('submit', authEvents.onSignOut)

  // $('.crud').hide()
})
