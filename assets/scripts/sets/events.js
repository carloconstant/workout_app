const api = require('./api')
const ui = require('./ui')
const getFormFields = require('../../../lib/get-form-fields')

const onIndexSet = function (event) {
  event.preventDefault()
  api.index()
    .then(ui.onIndexSuccess)
    .catch(ui.onError)
}
const onShowSet = function (event) {
  event.preventDefault()
  const form = event.target
  const formData = getFormFields(form)

  api.show(formData.topic.id)
    .then(ui.onShowSuccess)
    .catch(ui.onError)
}
const onCreateSet = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)

  api.create(formData)
    .then(ui.onCreateSuccess)
    .catch(ui.onError)
}
const onUpdateSet = function (event) {
  event.preventDefault()

  const form = event.target
  const formData = getFormFields(form)
  const id = formData.topic.id
  api.update(id, formData)
    .then(ui.onUpdateSuccess)
    .catch(ui.onError)
}
const onDeleteSet = function (event) {
  event.preventDefault()
  const formData = getFormFields(event.target)

  api.deleted(formData.topic.id)
    .then(ui.onDeleteSuccess)
    .catch(ui.onError)
}
module.exports = {
  onIndexSet,
  onShowSet,
  onCreateSet,
  onUpdateSet,
  onDeleteSet
}
