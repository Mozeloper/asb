import { FaHome } from "react-icons/fa"
import { FaArchive } from "react-icons/fa"
import { FaArchway } from "react-icons/fa"
import { FaUserCircle } from "react-icons/fa"
import { BsSearch } from "react-icons/bs"
import { IoNotifications } from "react-icons/io5";

const Header = () => {
    return (
        <div className="flex flex-row px-10 box-border font-sans border-b justify-between">
          <div className="flex flex-row">
            <div className="box-border text-sm text-black font-bold mr-24 font-sans pt-3">
              FE ENGINEER TEST 1
            </div>
            <div>
              <ul className="list-style-none flex flex-row">
                <li className="pr-5 flex font-medium flex-row text-gray-600 py-3">
                    <div className="pt-1 pr-4">
                      <FaHome />
                    </div>
                    <div>
                      <a href="/">Home</a>
                    </div>
                </li>
                <li className="pr-5 font-medium flex text-gray-600 py-3">
                    <div className="pt-1 pr-4">
                    <FaArchive />
                    </div>
                    <a href="/">Entries</a>
                </li>
                <li className="pr-5 flex text-blue-600 font-semibold bg-blue-300 py-3 border-b-8 border-blue-600">
                    <div className="pt-1 pl-2 pr-4">
                      <FaArchway />
                    </div>
                    <a href="/">Divisions</a>
                </li>
              </ul>
            </div>
          </div>
          <div className="flex flex-row justify-between">
            <div className="mt-3 relative text-gray-600 focus-within:text-gray-400 mr-4">
              <span className="absolute inset-y-0 left-0 flex items-center pl-2">
                <button type="submit" className="pb-2 focus:outline-none focus:shadow-outline">
                  <BsSearch />
                </button>
              </span>
              <input type="text" className="py-2 text-sm text-white rounded-md pl-10 focus:outline-none focus:bg-white focus:text-gray-900" placeholder="Search..." autoComplete="off" />
            </div>
            <div className="mt-6 mr-4">
                <IoNotifications />
            </div>
            <div className="flex mt-6 mr-4">
                <FaUserCircle />
                <select className="-mt-3 bg-gray-50 focus:outline-none border-none"></select>
            </div>
          </div>
        </div>
    )
}
export default Header