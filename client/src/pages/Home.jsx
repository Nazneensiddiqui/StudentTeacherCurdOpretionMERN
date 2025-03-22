import  { useState, useEffect } from "react";
import AuthModal from "./AuthoModel"; // Import Modal Component
import { FaSearch, FaMicrophone } from "react-icons/fa";
import Footer from "../admin/footer";
// import "../css/Home.css"
import axios from "axios";
import BASE_URL from "../config";

const Home = () => {
  const [open, setOpen] = useState(false);

  const getProfile = async () => {
    try {
      const token = localStorage.getItem("token");
      console.log("Stored Token:", token); // Debugging
  
      const response = await axios.get(`${BASE_URL}/admin/profile`, {
        headers: { Authorization: `Bearer ${token}` },
      });
  
      console.log("Profile Response:", response.data); // Debugging
  
      if (response.data && response.data.user) {
        localStorage.setItem("userid", response.data.user._id);
        localStorage.setItem("username", response.data.user.name);
        setIsLogedIn(true);
      } else {
        console.error("User data is missing in response");
      }
    } catch (error) {
      console.error("Profile API Error:", error);
    }
  };
  
   useEffect(()=>{
    if (localStorage.getItem("token"))
    {
      getProfile();
    }
  
  }, [])
     




  return (
    <>
    <div className="container">
      {/* Navbar */}
      <nav className="navbar">
        <div className="nav-links">
        <div className="logo" style={{fontSize:"25px"}}>my<span style={{color:"#2196f3"}}>school</span></div>
          {/* <a href="#">Download App</a> */}
          <a href="#" onClick={() => setOpen(true)}>Sign In</a>
        </div>
      </nav>

      {/* Logo Section */}
     

      <AuthModal open={open} handleClose={() => setOpen(false)} />    

<div className="header">
      <div className="logo-section">
        <h1>
          <span className="pink1">my</span>
          <span className="blue1">school</span>
        </h1>
        <p>Solutions Beyond School</p>
      </div>

      {/* Search Bar */}
      <div className="search-bar">
        <FaSearch className="search-icon" />
        <input type="text" placeholder="Search your wish here" />
        <FaMicrophone className="mic-icon" />
      </div>

      {/* Categories Section */}
      <div className="categories" align="center">
        <div className="category">
          <div className="icon blue">⭐</div>
          <p>Academic</p>
        </div>
        <div className="category">
          <div className="icon orange">➕</div>
          <p>Early Career</p>
        </div>
        <div className="category">
          <div className="icon green">🔗</div>
          <p>Edutainment</p>
        </div>
        <div className="category">
          <div className="icon pink">📚</div>
          <p>Print Rich</p>
        </div>
        <div className="category">
          <div className="icon gray">🛠</div>
          <p>Maker</p>
        </div>
        <div className="category">
          <div className="icon purple">🔗</div>
          <p>Info Hub</p>
        </div>
      </div>
    </div>
 </div>
  
    <Footer/>
    

 
 
    </>
  );
};

export default Home;

// import { useState, useEffect } from "react";
// import AuthModal from "./AuthoModel"; // Fixed Import
// import { FaSearch, FaMicrophone } from "react-icons/fa";
// import Footer from "../admin/footer";
// import axios from "axios";
// import "../css/Home.css"

// const BASE_URL = "https://your-api-url.com"; // Define your API base URL

// const Home = () => {
//   const [open, setOpen] = useState(false);
//   const [isLoggedIn, setIsLoggedIn] = useState(false); // Fixed missing state

//   const getProfile = async () => {
//     try {
//       const token = localStorage.getItem("token");
//       console.log("Stored Token:", token); // Debugging

//       const response = await axios.get(`${BASE_URL}/admin/profile`, {
//         headers: { Authorization: `Bearer ${token}` },
//       });

//       console.log("Profile Response:", response.data); // Debugging

//       if (response.data && response.data.user) {
//         localStorage.setItem("userid", response.data.user._id);
//         localStorage.setItem("username", response.data.user.name);
//         setIsLoggedIn(true); // Fixed incorrect state function
//       } else {
//         console.error("User data is missing in response");
//       }
//     } catch (error) {
//       console.error("Profile API Error:", error);
//     }
//   };

//   useEffect(() => {
//     if (localStorage.getItem("token")) {
//       getProfile();
//     }
//   }, []);

//   return (
//     <>
//       <div className="container">
//         {/* Navbar */}
//         <nav className="navbar">
//           <div className="nav-links">
//             <div className="logo" style={{ fontSize: "25px" }}>
//               my<span style={{ color: "#2196f3" }}>school</span>
//             </div>
//             <a href="#" onClick={() => setOpen(true)}>Sign In</a>
//           </div>
//         </nav>

//         <AuthModal open={open} handleClose={() => setOpen(false)} />

//         <div className="header">
//           <div className="logo-section">
//             <h1>
//               <span className="pink1">my</span>
//               <span className="blue1">school</span>
//             </h1>
//             <p>Solutions Beyond School</p>
//           </div>

//           {/* Search Bar */}
//           <div className="search-bar">
//             <FaSearch className="search-icon" />
//             <input type="text" name="search" placeholder="Search your wish here" />
//             <FaMicrophone className="mic-icon" />
//           </div>

//           {/* Categories Section */}
//           <div className="categories" align="center">
//             {[
//               { color: "blue", icon: "⭐", text: "Academic" },
//               { color: "orange", icon: "➕", text: "Early Career" },
//               { color: "green", icon: "🔗", text: "Edutainment" },
//               { color: "pink", icon: "📚", text: "Print Rich" },
//               { color: "gray", icon: "🛠", text: "Maker" },
//               { color: "purple", icon: "🔗", text: "Info Hub" },
//             ].map((category, index) => (
//               <div key={index} className="category">
//                 <div className={`icon ${category.color}`}>{category.icon}</div>
//                 <p>{category.text}</p>
//               </div>
//             ))}
//           </div>
//         </div>
//       </div>

//       <Footer />
//     </>
//   );
// };

// export default Home;
