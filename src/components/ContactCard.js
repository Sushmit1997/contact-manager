import { sushmitImage } from "../assets"
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import ContactForm from "./ContactForm";

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

  const closeModal = () => {
    setShowModal(false)
  }


  return (
    <div className="flex justify-center mb-10">

      <div className="relative max-w-[500px] bg-white shadow-xl rounded-lg py-3">
        <div onClick={() => setShowMenu(true)} className="absolute right-[15px] top-[5px] cursor-pointer "><i className="fa fa-ellipsis-v "></i></div>
        {showMenu && <div onMouseLeave={() => setShowMenu(false)} className="absolute right-[-70px] top-[5px] cursor-pointer bg-white p-[5px] shadow-sm"><ul>
          <li className="hover:text-teal-500" onClick={() => setShowModal(true)}>Update</li>
          <li className="hover:text-teal-500">Delete</li>
        </ul>
        </div>
        }
        <div className="photo-wrapper p-2">
          <img className="w-32 h-32 rounded-full mx-auto" src={sushmitImage} alt="John Doe"></img>
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">Joh Doe</h3>
          <div className="text-center text-gray-400 text-xs font-semibold">
            <p>Web Developer</p>
          </div>
          <div className="flex justify-center">
            <table className="text-xs my-3">
              <tbody><tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                <td className="px-2 py-2">Chatakpur-3, Dhangadhi Kailali</td>
              </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td className="px-2 py-2">+977 9955221114</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td className="px-2 py-2">john@exmaple.com</td>
                </tr>
              </tbody></table>
          </div>

          <div className="text-center my-3">
            <a className="text-xs text-indigo-500 italic hover:underline hover:text-indigo-600 font-medium" href="#">View Profile</a>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
      >
        <ContactForm />
      </Modal>
    </div>
  )
}

export default ContactCard