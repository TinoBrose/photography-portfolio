import React from "react";

const Impressum = () => {
  return (
    <div className="flex flex-col items-center h-full">
      <div className="flex flex-col text-white px-[24px] w-full p-2 sm:p-4 my-6 justify-center items-center  text-center  gap-10">
        <h1 className="text-2xl">Impressum</h1>
        <div>
          Matthias Brose
          <br /> Anne-Frank-Straße 59a
          <br />
          2258 Hamburg
        </div>
        <div>
          T +49 173 1234567 <br /> M info@mab-photo.de
        </div>
      </div>
    </div>
  );
};

export default Impressum;
