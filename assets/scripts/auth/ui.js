const store = require('./../store')

const signUpSuccess = function (response) {
  $('#error-message').text('Thank you for signing up')
  $('#sign-up').trigger('reset')
}
const signUpFailure = function (response) {
  $('#error-message').text('Sign up failed, try again')
}

const signInSuccess = function (response) {
  store.user = response.user
  console.log(response)
  $('#error-message').text('Welcome Back')
  $('#sign-in').trigger('reset')

  $('#crud').show()
  $('#auth').hide()
}

const signInFailure = function (response) {
  $('#error-message').text('Sign in failed, try again.')
}
const changePasswordSuccess = function (response) {
  $('#error-message').text('your password was changed')
  $('#change-password').trigger('reset')
}
const changePasswordFailure = function (error) {
  $('#error-message').text('that was not your password')
  console.error('you made a mistake ', error)
}
const signOut = function (event) {
  $('#error-message').text('you signed out')
  $('#sign-out').trigger('reset')

  $('#crud').hide()
  $('#auth').show()
}

module.exports = {
  signUpSuccess,
  signUpFailure,
  signInSuccess,
  signInFailure,
  changePasswordFailure,
  changePasswordSuccess,
  signOut
}
