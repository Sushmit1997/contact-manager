import { useState, useEffect } from 'react'
import ContactCard from '../components/ContactCard'
import NavBar from '../components/NavBar'
import Loader from "react-loader-spinner";

const Services = require('../remoteServices/RemoteServices');

const HomePage = () => {
  const [contacts, setContacts] = useState([])
  const [contactsLoading, setContactsLoading] = useState(true)

  useEffect(() => {
    getContacts()
  }, [])

  const getContacts = () => {
    Services.getContacts().then((res) => {
      setContacts(res)
      setContactsLoading(false)
    })
  }



  return (
    <div >
      <NavBar getContacts={getContacts} />
      <div className='text-center mt-10'><h1 className='text-4xl'>Your Contacts ({contacts.length})</h1></div>
      <div className='flex-column p-20 mt-2 rounded-lg justify-center p-10'>
        {contactsLoading ?
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Loader
              type="Puff"
              color="#00BFFF"
              height={100}
              width={100}
              timeout={3000} //3 secs
            /> </div> :

          contacts.map((contact) => {
            return (
              <ContactCard contact={contact} getContacts={getContacts} />
            )
          })
        }

      </div>
    </div>
  )
}

export default HomePage