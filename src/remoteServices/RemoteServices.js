const axios = require('axios');

const remote = {
  address: 'http://localhost:5000'
  // address: window.config.apiUrl
}

const getRequests = (api) => {
  let token = localStorage.getItem('token')
  const apiUrl = remote.address + api
  let promise = new Promise((resolve, reject) => {
    axios.get(apiUrl, { headers: { "Authorization": `${token}` } })
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
    axios.post(apiUrl, data, { headers: { "Authorization": `${token}` } })
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
    axios.patch(apiUrl, data, { headers: { "Authorization": `${token}` } })
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
    axios.delete(apiUrl, { headers: { "Authorization": `${token}` } })
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
  sendSignin: (data) => {
    const url = `/signin`
    return postRequests(url, data)
  },
  sendSignup: (data) => {
    const url = `/users/signup`
    return postRequests(url, data)
  },
  getContacts: () => {
    const url = '/contacts'
    return getRequests(url)
  },
  addContact: (data) => {
    const url = `/contacts`
    return postRequests(url, data)
  },
  deleteContact: (id) => {
    const url = `/contacts/${id}`
    return deleteRequests(url)
  },
  updateContact: (data, id) => {
    const url = `/contacts/${id}`
    return patchRequests(url, data)
  },
  addRemoveFavourite: (id) => {
    const url = `/contacts/favourite/${id}`
    return getRequests(url)
  }
}

module.exports = RemoteServices
