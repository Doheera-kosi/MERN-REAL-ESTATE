import { FaSearch } from "react-icons/fa";
import { Link, useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { useEffect, useState } from "react";


export default function Header() {
  const currentUser = useSelector((state) => state.user.currentUser);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate()
  const handleSubmit = (e) => {
    e.preventDefault();
    const urlParams = new URLSearchParams(window.location.search)
    urlParams.set('searchTerm', searchTerm)
    const searchQuery = urlParams.toString();
    navigate(`/search?${searchQuery}`)
  }

  useEffect(() => {
    const urlParams = new URLSearchParams(location.search)
    const searchTermFromUrl = urlParams.get('searchTerm');
    if (searchTermFromUrl) {
      setSearchTerm(searchTermFromUrl)
    }
  }, [location.search])

  return (
    <header className="bg-slate-200 shadow-md">
      <div className="flex justify-between items-center max-w-6xl m-auto p-3">
        <Link to={"/"}>
          <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
            <span className="text-slate-500">Evans</span>
            <span className="text-slate-700">Estate</span>
          </h1>
        </Link>

        <form onSubmit={handleSubmit} className="bg-slate-100 p-3 rounded-lg items-center flex">
          <input
            type="text"
            placeholder="Search..."
            className="bg-transparent focus:outline-none w-24 sm:w-64 "
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <button>
            <FaSearch className="text-slate-600" />
          </button>
        </form>
        <ul className="flex gap-4">
          <Link to={"/"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              Home
            </li>
          </Link>
          <Link to={"/about"}>
            <li className="hidden sm:inline text-slate-700 hover:underline">
              About
            </li>
          </Link>
          <Link to={"/profile"}>
            {currentUser ? (
              <img
                src={currentUser.avatar || "default-avatar.png"}
                className="h-7 w-7 rounded-full object-cover"
              />
            ) : (
              <li className="sm:inline text-slate-700 hover:underline">
                Sign in
              </li>
            )}
          </Link>
        </ul>
      </div>
    </header>
  );
}

// import { FaSearch } from "react-icons/fa";
// import { Link } from "react-router-dom";
// import { useSelector } from "react-redux";

// export default function Header() {
//   const { currentUser } = useSelector((state) => state.user);

//   return (
//     <header className="bg-slate-200 shadow-md">
//       <div className="flex justify-between items-center max-w-6xl m-auto p-3">
//         <Link to={"/"}>
//           <h1 className="font-bold text-sm sm:text-xl flex flex-wrap">
//             <span className="text-slate-500">Evans</span>
//             <span className="text-slate-700">Estate</span>
//           </h1>
//         </Link>

//         <form className="bg-slate-100 p-3 rounded-lg items-center flex">
//           <input
//             type="text"
//             placeholder="Search..."
//             className="bg-transparent focus:outline-none w-24 sm:w-64"
//           />
//           <FaSearch className="text-slate-600" />
//         </form>

//         <ul className="flex gap-4">
//           <Link to={"/"} className="hidden sm:inline">
//             <li className="text-slate-700 hover:underline">Home</li>
//           </Link>
//           <Link to={"/about"} className="hidden sm:inline">
//             <li className="text-slate-700 hover:underline">About</li>
//           </Link>
//           {currentUser ? (
//             <img
//               src={currentUser.avatar || "default-avatar.png"} // Provide a default avatar image if currentUser.avatar is not available
//               alt="profile"
//               className="h-8 w-8 rounded-full"
//             />
//           ) : (
//             <Link to={"/sign-in"}>
//               <li className="sm:inline text-slate-700 hover:underline">Sign in</li>
//             </Link>
//           )}
//         </ul>
//       </div>
//     </header>
//   );
// }
