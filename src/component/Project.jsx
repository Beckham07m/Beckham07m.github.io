import crud from "../assets/pictures/crud.png";
import WebPort from "../assets/pictures/WebPort.png";
import Travel from "../assets/pictures/Travel.png";

function Project() {
  const MyProj = [
    {
      id: 1,
      src: crud,
      url: "https://github.com/Beckham07m/React-crud.git",
    },
    {
      id: 2,
      src: WebPort,
      url: "https://github.com/Beckham07m/Website_Portfolio.git",
    },
    {
      id: 3,
      src: Travel,
    },
  ];

  return (
    <div
      name="Project"
      className="w-full bg-gradient-to-b from-gray-800 to-black text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="text-xl py-6">This is some of the work I did.</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0">
          {MyProj.map(({ id, src, url }) => (
            <div
              key={id}
              className="group shadow-md shadow-gray-600 rounded-lg hover:scale-105"
            >
              <a rel="noopener noreferrer" href={url} target="_blank">
                <img src={src} alt="" className="rounded-md duration-200" />
                <div className="flex item-center justify-center w-full">
                  <p className="py-4">Link to Github</p>
                </div>
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Project;
