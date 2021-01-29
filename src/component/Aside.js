import { AiFillBook } from "react-icons/ai";
import { AiOutlineMail } from "react-icons/ai";
import { AiFillNotification } from "react-icons/ai";
import { BiPhone } from "react-icons/bi";
import { BiMap } from "react-icons/bi";
import { BiFingerprint } from "react-icons/bi";
import { FaJournalWhills } from "react-icons/fa";

const Aside = () => {
    return (
        <>
        <aside 
            className="box-border mb-2 h-60 p-4 w-64 font-sans bg-white shadow-lg rounded-xl shadow-md"
        >
          <div>
            <div className="text-sm flex mb-2.5 font-bold text-black">
                <AiFillBook className="mr-3 text-3xl text-blue-600"/>
                Division Summary
            </div>
            <div className="text-sm flex mb-2 text-gray-900">
                <BiPhone className="mr-3 text-2xl"/>
                08012345678
            </div>
            <div className="text-sm flex mb-2 font-bold text-gray-900">
                <AiOutlineMail className="mr-3 text-2xl"/>
                asbfefr@gmail.com
            </div>
            <div className="text-sm flex mb-2 font-bold text-gray-900">
                <BiMap className="mr-3 text-2xl"/>
                Modidi, Lagos
            </div>
            <div className="text-sm flex mb-2 font-bold text-blue-600">
                <FaJournalWhills className="mr-4 text-lg text-gray-500"/>
                <a className="underline" href="/">2 Journal entries</a>
            </div>
            <div className="text-sm flex mb-2 font-bold text-gray-900">
                <BiFingerprint className="mr-3 text-2xl"/>
                24 fingerprints enrolled
            </div>
          </div>
        </aside>
        <aside 
            className="box-border bg-transparent h-60 p-4 w-64 font-sans"
        >
          <div>
            <div className="text-sm flex mb-2.5 font-bold text-black">
                <AiFillNotification className="mr-3 text-3xl text-blue-600"/>
                Module History
            </div>
            <div className="ml-4">
                <div className="text-xs font-bold justify-around mb-2 text-gray-500">
                    Searched "Journal Entries" on Division Module
                    <p>22:10 15/09/2020  . Web</p>
                </div>
                <div className="text-xs font-bold mb-2 font-bold text-gray-500">
                    Searched "Fingerprint record" on Division module
                    <p>22:10 15/09/2020  . Web</p>
                </div>
                <div className="text-xs font-bold mb-2 font-bold text-gray-500">
                    Searched "Journal Entries" on Division module
                    <p>22:10 15/09/2020  . Web</p>
                </div>
            </div>
          </div>
        </aside>
        </>
    )
}

export default Aside
