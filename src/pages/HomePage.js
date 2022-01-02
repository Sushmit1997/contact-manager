import { contacts } from '../utils/constants/mockData'
import ContactCard from '../components/ContactCard'
import NavBar from '../components/NavBar'

const HomePage = () => {
  return (
    <div >
      <NavBar />
      <div className='text-center mt-10'><h1 className='text-4xl'>Your Contacts</h1></div>
      <div className='flex-column p-20 mt-2 rounded-lg justify-center p-10'>
        {contacts.map((data) => {
          return (
            <ContactCard />
          )
        })}
      </div>
    </div>
  )
}

export default HomePage