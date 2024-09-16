import { FaArrowCircleRight } from "react-icons/fa";
import Telecommuting from "../assets/pictures/Telecommuting.png";
import ResumeFrontEnd from "../assets/pdf/ResumeFrontEnd.pdf";

function Home() {
  return (
    <div name="Home" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto flex flex-col-reverse items-center justify-center h-full px-4 md:flex-row">
        <div
          className="flex flex-col justify-center h-full px-5"
          data-aos="fade-right"
          data-aos-duration="1500"
        >
          <h1 className="text-zinc-50 text-3xl sm:text-7xl font-bold">
            I&apos;m a Front-End Developer
          </h1>
          <p className="text-xl text-gray-300 py-4 max-w-md">
            Hello and welcome to my Portfolio Website. This website is built
            using React and Vite, and it utilizes Tailwind CSS with Daisy UI for
            styling. It is created to showcase various projects that I have
            worked on. Let&apos;s get to know each other!
          </p>

          <div>
            <a href={ResumeFrontEnd} download="ResumeFrontEnd.pdf">
              <button className="group rounded-full btn btn-info btn-outline sm:btn-sm md:btn-md lg:btn-lg">
                Resume
                <span className="group-hover:rotate-90 duration-300 ">
                  <FaArrowCircleRight />
                </span>
              </button>
            </a>
          </div>
        </div>
        <div data-aos="fade-left" data-aos-duration="1500">
          <img
            src={Telecommuting}
            alt="Wallpaper"
            className="rounded-full mx-auto w-2/3 md:w-full"
          />
        </div>
      </div>
    </div>
  );
}

export default Home;
