const onCreateSuccess = function () {
  $('#error-message').html('you have successfully created a topic')
  $('#error-message').addClass('success')

  $('#error-message').html('new topic created check at get all')
  $('form').trigger('reset')
  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('success')
  }, 5000)
}
const onUpdateSuccess = function (responseData) {
  $('#error-message').html('Update complete!')
  $('#error-message').html('changes: ')
  $('#error-message').addClass('success')
  setTimeout(() => {
    $('#error-message').html('')
    $('#error-message').removeClass('success')
  }, 5000)
  $('form').trigger('reset')
}
const onError = function (error) {
  console.error(error)
  $('#message').html('<h4>Something went wrong, please try again.</h4>')
  $('#message').addClass('failure')
  setTimeout(() => {
    $('#message').html('')
    $('#message').removeClass('failure')
  }, 5000)
}

const onDeleteSuccess = function () {
  $('#delete-message').html('the comment was deleted')
  $('#topics-display').html('check the comments for the update')
  $('#delete-message').addClass('success')

  setTimeout(() => {
    $('#delete-message').html('')
    $('#delete-message').removeClass('success')
  }, 5000)

  $('form').trigger('reset')
}
module.exports = {
  onDeleteSuccess,
  onIndexSuccess,
  onShowSuccess,
  onError,
  onCreateSuccess,
  onUpdateSuccess
}
