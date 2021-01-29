import { IoEllipsisVerticalOutline } from "react-icons/io5";
import { BsArrowDownRight } from "react-icons/bs";
import { AiOutlineArrowRight } from "react-icons/ai";
import { AiOutlineArrowUp } from "react-icons/ai";

const Table = () => {
    return (
        <>
        <table className="w-full h-full animate-fadeIn rounded-xl shadow-lg animate-fadeIn sans-fonts p-3 shadow-lg bg-white">
            <tr className="text-left">
              <th className="bg-indigo-50">
                <input type="checkbox" className="form-checkbox h-4 w-4 ml-3 text-gray-600" />
              </th>
              <th className="bg-indigo-50 text-sm text-left">Name</th>
              <th className="bg-indigo-50 text-sm text-left">Location</th>
              <th className="bg-indigo-50 text-sm text-left">Status</th>
              <th className="bg-indigo-50 text-sm text-left">Status</th>
              <th className="bg-indigo-50 text-sm text-left">Risk Profile</th>
              <th className="bg-indigo-50 text-sm text-left"></th>
            </tr>
            <tr>
              <td className="py-0">
                <input type="checkbox" className="form-checkbox h-4 w-4 ml-3 text-gray-600" />
              </td>
              <td className="text-sm text-gray-500 font-bold">Courtney Henry</td>
              <td className="text-sm text-gray-500 font-bold">
                Lagos State
                <p className="font-normal text-xs">775 Rolling Green Rd.</p>
              </td>
              <td className="text-sm text-indigo-600 font-bold">2 issues found</td>
              <td className="text-sm text-gray-500 font-bold"><li>19 Unique Entries</li></td>
              <td className="flex text-sm text-green-500 font-bold"><BsArrowDownRight /> Low Risk</td>
              <td><IoEllipsisVerticalOutline /></td>
            </tr>
            <tr>
              <td className="py-0">
                <input type="checkbox" className="form-checkbox h-4 w-4 ml-3 text-gray-600" />
              </td>
              <td className="text-sm text-gray-500 font-bold">Darrel Steward</td>
              <td className="text-sm text-gray-500 font-bold">
                Lagos State
                <p className="font-normal text-xs">7529 E. Pecan St.</p>
              </td>
              <td className="text-sm text-yellow-500 font-bold">No issues</td>
              <td className="text-sm text-gray-500 font-bold"><li>10 Unique Entries</li></td>
              <td className="flex text-center text-sm text-purple-800 font-bold"><AiOutlineArrowRight />Mid Risk</td>
              <td><IoEllipsisVerticalOutline /></td>
            </tr>
            <tr>
              <td className="py-0">
                <input type="checkbox" className="form-checkbox h-4 w-4 ml-3 text-gray-600" />
              </td>
              <td className="text-sm text-gray-500 font-bold">Cody Fisher</td>
              <td className="text-sm text-gray-500 font-bold">
                Lagos State
                <p className="font-normal text-xs">3605 Parker Rd.</p>
              </td>
              <td className="text-sm text-indigo-600 font-bold">1 issue found</td>
              <td className="text-sm text-gray-500 font-bold"><li>8 Unique Entries</li></td>
              <td className="flex text-sm text-purple-800 font-bold"><AiOutlineArrowRight />Mid Risk</td>
              <td><IoEllipsisVerticalOutline /></td>
            </tr>
            <tr>
              <td className="tex py-0">
                <input type="checkbox" className="form-checkbox h-4 w-4 ml-3 text-gray-600" />
              </td>
              <td className="text-sm text-gray-500 font-bold">Bessie Cooper</td>
              <td className="text-sm text-gray-500 font-bold">
                Lagos State
                <p className="font-normal text-xs">775 Rolling Green Rd.</p>
              </td>
              <td className="text-sm text-yellow-500 font-bold">2 issues</td>
              <td className="text-sm text-gray-500 font-bold"><li>12 Unique Entries</li></td>
              <td className="flex text-sm text-pink-700 font-bold"><AiOutlineArrowUp /> High Risk</td>
              <td><IoEllipsisVerticalOutline /></td>
            </tr>
            <tr>
              <td className="py-0">
                <input type="checkbox" className="form-checkbox h-4 w-4 ml-3 text-gray-600" />
              </td>
              <td className="text-sm text-gray-500 font-bold">Annette Black</td>
              <td className="text-sm text-gray-500 font-bold">
                Lagos State
                <p className="font-normal text-xs">8080 Railroad St.</p>
              </td>
              <td className="text-sm text-indigo-600 font-bold">5 issues found</td>
              <td className="text-sm text-gray-500 font-bold"><li>18 Unique Entries</li></td>
              <td className="flex text-sm text-green-500 font-bold"><BsArrowDownRight /> Low Risk</td>
              <td><IoEllipsisVerticalOutline /></td>
            </tr>
            <tr>
              <td className="py-0">
                <input type="checkbox" className="form-checkbox h-4 w-4 ml-3 text-gray-600" />
              </td>
              <td className="text-sm text-gray-500 font-bold">Jenny Wilson</td>
              <td className="text-sm text-gray-500 font-bold">
                Lagos State
                <p className="font-normal text-xs">8080 Railroad St.</p>
              </td>
              <td className="text-sm text-indigo-600 font-bold">No issues</td>
              <td className="text-sm text-gray-500 font-bold"><li>6 Unique Entries</li></td>
              <td className="flex text-sm text-pink-700 font-bold"><AiOutlineArrowUp /> High Risk</td>
              <td><IoEllipsisVerticalOutline /></td>
            </tr>
            <tr>
              <td className="py-0">
                <input type="checkbox" className="form-checkbox h-4 w-4 ml-3 text-gray-600" />
              </td>
              <td className="text-sm text-gray-500 font-bold">Darlene Robertson</td>
              <td className="text-sm text-gray-500 font-bold">
                Lagos State
                <p className="font-normal text-xs">3890 Poplar Dr.</p>
              </td>
              <td className="text-sm text-yellow-500 font-bold">3 issues</td>
              <td className="text-sm text-gray-500 font-bold"><li>13 Unique Entries</li></td>
              <td className="flex text-sm text-purple-800 font-bold"><AiOutlineArrowUp /> Low Risk</td>
              <td><IoEllipsisVerticalOutline /></td>
            </tr>
            <tr>
              <td className="py-0">
                <input type="checkbox" className="form-checkbox h-4 w-4 ml-3 text-gray-600" />
              </td>
              <td className="text-sm text-gray-500 font-bold">Ralph Edwards</td>
              <td className="text-sm text-gray-500 font-bold">
                Lagos State
                <p className="font-normal text-xs">8558 Green R.d</p>
              </td>
              <td className="text-sm text-indigo-600 font-bold">2 issues</td>
              <td className="text-sm text-gray-500 font-bold"><li>11 Unique Entries</li></td>
              <td className="flex text-sm text-green-500 font-bold"><AiOutlineArrowUp /> Low Risk</td>
              <td><IoEllipsisVerticalOutline /></td>
            </tr>
        </table>
        </>
    )
}
export default Table