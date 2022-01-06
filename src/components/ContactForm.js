
import { useEffect, useState } from "react"
import { useToasts } from 'react-toast-notifications';

import { avatar } from "../assets"



const Services = require('../remoteServices/RemoteServices');

const ContactForm = ({ action, contact, handleActionSuccess }) => {
  const address = 'http://localhost:5000/'
  const [imagePreview, setImagePreview] = useState(address + contact.image)

  const [formData, setFormData] = useState({
    name: contact.name,
    email: contact.email,
    number: contact.number,
    image: contact.image,
    address: contact.address,
  })

  useEffect(() => {
    action === 'add' && setImagePreview(avatar)
  }, [])


  let clickHandler = null


  const { addToast } = useToasts();

  const handleFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const getExtension = (filename) => {
    var parts = filename.split('.');
    return parts[parts.length - 1];
  }

  const isImage = (filename) => {
    var ext = getExtension(filename);
    switch (ext.toLowerCase()) {
      case 'jpg':
      case 'gif':
      case 'bmp':
      case 'png':
      case 'jpeg':
        //etc
        return true;
    }
    return false;
  }

  const handleImageSelect = (e) => {
    let fileName = e.target.files[0].name
    let file = e.target.files[0]
    if (isImage(fileName)) {
      setFormData({ ...formData, image: file })
      setImagePreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  const handleFormSubmit = () => {

    const data = new FormData()
    data.append('image', formData.image)
    data.append('name', formData.name)
    data.append('number', formData.number)
    data.append('address', formData.address)
    data.append('email', formData.email)


    action === 'add' ?
      Services.addContact(data).then((res) => {
        handleActionSuccess()
        addToast('Contact added.', { appearance: 'success' });
      }).catch((err) => {
        addToast('Failed', { appearance: 'error' });
      }) :
      Services.updateContact(data, contact._id).then((res) => {
        handleActionSuccess()
        addToast('Contact updated.', { appearance: 'success' });
      }).catch((err) => {
        addToast('Failed', { appearance: 'error' });
      })


  }


  return (
    <div>
      <form className="w-full max-w-lg">
        <div className="flex-column justify-center">
          <div className="photo-wrapper p-2">
            <img className="w-32 h-32 rounded-full mx-auto" src={imagePreview} alt="Profile"></img>
          </div>
          <input id="files" className=" hidden ml-[100px] mt-5 bg-blue-500 capitalize hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded justify-end" onChange={(e) => handleImageSelect(e)} accept="png/jpeg" type="file">
          </input>
          <label className="block w-1/2 m-auto text-center mt-5 text-lg uppercase tracking-wide text-white pointer text-xs font-bold mb-2 pointer bg-blue-500 capitalize hover:bg-blue-700 text-white font-bold py-2 px-4 " for="files" >{action === 'add' ? 'Add Image' : 'Change Image'} </label>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 mt-10">

          <div className="w-1/2  px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Full Name
            </label>
            <input value={formData.name} name="name" onChange={(e) => handleFormData(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"></input>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div className="w-1/2  px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              Phone Number
            </label>
            <input value={formData.number} name="number" onChange={(e) => handleFormData(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="9813058480"></input>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Address
            </label>
            <input value={formData.address} name="address" onChange={(e) => handleFormData(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Address"></input>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              E-mail
            </label>
            <input value={formData.email} name="email" onChange={(e) => handleFormData(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="sushmit@gmail.com"></input>
          </div>
        </div>
      </form>
      <div className="flex w-full">
        <button onClick={handleFormSubmit} className="bg-blue-500 capitalize hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded justify-end">
          {action}
        </button>
      </div>
    </div>
  )
}

export default ContactForm