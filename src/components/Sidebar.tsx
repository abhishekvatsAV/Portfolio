import { AiFillGithub, AiFillLinkedin } from "react-icons/ai";
import { GoLocation } from "react-icons/go";
import { BiDownload } from "react-icons/bi";
import { useDispatch } from "react-redux";
import { toggleTheme } from "../slice";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const Sidebar = () => {
  const theme = useSelector((state: RootState) => state.theme.value);
  const dispatch = useDispatch();

  return (
    <div >
      <img
        src="https://res.cloudinary.com/dudoss6ih/image/upload/v1668326337/IMG_20210727_173654_kta1jy.jpg"
        alt="user avatar"
        className="mx-auto rounded-full"
        height="128"
        width="128"
      />
      <h3 className="my-4 text-3xl font-medium tracking-wider font-kaushan">
        <span className="text-green">Abhishek </span> Vats
      </h3>
      <p className={`px-2 py-1 my-3 bg-gray-200 rounded-full ${theme === "dark" && "!bg-dark-200"} `}>Web Developer</p>
      <a
        className={`flex items-center justify-center px-2 py-1 my-3 bg-gray-200 rounded-full gap-2 ${theme === "dark" && "!bg-dark-200"} `}
        href="/assets/Abhishek_Vats_Resume.pdf"
        download="Abhishek_Vats_Resume.pdf"
      >
        Resume
        <BiDownload className="w-6 h-6 " />
      </a>

      {/* social icons */}
      <div className="flex justify-around w-9/12 mx-auto my-5 text-green md:w-full">
        <a
          href="https://github.com/abhishekvatsAV"
          aria-label="Github"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillGithub className="w-8 h-8" />
        </a>
        <a
          href="https://www.linkedin.com/in/abhishek-vats-av/"
          aria-label="LinkedIN"
          target="_blank"
          rel="noreferrer"
        >
          <AiFillLinkedin className="w-8 h-8" />
        </a>
      </div>

      {/* address , email and phone details */}
      <div
        className={`py-4 my-5 bg-gray-200 ${theme === "dark" && "!bg-dark-200"} `}
        style={{ marginLeft: "-1rem", marginRight: "-1rem" }}
      >
        <div className="flex items-center justify-center space-x-2">
          <GoLocation />
          <span>Delhi, India</span>
        </div>
        <p className="my-2">abhishek.vats.av3@gmail.com</p>
      </div>

      <button
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 focus:outline-none"
        onClick={() => window.open("mailto:abhishek.vats.av3@gmail.com")}
      >
        Email Me
      </button>
      <button
        onClick={() => dispatch(toggleTheme())}
        className="w-8/12 px-5 py-2 my-2 text-white rounded-full bg-gradient-to-r from-green to-blue-400 font-poppins text-sm dark:text-green"
      >
        Toggle Theme
      </button>
    </div>
  );
};

export default Sidebar;
