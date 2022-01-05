import { sushmitImage } from "../assets"
import { useEffect, useState } from 'react'
import Modal from 'react-modal';
import ContactForm from "./ContactForm";
import { useToasts } from 'react-toast-notifications';


const Services = require('../remoteServices/RemoteServices');

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

const ContactCard = ({ contact, getContacts }) => {
  const [showMenu, setShowMenu] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [showDeleteConfirm, setShowDeleteConfirm] = useState(false)

  const address = 'http://localhost:5000/'

  const { addToast } = useToasts();

  const closeModal = () => {
    setShowModal(false)
  }

  const closeDeleteConfirm = () => {
    setShowDeleteConfirm(false)
  }

  const handleActionSuccess = () => {
    closeModal()
    getContacts()
  }

  const handleDelete = () => {
    Services.deleteContact(contact._id).then((res) => {
      addToast('Contact deleted.', { appearance: 'success' });
      closeDeleteConfirm()
      getContacts()
    }).catch((err) => {
      addToast('Operation failed', { appearance: 'error' });
    })
  }


  return (
    <div className="flex justify-center mb-10">

      <div className="relative max-w-[500px] min-w-[300px] bg-white shadow-xl rounded-lg py-3">
        <div onClick={() => setShowMenu(true)} className="absolute right-[15px] top-[5px] cursor-pointer "><i className="fa fa-ellipsis-v "></i></div>
        {showMenu && <div onMouseLeave={() => setShowMenu(false)} className="absolute right-[-70px] top-[5px] cursor-pointer bg-white p-[5px] shadow-sm"><ul>
          <li className="hover:text-teal-500" onClick={() => setShowModal(true)}>Update</li>
          <li className="hover:text-teal-500" onClick={() => setShowDeleteConfirm(true)}>Delete</li>
        </ul>
        </div>
        }
        <div className="photo-wrapper p-2">
          <img className="w-32 h-32 rounded-full mx-auto" src={contact.image ? address + contact.image : sushmitImage} alt="John Doe"></img>
        </div>
        <div className="p-2">
          <h3 className="text-center text-xl text-gray-900 font-medium leading-8">{contact.name}</h3>

          <div className="flex justify-center">
            <table className="text-xs my-3">
              <tbody><tr>
                <td className="px-2 py-2 text-gray-500 font-semibold">Address</td>
                <td className="px-2 py-2">{contact.address}</td>
              </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">Phone</td>
                  <td className="px-2 py-2">{contact.number}</td>
                </tr>
                <tr>
                  <td className="px-2 py-2 text-gray-500 font-semibold">Email</td>
                  <td className="px-2 py-2">{contact.email}</td>
                </tr>
              </tbody></table>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
      >
        <ContactForm contact={contact} action='update' handleActionSuccess={handleActionSuccess} />
      </Modal>
      <Modal
        isOpen={showDeleteConfirm}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={closeDeleteConfirm}
      >
        <div className="flex-column">
          <span className="text-lg">Are you sure you want to delete this contact?</span>
          <div className="flex justify-between w-1/2 mt-5">
            <button className="bg-red-500 hover:bg-red-700 text-white font-bold py-2 px-4 rounded" onClick={handleDelete}>Delete</button>
            <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded" onClick={closeDeleteConfirm}>Cancel</button>
          </div>
        </div>
      </Modal>
    </div>
  )
}

export default ContactCard