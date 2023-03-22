import phython_logo from "../resources/logos/phyton_white.png";
import atom_logo from "../resources/logos/atom_white.png";
import js_logo from "../resources/logos/js_white.png";
import postgre_logo from "../resources/logos/postgre.png";
import sql_logo from "../resources/logos/sql_logo.png";
import linux_logo from "../resources/logos/linux_logo.png";
import flask_logo from "../resources/logos/flask_logo.png";
import node_logo from "../resources/logos/node_logo.png";
import fastapi_logo from "../resources/logos/fastapi_logo.png";
import git_logo from "../resources/logos/git_logo.png";
import pandas_logo from "../resources/logos/pandas_logo.png";
import numpy_logo from "../resources/logos/numpy_logo.png";
const We = () => {
  return (
    <div className="we w-full flex flex-col text-white text-xl p-4 ">
      <h1 className="text-white text-3xl">Who we are</h1>
      <div>
        <p className="m-2">
          We are web developers team, we love coding, creating web or mobile
          aplications demanding on bussiness interest.
        </p>
      </div>
      <div style={{ borderBottom: "1px solid white"}}>
        <h2 className="text-3xl mb-4">Main team</h2>
        <div className="mb-4">
          <h2 className="text-2xl mt-2 mb-2">George Darsalia</h2>
          <p>A Senior Python Developer With A 7+ Years Of Experience</p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl mt-2 mb-2">George Takadze</h2>
          <p>
            Back End an AI Developer, middle Python Developer With A 3+ Years Of
            Experience and 1+ DevOps Developer
          </p>
        </div>
        <div className="mb-4">
          <h2 className="text-2xl mt-2 mb-2">Gocha Berulava</h2>
          <p>
            Front end developer, React.js Developer With A 3+ Years of
            experience
          </p>
        </div>
      </div>
      <div className="flex flex-col">
        <div className="flex flex-wrap">
          <h2 className="text-2xl text-white w-full m-2">What we love to do</h2>
          <p className="mr-2">
            You know what you want, You have technical documentation, you have
            ui/ux design
          </p>
          : <p className="ml-2 text-green-300">We do our job </p>
        </div>
        <div className="flex flex-wrap">
          <h2 className="text-2xl text-white w-full m-2">What we can do</h2>
          <p>You know what you want, have clear bussiness idea</p>
          <p className="text-green-200 mr-2 ml-2">
            We create technical documentation, ui/ux design
          </p>{" "}
          : <p className="ml-2 text-green-300">We do our job</p>
        </div>
        <div className="flex flex-wrap">
          <h2 className="text-2xl text-white w-full m-2">What we can not do</h2>
          <p className="mr-2">You dont have bussiness plan</p> :{" "}
          <p className="ml-2 text-red-300">We can do nothing</p>
        </div>
      </div>
      <div className="flex flex-col mt-2 md:flex-row">
        <div className="flex w-full border-2 p-2 flex-wrap md:w-1/2">
          <h2 className="text-center w-full">Recent Projects</h2>
          <ul >
            <li>Transguard system </li>
            <li>Poker game </li>
            <li>Smart home backend application </li>
            <li>Fully funcional E-commerce web application </li>
            <li>Business simulation game </li>
            <li>Stock Market Analytical Software </li>
            <li>In House Management Software </li>
            <li>
              Web Application That Filters Cars That Passed Through Cameras By
              Their Color, Model, Year, Number And So On{" "}
            </li>
            <li>Analytical Software To Sort The Products By Quality </li>
            <li>
              Software That Detects Wanted Vehicles While Passing Patrol Cars In
              Front Of Their Dashboard Cameras.
            </li>
            <li>Authentication Software Replacing Third Party Member</li>
            <li>Software for calculating and and creating data pipelines</li>
            <li>And many more </li>
          </ul>
        </div>
        <div className="flex w-full flex-wrap border-2 p-2 justify-center md:w-1/2">
          <h2 className="text-center w-full">Skillsets</h2>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={phython_logo} />
            </div>
            <div className="text-center">Phyton</div>
          </div>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={js_logo} />
            </div>
            <div className="text-center">Javascript</div>
          </div>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={atom_logo} />
            </div>
            <div className="text-center">React</div>
          </div>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={postgre_logo} />
            </div>
            <div className="text-center">PostgreSql</div>
          </div>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={sql_logo} />
            </div>
            <div className="text-center">Sql</div>
          </div>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={linux_logo} />
            </div>
            <div className="text-center">Linux</div>
          </div>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={flask_logo} />
            </div>
            <div className="text-center">Flask</div>
          </div>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={node_logo} />
            </div>
            <div className="text-center">Node.js</div>
          </div>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={fastapi_logo} />
            </div>
            <div className="text-center">Fastapi</div>
          </div>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={numpy_logo} />
            </div>
            <div className="text-center">NumPy</div>
          </div>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={git_logo} />
            </div>
            <div className="text-center">Git</div>
          </div>
          <div>
            <div
              className="logo_wrapper rounded-xl shadow-xl m-2"
              style={{
                width: "150px",
                height: "150px",
                
              }}
            >
              <img src={pandas_logo} />
            </div>
            <div className="text-center">Pandas</div>
          </div>
        </div>
      </div>
    </div>
  );
};
export default We;
