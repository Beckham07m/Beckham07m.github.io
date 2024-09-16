import { MyProj } from "./Data/DataSkill";

function Project() {
  return (
    <div name="Project" className="w-full pb-10 text-white md:h-screen">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div
          className="pb-8"
          data-aos="fade-up"
          data-aos-anchor-placement="center-bottom"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Project
          </p>
          <p className="text-xl py-6">This is some of the work I did.</p>
        </div>

        <div
          className="grid sm:grid-cols-2 md:grid-cols-2 gap-8 px-12 sm:px-0"
          data-aos="flip-left"
          data-aos-easing="ease-out-cubic"
          data-aos-duration="2000"
        >
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
