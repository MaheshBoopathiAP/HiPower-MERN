import React from "react";
import { AiOutlineCheckSquare, AiOutlineMail, AiOutlinePhone } from "react-icons/ai";
import Navbar from "./Navbar";

const WhiteLabel = () => {
  // Dummy data
  const homepage = false;
  const imageData = "../../public/assets/images/your_logo.png";

  return (
    <>
    {/* <Navbar/> */}
      {!homepage && (
        <section
          className="bg-[url(../../public/assets/images/White-Label-Batteries.jpg)] bg-center bg-cover h-96 relative"
        >
          <div className="h-full bg-black/25 backdrop-blur-sm flex flex-col items-center justify-center text-white gap-3 max-sm:text-center px-5">
            <img src={imageData} alt="Logo" height={75} width={75} />
            <h1 className="font-semibold text-2xl">WHITE LABEL BATTERIES</h1>
            <p>Fully customizable batteries, manufactured under your brand</p>
          </div>
        </section>
      )}
      <section className="py-10 px-5 sm:px-20 max-sm:text-center bg-white">
        <h1 className="text-3xl font-bold font-Poppins text-red-500 tracking-wide mb-3 x ">
          WHITE LABEL BATTERIES
        </h1>
        <p className="text-black">
          Whatever your project, we can provide white label batteries manufactured under your own brand which can be fully customized to comply with market requirements. For small scale prototype production, we use the latest prototyping technology which makes it possible to manufacture a few fully functional samples of the customized battery. This will allow you to test a new design in real conditions.
          <br /><br />
          Enix Power Solutions has been manufacturing batteries of all technologies for a vast range of market sectors and clients for more than 30 years. Batteries are an essential component of both portable and isolated stationary equipment, constituting part of the manufacturers’ costs but also a revenue source once they need to be replaced. As a result, numerous manufacturers contact us to develop private label batteries for their products.
        </p>
      </section>
      <section className="flex  max-md:flex-col bg-white">
        <div className="flex flex-col px-5 md:pl-40 py-10 gap-3 md:w-[60%] bg-red-100/30">
          <img src={imageData} alt="Logo" height={130} width={130} className="max-sm:mx-auto" />
          <h1 className="font-semibold text-2xl font-Poppins text-red-500 tracking-wide mb-3 max-sm:text-center">WHITE LABEL BATTERY ADVANTAGES</h1>
          <ol className="list-disc text-lg px-6 font-light marker:text-red-500 marker:text-2xl text-black">
            <li>Wide range of customizable items</li>
            <li>Superior quality</li>
            <li>Securing the replacement battery market</li>
            <li>Sources of supply kept confidential</li>
            <li>Batteries of all technologies: Alkaline, Lithium and Lead Acid batteries, coin cells and battery packs</li>
          </ol>
          <button className="py-2 flex justify-center items-center bg-red-500 text-white rounded-md sm:mr-40">
            <a href={`/about`} className="text-white">View Details</a>
          </button>
        </div>
        <div className="md:w-[40%] bg-gray-100 p-10 md:p-20">
          <img src={imageData} alt="Logo" height={500} width={500} className="mx-auto w-32 md:w-full h-full" />
        </div>
      </section>
      {!homepage && (
        <section className="py-10 bg-white">
          <div className="flex flex-col gap-10 py-10 max-md:px-8 items-center justify-center bg-red-100/30 text-black">
            <h3 className="text-2xl max-md:text-center">Advantages of using Enix Power Solutions for your applications:</h3>
            <div className="md:w-[60%] flex justify-between flex-wrap">
              <div className="flex md:items-center justify-center"><AiOutlineCheckSquare className="mx-2 text-2xl" /> Bespoke solutions built to your specification</div>
              <div className="flex md:items-center justify-center"><AiOutlineCheckSquare className="mx-2 text-2xl" /> Design & Characterization</div>
            </div>
          </div>
          <div className="flex flex-col gap-10 py-10 max-md:px-5 items-center justify-center bg-gray-100 text-black">
            <h3 className="text-2xl max-md:text-center">Speak to a member of our OEM specialist team about white label batteries</h3>
            <div className="md:w-[50%] flex justify-center flex-wrap">
              <div className="flex items-center justify-center md:border-r-2 border-dotted border-red-200 px-5"><AiOutlinePhone className="mx-2 text-2xl" /> +919425153399</div>
              <div className="flex items-center justify-center"><AiOutlineMail className="mx-2 text-2xl" />hipowerbatteries@gmail.com</div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default WhiteLabel;
