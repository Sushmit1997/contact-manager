const axios = require('axios');

const remote = {
  address: 'http://139.59.35.207/api/v2/'
  // address: window.config.apiUrl
}

const getRequests = (api) => {
  let token = localStorage.getItem('token')
  const apiUrl = remote.address + api
  let promise = new Promise((resolve, reject) => {
    axios.get(apiUrl, { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        var data = res.data
        resolve(data)
      })
      .catch(error => {
        var errorMessage = error.response.data.Message
        reject(errorMessage)
      })
  })
  return promise
}

const postRequests = (api, data) => {
  let token = localStorage.getItem('token')
  const apiUrl = remote.address + api
  let promise = new Promise((resolve, reject) => {
    axios.post(apiUrl, data, { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        var data = res.data
        resolve(data)
      })
      .catch(error => {
        var errorMessage = error.response.data.Message
        reject(errorMessage)
      })
  })
  return promise
}

const patchRequests = (api, data) => {
  let token = localStorage.getItem('token')
  const apiUrl = remote.address + api
  let promise = new Promise((resolve, reject) => {
    axios.patch(apiUrl, data, { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        var data = res.data
        resolve(data)
      })
      .catch(error => {
        var errorMessage = error.response.data.Message
        reject(errorMessage)
      })
  })
  return promise
}

const deleteRequests = (api) => {
  let token = localStorage.getItem('token')
  const apiUrl = remote.address + api
  let promise = new Promise((resolve, reject) => {
    axios.delete(apiUrl, { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        var data = res.data
        resolve(data)
      })
      .catch(error => {
        var errorMessage = error.response.data.Message
        reject(errorMessage)
      })
  })
  return promise
}

const putRequests = (api, data) => {
  let token = localStorage.getItem('token')
  const apiUrl = remote.address + api
  let promise = new Promise((resolve, reject) => {
    axios.put(apiUrl, data, { headers: { "Authorization": `Bearer ${token}` } })
      .then(res => {
        var data = res.data
        resolve(data)
      })
      .catch(error => {
        var errorMessage = error.response.data.Message
        reject(errorMessage)
      })
  })
  return promise
}


var RemoteServices = {
  sendLogin: (data) => {
    const url = `user/login`
    return postRequests(url, data)
  }
}

module.exports = RemoteServices
