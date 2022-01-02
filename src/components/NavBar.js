import { Link } from "react-router-dom"

const NavBar = () => {
  return (
    <nav class="flex  flex-wrap bg-teal-500 p-3">
      <div className="flex w-full justify-between">
        <div class="flex justify-end w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <a href="#" class="inline-block mr-5 text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0">Add Contact</a>
          <div>
            <Link to="/"> <span class="cursor-pointer inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-white hover:bg-red-800 mt-4 lg:mt-0">Log Out</span> </Link>
          </div>
        </div>
      </div>
    </nav>
  )
}

export default NavBar