
import { useEffect, useState } from "react"

const ContactForm = () => {

  const [imagePreview, setImagePreview] = useState('')

  const [formData, setFormData] = useState({
    firstName: 'Sushmit',
    lastName: 'Rajaure',
    email: 'something@gmail.com',
    phone: '9813058480',
    image: ''
  })

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
    if (isImage(fileName)) {
      setFormData({ ...formData, image: URL.createObjectURL(e.target.files[0]) })
      setImagePreview(URL.createObjectURL(e.target.files[0]))
    }
  }

  console.log(formData)

  return (
    <div>
      <form className="w-full max-w-lg">
        <div className="flex-column justify-center">
          <div className="photo-wrapper p-2">
            {imagePreview && <img className="w-32 h-32 rounded-full mx-auto" src={imagePreview} alt="John Doe"></img>}
          </div>
          <input onChange={(e) => handleImageSelect(e)} accept="png/jpeg" type="file"></input>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6 mt-10">

          <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
              First Name
            </label>
            <input value={formData.firstName} name="firstName" onChange={(e) => handleFormData(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"></input>
            <p className="text-red-500 text-xs italic">Please fill out this field.</p>
          </div>
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Last Name
            </label>
            <input value={formData.lastName} name="lastName" onChange={(e) => handleFormData(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"></input>
          </div>
        </div>
        <div className="flex flex-wrap -mx-3 mb-6">
          <div className="w-full md:w-1/2 px-3">
            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
              Phone Number
            </label>
            <input value={formData.phone} name="phone" onChange={(e) => handleFormData(e)} className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="9813058480"></input>
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
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded justify-end">
          Update
        </button>
      </div>
    </div>
  )
}

export default ContactForm