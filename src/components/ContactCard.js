import { sushmitImage } from "../assets"
import { useEffect, useState } from 'react'
import Modal from 'react-modal';

const customStyles = {
  content: {
    top: '50%',
    left: '50%',
    right: 'auto',
    bottom: 'auto',
    marginRight: '-50%',
    transform: 'translate(-50%, -50%)',
  },
};

const ContactCard = () => {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [formData, setFormData] = useState({
    firstName: 'Sushmit',
    lastName: 'Rajaure',
    email: 'something@gmail.com',
    phone: '9813058480'
  })

  const handleFormData = (event) => {
    setFormData({ ...formData, [event.target.name]: [event.target.value] })
  }

  const closeModal = () => {
    setShowModal(false)
  }

  console.log(formData)


  return (
    <div class="flex justify-center mb-10">

      <div class="relative max-w-[500px] bg-white shadow-xl rounded-lg py-3">
        <div onClick={() => setShowMenu(true)} className="absolute right-[15px] top-[5px] cursor-pointer "><i className="fa fa-ellipsis-v "></i></div>
        {showMenu && <div onMouseLeave={() => setShowMenu(false)} className="absolute right-[-70px] top-[5px] cursor-pointer bg-white p-[5px] shadow-sm"><ul>
          <li className="hover:text-teal-500" onClick={() => setShowModal(true)}>Update</li>
          <li className="hover:text-teal-500">Delete</li>
        </ul>
        </div>
        }
        <div class="photo-wrapper p-2">
          <img class="w-32 h-32 rounded-full mx-auto" src={sushmitImage} alt="John Doe"></img>
        </div>
        <div class="p-2">
          <h3 class="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
          <div class="text-center text-gray-400 text-xs font-semibold">
            <p>Web Developer</p>
          </div>
          <div className="flex justify-center">
            <table class="text-xs my-3">
              <tbody><tr>
                <td class="px-2 py-2 text-gray-500 font-semibold">Address</td>
                <td class="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
              </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td class="px-2 py-2">+977 9955221114</td>
                </tr>
                <tr>
                  <td class="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td class="px-2 py-2">john@exmaple.com</td>
                </tr>
              </tbody></table>
          </div>

          <div class="text-center my-3">
            <a class="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
      >
        <div>
          <form class="w-full max-w-lg">
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-first-name">
                  First Name
                </label>
                <input value={formData.firstName} name="firstName" onChange={(e) => handleFormData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white" id="grid-first-name" type="text" placeholder="Jane"></input>
                <p class="text-red-500 text-xs italic">Please fill out this field.</p>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Last Name
                </label>
                <input value={formData.lastName} name="lastName" onChange={(e) => handleFormData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="Doe"></input>
              </div>
            </div>
            <div class="flex flex-wrap -mx-3 mb-6">
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  Phone Number
                </label>
                <input value={formData.phone} name="phone" onChange={(e) => handleFormData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="9813058480"></input>
              </div>
              <div class="w-full md:w-1/2 px-3">
                <label class="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" for="grid-last-name">
                  E-mail
                </label>
                <input value={formData.email} name="email" onChange={(e) => handleFormData(e)} class="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-last-name" type="text" placeholder="sushmit@gmail.com"></input>
              </div>
            </div>
          </form>
          <div className="flex w-full">
            <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 border border-blue-700 rounded justify-end">
              Update
            </button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ContactCard