import Image from "next/image";
import React from "react";
import profilePic from "../../public/mab.jpg";

const About = () => {
  return (
    <div className="flex flex-col items-center justify-center w-full h-full">
      <div className="flex flex-col sm:flex-row px-[24px] w-full p-2 sm:p-4 my-6 justify-center items-center gap-10 max-w-[900px]">
        <div className="flex max-w-[300px] sm:max-w-[200px]  justify-center items-center ">
          <Image
            src={profilePic}
            alt="Matthias Brose"
            sizes="sm:max-w-[900px]"
            className="rounded-xl"
          />
        </div>
        <div className="flex-1 text-white">
          Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
          nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat,
          sed diam voluptua. At vero eos et accusam et justo duo dolores et ea
          rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem
          ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
          sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et
          dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam
          et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea
          takimata sanctus est Lorem ipsum dolor sit amet.
        </div>
      </div>
    </div>
  );
};

export default About;
