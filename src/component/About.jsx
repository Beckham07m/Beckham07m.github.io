function About() {
  return (
    <div name="About" className="h-screen w-full text-white flex flex-col">
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8" data-aos="fade-up" data-aos-duration="1500">
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p
          className="text-xl indent-6 mt-10"
          data-aos="fade-up"
          data-aos-duration="1500"
        >
          Hello, my name is Mr. Atsadayut Khuanhat, nicknamed Beck. I am 24
          years old and graduated from Rajamangala University of Technology
          Thanyaburi with a degree in Economics from the Faculty of Business
          Administration. I have a keen interest in the programming profession,
          which is in high demand in the market, and I am passionate about
          developing my knowledge and skills in programming.
        </p>

        <br />

        <p className="text-xl" data-aos="fade-up" data-aos-duration="1500">
          I have taken online courses related to programming and have applied
          the knowledge gained from these courses to develop 2 to 3 projects. My
          goal is to further enhance my programming skills in the future and
          generate income for myself through this expertise.
        </p>
      </div>
    </div>
  );
}

export default About;
