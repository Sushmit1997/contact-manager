import { Link, useNavigate } from "react-router-dom"
import { useState } from "react"
import Modal from 'react-modal'
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

const NavBar = ({ getContacts }) => {
  const [showModal, setShowModal] = useState(false)
  const navigate = useNavigate()
  const closeModal = () => {
    setShowModal(false)
  }

  let contact = {
    name: '',
    number: '',
    email: '',
    address: '',
    image: ''
  }

  const handleLogOut = () => {
    localStorage.clear('token')
    navigate('/')
  }

  const handleActionSuccess = () => {
    closeModal()
    getContacts()
  }

  return (
    <nav class="flex  flex-wrap bg-teal-500 p-3">
      <div className="flex w-full justify-between">
        <div class="flex justify-end w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <button onClick={() => setShowModal(true)} href="#" class="inline-block mr-5 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Add Contact</button>
          <div>
            <span onClick={handleLogOut} class="cursor-pointer inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-red-800 mt-4 lg:mt-0">Log Out</span>
          </div>
        </div>
      </div>
      <Modal
        isOpen={showModal}
        style={customStyles}
        contentLabel="Example Modal"
        onRequestClose={closeModal}
      >
        <ContactForm contact={contact} action="add" handleActionSuccess={handleActionSuccess} />
      </Modal>
    </nav>
  )
}

export default NavBar