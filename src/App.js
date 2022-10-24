import "./App.css";
import { useState } from "react";
import error from "./images/icon-error.svg";

function App() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstEmpty, setFirstEmpty] = useState(false);
  const [LastEmpty, setLastEmpty] = useState(false);
  const [EmailEmpty, setEmailEmpty] = useState(false);
  const [passwordEmpty, setPasswordEmpty] = useState(false);

  const firstNameChange = (e) => {
    setFirstName(e.target.value);
  };
  const lastNameChange = (e) => {
    setLastName(e.target.value);
  };
  const emailChange = (event) => {
    setEmail(event.target.value);
  };
  const passwordHandler = (event) => {
    setPassword(event.target.value);
  };
  const submitHandler = (event) => {
    event.preventDefault();
    if (!firstName) {
      setFirstEmpty(true);
      setFirstName("  ");
    } else {
      setFirstEmpty(false);
    }
    if (!lastName) {
      setLastEmpty(true);
      setLastName("  ");
    } else {
      setLastEmpty(false);
    }
    if (email.includes("@")) {
      setEmailEmpty(false);
    } else {
      setEmailEmpty(true);
      setEmail("email@example/com");
    }
    if (!password) {
      setPasswordEmpty(true);
      setPassword(" ");
    } else {
      setPasswordEmpty(false);
    }
  };
  return (
    <main className="  bg-Red  md:bg-bg-desktop bg-bg-phone h-[100vh] ">
      <div className="container w-[375px] mx-auto  md:grid md:grid-cols-2 md:w-[1440px] md:place-content-center md:gap-10     ">
        {/* first div */}
        <div className=" text-white font-popins py-10 flex flex-col items-center   md:mt-[40%]  ">
          <h1 className=" text-3xl font-[700] text-center mt-5 md:text-start md:text-[3.5rem] md:mt-0  md:leading-[3rem]  ">
            Learn to code by watching others
          </h1>
          <p className=" text-center  mt-10 text-[16px] md:text-start  md:leading-[2rem] md:text-[20px] ">
            See how experienced developers solve problems in real-time. Watching
            scripted tutorials is great, but understanding how developers think
            is invaluable.{" "}
          </p>
        </div>
        {/* second div */}
        <div className="  rounded-[10px]    md:mt-[30%] flex flex-col items-center">
          <button className=" bg-Blue py-4 px-20 rounded-[10px] font-[500] mb-3 text-white  md:w-[80%]  shadow-xl ">
            Try it free 7 days{" "}
            <span className=" text-GrayishBlue ">
              then <br className="md:hidden" />
              $20/mo. thereafter
            </span>
          </button>
          <form
            action=""
            onSubmit={submitHandler}
            className="flex flex-col gap-3 font-popins font-[600] relative bg-white md:p-10 shadow-2xl  px-5 pt-5 pb-4 rounded-[10px] "
          >
            <input
              onChange={firstNameChange}
              value={firstName}
              type="text"
              name=""
              placeholder="First Name"
              className={`${
                firstEmpty ? "border-Red" : ""
              } " border-[1px] border-GrayishBlue placeholder:text-DarkBlue p-4 mb-3  "`}
            />
            {firstEmpty && (
              <img
                src={error}
                className=" w-[25px] absolute top-10 left-[85%] md:top-[12%] "
                alt=""
              />
            )}
            {firstEmpty && (
              <p className=" text-Red text-[12px] absolute top-[16%] left-[48%] md:top-[20%] md:left-[64%] ">
                {" "}
                First name cannot be empty{" "}
              </p>
            )}
            <input
              type="text"
              name=""
              placeholder="Last Name"
              value={lastName}
              onChange={lastNameChange}
              className={` ${
                LastEmpty ? "border-Red" : ""
              } " border-[1px] border-GrayishBlue placeholder:text-DarkBlue p-4 mb-3 " `}
            />
            {LastEmpty && (
              <img
                src={error}
                className=" w-[25px] absolute top-[25%] left-[85%] md:top-[28%] "
                alt=""
              />
            )}
            {LastEmpty && (
              <p className=" text-Red text-[12px] absolute top-[33%] left-[48%] md:top-[36%] md:left-[64%] ">
                {" "}
                Last name cannot be empty{" "}
              </p>
            )}
            <input
              type="text"
              name=""
              placeholder="Email Address"
              value={email}
              className={` ${
                EmailEmpty ? "border-Red text-Red " : ""
              } " border-[1px] border-GrayishBlue placeholder:text-DarkBlue p-4 mb-3  " `}
              onChange={emailChange}
            />
            {EmailEmpty && (
              <img
                src={error}
                className=" md:top-[45%] w-[25px] absolute top-[42%] left-[85%] "
                alt=""
              />
            )}
            {EmailEmpty && (
              <p className=" text-Red text-[12px] absolute top-[50%] left-[48%] md:left-[63%] md:top-[53%] ">
                {" "}
                Looks like this is not an email{" "}
              </p>
            )}
            <input
              type="text
              "
              value={password}
              name=""
              placeholder="Password"
              className={` ${
                passwordEmpty ? "border-Red" : ""
              } " border-[1px] border-GrayishBlue placeholder:text-DarkBlue p-4  " `}
              onChange={passwordHandler}
            />
            {passwordEmpty && (
              <img
                src={error}
                className=" w-[25px] absolute top-[60%] left-[85%] md:top-[61%] "
                alt=""
              />
            )}
            {passwordEmpty && (
              <p className=" text-Red text-[12px] absolute top-[68%] left-[50%] md:left-[65%] md:top-[69%] ">
                {" "}
                Password cannot be empty{" "}
              </p>
            )}
            <button className=" bg-Green text-white uppercase  p-4 rounded-[5px] mt-3 hover:bg-GreenLight  ">
              Claim your free trial
            </button>
            <p className=" text-center text-GrayishBlue text-[15px] mt-2 ">
              By clicking the button, you are agreeing to our{" "}
              <span className=" text-Red  ">Terms and Services </span>
            </p>
          </form>
        </div>
      </div>
    </main>
  );
}

export default App;
