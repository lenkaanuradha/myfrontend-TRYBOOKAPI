import React, { useState } from "react";
import { IoSunnyOutline } from "react-icons/io5";
import "./APIPricing.css";
export default function APIPricing() {
  const [isDarkMode, setIsDarkMode] = useState(true);
  return (
    <div className="" style={{ backgroundColor: "#0f172a" }}>
      <div
        className="Header text-white h-[70px] p-5 font-bold"
        style={{
          backgroundColor: "#6366f1",
          fontSize: "40px",
          fontWeight: "700",
        }}
      >
        Book Generator API
      </div>

      <div className="flex flex-col">
        <nav className="navbar navbar-expand-lg navbar-light bg-dark ">
          <div className="container-fluid">
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarNav"
              aria-controls="navbarNav"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav mx-auto py-2">
                {/* Centering the navbar items */}
                <li className="nav-item mx-2 ">
                  <a
                    className="nav-link  text-white "
                    aria-current="page"
                    href="#overview"
                    style={{"fontSize":"1rem"}}
                  >
                    OVERVIEW
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-white " href="#authentication"  style={{"fontSize":"1rem"}}>
                    AUTHENTICATION
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-white " href="#endpoints" style={{"fontSize":"1rem"}}>
                    ENDPOINTS
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-white " href="#tutorials" style={{"fontSize":"1rem"}}>
                    TUTORIALS
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-white " href="#codeexamples" style={{"fontSize":"1rem"}}>
                    CODE EXAMPLES
                  </a>
                </li>
                <li className="nav-item mx-2">
                  <a className="nav-link text-white " href="#pricing" style={{"fontSize":"1rem"}}>
                    PRICING
                  </a>
                </li>
                <li
                  className="nav-item mx-2 text-end"
                  onClick={() => setIsDarkMode(!isDarkMode)}
                >
                  <a className="nav-link text-white">
                    <IoSunnyOutline style={{ fontSize: "25px" }} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
      </div>

      <div className="d-flex justify-content-center mb-3" id="overview">
        <div className="card w-75 m-3">
          <div className="card-body bg-dark py-5 rounded-3">
            <h4
              className="card-title text-start px-3"
              style={{ color: "rgb(165, 180, 252)", fontWeight: "600" }}
            >
              Overview
            </h4>
            <p className="card-text text-white text-start px-3">
              The Book Generator API allows you to generate books on various
              topics using different language models. This documentation
              provides details on how to use the API, including authentication,
              available endpoints, and code examples.
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-3" id="authentication">
        <div className="card w-75 m-3 border">
          <div className="card-body bg-dark py-5 rounded-3">
            <h4
              className="card-title text-start px-3"
              style={{ color: "rgb(165, 180, 252)", fontWeight: "600" }}
            >
              Authentication
            </h4>
            <p className="card-text text-white text-start px-3">
              To use the API, you need to include your API key in the header of
              each request:
            </p>
            <div className="px-3">
              <div className="text-start px-3 border border-light rounded-3">
                <div className="card-text text-white p-3 border border-light pr-0">
                  X-API-Key: YOUR_API_KEY
                </div>
              </div>
            </div>
            <p className="card-text text-white text-start px-3">
              To generate an API key, use the button below:
            </p>
            <div className="text-start px-3">
              <button type="button" className="btn btn-info fw-bold">
                Generate API Key
              </button>
            </div>
            <div className="px-3 mt-3">
              <input
                type="email"
                className="form-control p-2 bg-dark"
                id="exampleFormControlInput1"
                placeholder=""
              />
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-3" id="endpoints">
        <div className="card w-75 m-3 border rounded-3">
          <div className="card-body bg-dark py-5 rounded-3">
            <h4
              className="card-title text-start px-3 py-5"
              style={{ color: "rgb(165, 180, 252)", fontWeight: "600" }}
            >
              Endpoints
            </h4>
            <h5
              className="card-title text-start px-3"
              style={{ color: "rgb(165, 180, 252)" }}
            >
              Generate Book
            </h5>
            <div className="d-flex align-items-start px-3 gap-2 py-0">
              <button type="button" className="btn btn-small btn-info m-1 py-0 fw-bold">
                POST
              </button>
              <button
                type="button"
                className="btn btn-lg mb-2 py-2 fw-bold text-white"
                style={{ backgroundColor: "#6366f1" ,fontSize:"1rem"}}
              >
                /api/generate-book
              </button>
            </div>
            <h4
              className="card-title text-start px-3 py-4"
              style={{ color: "rgb(165, 180, 252)", fontWeight: "600" }}
            >
              Request Body
            </h4>
            <div className="d-flex justify-content-center">
              <div className="overflow-auto rounded-3 border border-white w-100 mx-3">
                <table className="table text-white mb-0 w-100 ">
                  <tbody style={{ backgroundColor: "#6366f1" }}>
                    <tr>
                      <td  className="text-start p-3 fw-bolder" style={{"fontSize":"0.8rem"}}>
                        PARAMETER
                      </td>
                      <td  className="text-start p-3 fw-bolder" style={{"fontSize":"0.8rem"}}>
                        TYPE
                      </td>
                      <td  className="text-start p-3 fw-bolder" style={{"fontSize":"0.8rem"}}>
                        DESCRIPTION
                      </td>
                    </tr>
                  </tbody>
                  <tbody>
                    <tr>
                      <td className="text-info text-start p-3">api</td>
                      <td className="text-start p-3">string</td>
                      <td className="text-start p-3">
                        The API provider to use. Options: "openai" or "together"
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info text-start p-3">model</td>
                      <td className="text-start p-3">string</td>
                      <td className="text-start p-3">
                        The specific model to use (e.g., "gpt-3.5-turbo",
                        "gpt-4", "llama-2-70b")
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info text-start p-3">topic</td>
                      <td className="text-start p-3">string</td>
                      <td className="text-start p-3">
                        The main topic or theme of the book
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info text-start p-3">language</td>
                      <td className="text-start p-3">string</td>
                      <td className="text-start p-3">
                        The language in which the book should be generated
                      </td>
                    </tr>
                    <tr>
                      <td className="text-info text-start p-3">word_count</td>
                      <td className="text-start p-3">integer</td>
                      <td className="text-start p-3">
                        The approximate number of words for the generated book
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <div className="d-flex  mb-3">
              <div className=" w-75 m-3">
                <div className=" bg-dark py-5">
                  <h4
                    className=" text-start px-3"
                    style={{ color: "rgb(165, 180, 252)", fontWeight: "600" }}
                  >
                    Response
                  </h4>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center mb-3" id="tutorials">
        <div className="card w-75 m-3">
          <div className="card-body bg-dark py-5 border rounded-3">
            <h4
              className="card-title text-start px-5 mt-4 mb-4"
              style={{ color: "rgb(165, 180, 252)", fontWeight: "600" }}
            >
              Tutorial
            </h4>
            <h5
              className="card-title text-start px-5"
              style={{ color: "rgb(165, 180, 252)" }}
            >
              Step 1: Obtain an API Key
            </h5>
            <p className="card-text text-white text-start px-5 mb-4">
              Generate an API key using the button in the Authentication section
              above.
            </p>
            <h5
              className="card-title text-start px-5"
              style={{ color: "rgb(165, 180, 252)" }}
            >
              Step 2: Make a Request
            </h5>
            <p className="card-text text-white text-start px-5 mb-4">
              Use your preferred programming language or tool to make a POST
              request to the /api/generate-book endpoint. Include your API key
              in the header and the required parameters in the request body.
            </p>
            <h5
              className="card-title text-start px-5"
              style={{ color: "rgb(165, 180, 252)" }}
            >
              Step 3: Handle the Response
            </h5>
            <p className="card-text text-white text-start px-5 mb-4">
              The API will return a response with a job ID. You can use this ID
              to check the status of your book generation job.
            </p>
            <h5
              className="card-title text-start px-5"
              style={{ color: "rgb(165, 180, 252)" }}
            >
              Step 4: Retrieve the Generated Book
            </h5>
            <p className="card-text text-white text-start px-5">
              Once the job is complete, you can retrieve the generated book
              using the job ID (endpoint to be implemented).
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center" id="codeexamples">
        <div className="card w-75 m-3 border">
          <div className="card-body bg-dark py-5 rounded-3">
            <h3
              className="card-title text-start px-5 my-5"
              style={{ color: "rgb(165, 180, 252)", fontWeight: "600" }}
            >
              Code Examples
            </h3>
            <h5
              className="card-title text-start px-5"
              style={{ color: "rgb(165, 180, 252)" }}
            >
              Python
            </h5>
            <p className="card-text text-white text-start px-5">
              The Book Generator API allows you to generate books on various
              topics using different language models. This documentation
              provides details on how to use the API, including authentication,
              available endpoints, and code examples.
            </p>
            <h5
              className="card-title text-start px-5"
              style={{ color: "rgb(165, 180, 252)" }}
            >
              JavaScript (Node.js)
            </h5>
            <p className="card-text text-white text-start px-5">
              The Book Generator API allows you to generate books on various
              topics using different language models. This documentation
              provides details on how to use the API, including authentication,
              available endpoints, and code examples.
            </p>
          </div>
        </div>
      </div>

      <div className="d-flex justify-content-center" id="pricing">
        <div className="card w-75 m-3 border">
          <div className="card-body bg-dark py-5 rounded-3">
            <h4
              className="card-title text-start px-5 mt-5"
              style={{ color: "rgb(165, 180, 252)", fontWeight: "600" }}
            >
              API Pricing
            </h4>
            <p className="card-text text-white text-start px-5">
              Our API pricing is based on the model used and the number of
              tokens processed. Here's a breakdown of the costs:
            </p>
            <div className="d-flex mt-3 mb-5 ">
              <div className="border  rounded-3 w-100 mx-5">
                <table className="table   text-white mb-0 w-100">
                  <thead
                    style={{
                      backgroundColor: "#6366f1",
                      fontFamily: "Arial, sans-serif",
                      fontWeight: "normal",
                    }}
                  >
                    <tr>
                      <th scope="col" className="text-start p-3 fw-bolder" style={{"fontSize":"0.8rem"}}>
                        API
                      </th>
                      <th scope="col" className="text-start p-3 fw-bolder" style={{"fontSize":"0.8rem"}}>
                        MODEL
                      </th>
                      <th scope="col" className="text-start p-3 fw-bolder" style={{"fontSize":"0.9rem"}}>
                        Price per 1K tokens
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="text-light text-start p-3">OpenAI</td>
                      <td className="text-start p-3">GPT-3.5</td>
                      <td className="text-start p-3">$0.002</td>
                    </tr>
                    <tr>
                      <td className="text-light text-start p-3">OpenAI</td>
                      <td className="text-start p-3">GPT-4</td>
                      <td className="text-start p-3">$0.003</td>
                    </tr>
                    <tr>
                      <td className="text-light text-start p-3">Together AI</td>
                      <td className="text-start p-3">Llama-2-70b</td>
                      <td className="text-start p-3">$0.0008</td>
                    </tr>
                    <tr>
                      <td className="text-light text-start p-3">Together AI</td>
                      <td className="text-start p-3">Llama-2-13b</td>
                      <td className="text-start p-3">$0.0006</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>

            <h5
              className="card-title text-start px-5"
              style={{ color: "rgb(165, 180, 252)" }}
            >
              Token Estimation
            </h5>
            <p className="card-text text-white text-start px-5">
              On average, 1 token is approximately 4 characters or 0.75 words.
              For precise pricing, we recommend using our token calculator tool.
            </p>
            <h5
              className="card-title text-start px-5"
              style={{ color: "rgb(165, 180, 252)" }}
            >
              Billing
            </h5>
            <p className="card-text text-white text-start px-5">
              You will only be charged for the tokens used in generating the
              book. The API tracks token usage and bills accordingly. Detailed
              usage reports are available in your account dashboard.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
