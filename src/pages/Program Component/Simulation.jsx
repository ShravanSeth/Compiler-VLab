import React, { useState } from "react";
import Navbar from "../../components/Navbar";
import SideNav2 from "../SideNav2";
import "./Simulation.css";

const Simulation = () => {
  const [comment, setComment] = useState("");
  const [text, setText] = useState("");
  const [alert, setAlert] = useState(false);


  const handleClick = (text) => {
    if (text){
     isComment(text);
     setAlert(false);
    } 
    else {
        setComment("No string found");
        setAlert(false);
    }
    
  };

  const handleClearClick = () =>{
      const newText = "";
      setText(newText);
      setComment(newText);
      setAlert(false);
    }

  const isComment = (str) => {
    for (var i = 0; i < str.length; i++) {
        if(str[i] === '/'){
            if(str[i+1] === '/'){
                setComment("is a Single line comment");
                return;
            }
            else if(str[i+1] === '*'){
                for(var j = i+2; j<str.length; j++){
                    if(str[j] === '*' && str[j+1] === '/'){
                      setComment("is a multi line comment");
                      return;
                    }
                }
            }
        }
        setComment("is not a comment");
      }
  };

  console.log(comment);

  return (
    <>
      <Navbar />

      <div className="simulation">
        <SideNav2 />
        <div className="container" style={{padding: "1rem", justifyContent:"center"}}>
          <h1 className="text-4xl" style={{ textAlign: "center" }}>
            Simulation
          </h1>
          <h1 className="mb-4 mt-6 text-2xl text-center">
            To Check if a String is a Comment or not
          </h1>
          <div className="program">
            <h1 className="text-xl text-left">Enter the string</h1>
            <div className="flex pt-5 justify-center">
              <div className="mb-3 xl:w-96">
                <textarea
                  className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none block"
                  value={text?text:""}
                  onInput={e=>{setText(e.target.value)}}
                  id="TextArea"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>

            <div className="flex space-x-2 justify-center">
              <button
                type="button"
                onClick={() => {handleClick(text); setAlert(true);}}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-zinc-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Check
              </button>
              <button type="button" onClick={handleClearClick} className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Clear</button>
            </div>
            {alert && text !=="" ? <div
              className="bg-blue-100 mt-5 rounded-lg py-5 px-6 mb-4 text-base text-blue-700 mb-3"
              role="alert"
            >
              {text} {comment}
            </div>: <div className="hidden"></div>}
          </div>
        </div>
      </div>
    </>
  );
};

export default Simulation;
