'use strict'

let apiUrl
const apiUrls = {
  production: 'https://git.heroku.com/workout-app956.git',
  development: 'http://localhost:8000'
}

if (window.location.hostname === 'localhost') {
  apiUrl = apiUrls.development
} else {
  apiUrl = apiUrls.production
}

module.exports = {
  apiUrl
}
