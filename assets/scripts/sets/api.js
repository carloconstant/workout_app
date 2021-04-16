const config = require('../config')
const store = require('./../store')

const index = function () {
  console.log(config.apiUrl + '/sets')
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/sets',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const show = function (id) {
  return $.ajax({
    method: 'GET',
    url: config.apiUrl + '/sets/' + id,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const create = function (formData) {
  return $.ajax({
    method: 'POST',
    url: config.apiUrl + '/sets/',
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}

const update = function (id, formData) {
  return $.ajax({
    method: 'PATCH',
    url: config.apiUrl + '/sets/' + id,
    data: formData,
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
const deleted = function (id) {
  return $.ajax({
    url: config.apiUrl + '/sets/' + id,
    method: 'DELETE',
    headers: {
      Authorization: 'Bearer ' + store.user.token
    }
  })
}
module.exports = {
  update,
  create,
  show,
  index,
  deleted
}
