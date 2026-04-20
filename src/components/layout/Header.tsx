import logo from "@/assets/images/KwikQ_Favicon_rzoids (1).png";
import { Button } from "@/components/ui/button";
import { useNavigate } from "react-router-dom";

const Header = () => {
  const links = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "How it works", path: "/how-it-works" },
    { name: "Pricing", path: "/pricing" },
  ];

  const navigate = useNavigate();

  return (
    <div className="border-2 border-red-500 w-full h-[15vh] fixed flex justify-center items-center text-white">
      <div className="border border-gray-300 w-full max-w-[90%] md:max-w-[80%] 2xl:max-w-7xl bg-[#334180]/10 backdrop-blur-md shadow-lg h-full max-h-[80%] rounded-full flex justify-between items-center px-6 py-2">
        {/* logo */}
        <div className="h-full">
          <img
            src={logo}
            onClick={() => navigate("/")}
            className="h-full cursor-pointer"
            alt="Logo"
          />
        </div>

        <div className=" w-full max-w-[70%] flex items-center justify-between">
          {/* Links */}
          <ul className="flex px-4 py-2 gap-6">
            {links.map((link, idx) => {
              return (
                <li
                  key={idx}
                  className="hover:text-[#303BFF] transition-all duration-300"
                >
                  <a href={link.path}>{link.name}</a>
                </li>
              );
            })}
          </ul>

          {/* CTA Button */}
          <div>
            <Button className="bg-transparent hover:text-[#303BFF] cursor-pointer">
              Sign in
            </Button>
            <Button className="ml-4 bg-[#303BFF] hover:bg-[#2a35e0] px-6 py-2 rounded-2xl  cursor-pointer transition-all duration-300 hover:scale-105">
              Sign up
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
