
const Breadcrumb = () => {
    return (
      <ul className="flex text-gray-500 font-sans mt-2 px-10 text-sm lg:text-base">
        <li className="inline-flex items-center">
          <a href="/">Divisions</a>
          <svg
            className="h-5 w-auto text-gray-400"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
              clipRule="evenodd"
            ></path>
          </svg>
        </li>
        <li className="inline-flex items-center">
          <a href="/">Module</a>
        </li>
      </ul>
    
    )
}

export default Breadcrumb
