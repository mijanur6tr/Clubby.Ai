import { useNavigate } from "react-router-dom";
import { useClerk,useUser,UserButton } from "@clerk/clerk-react";
import navLogo from '../../public/navLogo.png';

const Navbar = () => {
  
  const navigate = useNavigate()
  const{openSignIn}=useClerk();
  const{user}=useUser();


  return (
    <nav className="w-full  top-0 left-0 z-50 bg-white/80 backdrop-blur-lg border-b border-gray-200">
      <div className=" mx-auto px-8 py-4 flex  items-center justify-between">

        <div className="mx-6 lg:ml-0 flex  items-center justify-center" onClick={()=>navigate("/")}>
         <img src={navLogo} className="w-15 " alt="Clubby AI Logo"/>
         <p className="text-2xl">Clubby Ai</p>
          
        </div>

        {user ? <UserButton/> : <button onClick={openSignIn}>Start Now</button>}
      </div>
    </nav>
  );
};

export default Navbar;
