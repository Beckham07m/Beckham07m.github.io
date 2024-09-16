import { techs } from "./Data/DataSkill";

function Skill() {
  return (
    <div name="Skill" className="h-screen w-full">
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div data-aos="zoom-in">
          <p className="text-4xl font-bold p-2 inline border-b-4 border-gray-500">
            Skill
          </p>
          <p className="text-xl py-6">
            These are the technologies i&apos;ve worked with
          </p>
        </div>

        <div
          className="w-full grid grid-cols-3 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0"
          data-aos="zoom-in"
        >
          {techs.map(({ id, src, title, style }) => (
            <div
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt={title} className="mx-auto w-12 sm:w-16" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Skill;
