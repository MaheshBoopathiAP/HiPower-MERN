import { useState, useRef, useEffect } from "react";
import CountUp from "react-countup";
import { useLayoutEffect } from "react";
import { Link } from "react-router-dom";
import Navbar from "./Navbar";

const About = () => {
  const [countStart, setCountStart] = useState(false);
  const observer = useRef(null);

  useEffect(() => {
    observer.current = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setCountStart(true);
        }
      });
    });
  }, []);

  useEffect(() => {
    const countComp = document.querySelector(".countComp");
    observer.current.observe(countComp);
  }, []);

  return (
    <>
    <Navbar/>
      <div className="relative text-[#262e45bb] bg-white">
        <div className="flex items-center p-4 sm:p-10 w-[100%] flex-col-reverse sm:flex-row justify-around sm:sticky top-0 min-h-[90vh]  ">
          <div className="sm:w-[50%] flex items-center">
            <img
              className="w-full max-h-[80%] animate-updown shadow-2xl rounded-lg overflow-hidden"
              src={"../../public/assets/images/about/about1.png"}
              alt=""
            />
          </div>
          <div className="sm:w-[40%] flex flex-col  justify-center gap-5">
            <h1 className=" text-3xl sm:text-4xl font-semibold text-center sm:text-left">
              About Company
            </h1>
            <p className="text-justify sm:text-left">
              Hipowerbatteries is the leading manufacturer of Automotive and Inverter Batteries. After starting its operation since 1988, the firm has achieved many accomplishments and has established wide spread dealer network. The firm is supplying high quality batteries to Government Departments like:
              <br/>1. Defence
              <br/>2. Railways
              <br/>3. MPSEB
              <br/>4. State Transports
            </p>
            <Link
              href="/about"
              className="bg-gradient-to-tr from-red-500 to-[#ff0e2c] text-[#ffffff] font-semibold text-lg px-4 py-2 rounded-full mx-auto sm:ml-0 "
            >
              Learn More
            </Link>
          </div>
        </div>
        <div className=" p-4 sm:p-10 w-[100%]  text-[#ffffff] sm:sticky top-0 bg-gradient-to-tr from-red-500 to-[#ff0e2c] min-h-[95vh] flex flex-col justify-center">
          <div className="items-center flex-col sm:flex-row flex w-full justify-around">
            <div className="sm:w-[40%] flex flex-col justify-center gap-5">
              <h1 className="text-4xl font-semibold text-center sm:text-left">
                Our Mission
              </h1>
              <p className="text-justify sm:text-start">
                Since our inception in 1988, Hipower batteries has been at the forefront of revolutionizing the battery industry. With a rich history of accomplishments, we've become the go-to manufacturer of Automotive and Inverter Batteries, trusted by countless customers.
              </p>
              <Link
                href="/about"
                className="text-[#ff0e2c] bg-white font-semibold text-lg px-4 py-2  rounded-full mx-auto sm:ml-0 "
              >
                Learn More
              </Link>
            </div>
            <div className="sm:w-[50%] flex items-center ">
              <img
                className="w-full max-h-[80%] animate-updown shadow-2xl rounded-lg overflow-hidden"
                src={"../../public/assets/images/about/about2.png"}
                alt=""
              />
            </div>
          </div>
          <div className=" bg-gradient-to-tr from-red-500 to-[#ff0e2c] flex justify-center text-center  gap-[10%] p-5 text-[#ffffff] font-semibold text-xl countComp">
            <div>
              <h1 className="text-xl md:text-3xl">
                {countStart ? (
                  <>
                    <CountUp start={0} end={1500} duration={5} delay={0} />+
                  </>
                ) : (
                  ""
                )}
              </h1>
              <p className="text-sm sm:text-xl">Satisfied Customer</p>
            </div>
            <div>
              <h1 className="text-xl md:text-3xl">
                {countStart ? (
                  <>
                    <CountUp start={0} end={35} duration={5} delay={0} />+
                  </>
                ) : (
                  ""
                )}
              </h1>
              <p className="text-sm sm:text-xl">Esteem Clients</p>
            </div>
            <div>
              <h1 className="text-xl md:text-3xl">
                {countStart ? (
                  <>
                    <CountUp start={0} end={1000} duration={5} delay={0} />+
                  </>
                ) : (
                  ""
                )}
              </h1>
              <p className="text-sm sm:text-xl">Projects</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col-reverse sm:flex-row p-4 sm:p-10 w-[100%] justify-around sm:sticky top-0 bg-white min-h-[90vh] ">
          <div className="sm:w-[50%] flex items-center ">
            <img
              className="w-full max-h-[80%] animate-updown shadow-2xl rounded-lg overflow-hidden"
              src={"../../public/assets/images/about/about3.png"}
              alt=""
            />
          </div>
          <div className="sm:w-[40%] flex flex-col justify-center gap-5">
            <h1 className="text-3xl sm:text-4xl font-semibold text-center sm:text-left">
              Our Vision
            </h1>
            <p className="text-justify sm:text-start">
              Our journey is fueled by a clear vision: to provide power solutions that empower progress and elevate lives.
              <br/>We uphold values of innovation, quality, and integrity, ensuring that every battery that bears our name is a testament to our commitment.
              <br/><br/>
              Join us in our journey to power the future. Choose Hipowerbatteries for excellence in every charge.
            </p>
            <Link
              href="/about"
              className="bg-gradient-to-tr from-red-500 to-[#ff0e2c] text-[#ffffff] font-semibold text-lg px-4 py-2 rounded-full mx-auto sm:ml-0"
            >
              Learn More
            </Link>
          </div>
        </div>
      </div>
    </>
  );
};

export default About;
