const config = require('../config')
const store = require('./../store')

const signUp = function (data) {
  console.log('data is ', data)
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-up/',
    data: data
  })
}

const signIn = function (data) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sign-in/',
    data: data
  })
}
const signOut = function (data) {
  return $.ajax({
    method: 'DELETE',
    url: config.apiUrl + '/sign-out/',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const changePassword = function (data) {
  console.log('data is ', data)
  console.log('store is ', store)

  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/change-password/',
    data: data,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

module.exports = {
  signUp,
  signIn,
  signOut,
  changePassword
}
