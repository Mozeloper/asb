import { AiOutlineInfoCircle } from "react-icons/ai";

const Cards = () => {
    return (
        <>
          <div 
            className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
                        p-8 w-64 mr-3 font-sans bg-white shadow-lg rounded-xl shadow-md flex justify-between items-center"
          >
            <div>
              <div className="text-xl font-bold text-black">31435</div>
              <p className="text-gray-500 font-bold">Ongoing Metric</p>
            </div>
              <AiOutlineInfoCircle className="text-3xl" />
          </div>
          <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
                          p-8 w-64 mr-3 bg-white shadow-lg rounded-xl shadow-md flex justify-between items-center"
          >
            <div>
              <div className="text-xl font-bold text-black">2344</div>
              <p className="text-gray-500 font-bold">Past Metric</p>
            </div>
              <AiOutlineInfoCircle className="text-3xl" />
          </div>
          <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
                          p-8 w-64 mr-3 bg-white shadow-lg rounded-xl shadow-md flex justify-between items-center"
          >
            <div>
              <div className="text-xl font-bold text-black">635</div>
              <p className="text-gray-500 font-bold">Failed Metric</p>
            </div>
              <AiOutlineInfoCircle className="text-3xl" />
          </div>
          <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
                          p-8 w-64 mr-3 bg-white shadow-lg rounded-xl shadow-md flex justify-between items-center"
          >
            <div>
              <div className="text-xl font-bold text-black">14224</div>
              <p className="text-gray-500 font-bold">Missed Metric</p>
            </div>
              <AiOutlineInfoCircle className="text-3xl" />
          </div>
          <div className="transition duration-500 ease-in-out transform hover:-translate-y-1 hover:scale-110 
                          p-8 w-64 mr-3 bg-white shadow-lg rounded-xl shadow-md flex justify-between items-center"
          >
            <div>
              <div className="text-xl font-bold text-black">11334</div>
              <p className="text-gray-500 font-bold">Pending Metric</p>
            </div>
              <AiOutlineInfoCircle className="text-3xl" />
          </div>
        </>
    )
}

export default Cards
