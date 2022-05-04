import React, { useState } from 'react'
import Navbar from '../../components/Navbar';
import SideNav2 from '../SideNav2';
import '../Program Component/Simulation.css';

const LexicalAnalyser = () => {
  const [file,setFile] = useState("");
//   const [keyword,setKeyword] = useState(false);
//   const [identifier,setIdentifier] = useState([""]);
//   const [spchar,setSpChar] = useState(false);
  const [alert, setAlert] = useState(false);


  const handleClick = (file) => {
    if (file){
        LexicalAnalysis(file);
        setAlert(false);
    } 
    else {
        setFile("No file found");
        setAlert(false);  
    }
    
};
    var keywords = []; 
    var identifiers = [];
    var specialChar = [];
    var numbers = [];

  const handleClearClick = () =>{
      const newText = "";
      setFile(newText);
      keywords = [];
      identifiers = [];
      specialChar = [];
      numbers = [];
      setAlert(false);
    }





  const keywordList = ["for","while","do","int","float","char","double","static","switch","case", "main", "printf", "main()"];
  
  const specialChars = /[`!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;

  const LexicalAnalysis = (str) => {
        var result = str.match(/("[^"]*")|([^\s"]+)/g);
        result.map((element)=>{
            if(keywordList.includes(element)){
              keywords.push(element);
              
            }
            else if (specialChars.test(element)){
              specialChar.push(element);
              
            }
            else if (!isNaN(element)){
               numbers.push(element);
            }
            else{
              identifiers.push(element);
            }
        });

        console.log(keywords);
        console.log(specialChar);
        console.log(identifiers);
        console.log(numbers);
  }

   
    
  return (
    <>
    <Navbar/>
    <div className="simulation">
        <SideNav2 />
        <div className="container" style={{padding: "1rem", justifyContent:"center"}}>
          <h1 className="text-4xl" style={{ textAlign: "center" }}>
            Simulation
          </h1>
          <h1 className="mb-4 mt-6 text-2xl text-center">
            Lexical Analysis
          </h1>
          <div className="program">
            <h1 className="text-xl text-left">Enter the program</h1>
            <div className="flex pt-5 justify-center">
              <div className="mb-3 xl:w-96">
                <textarea
                  className="form-control w-full px-3 py-1.5 text-base font-normal text-gray-700 bg-white bg-clip-padding border border-solid border-gray-300 rounded transition ease-in-out m-0 focus:text-gray-700 focus:bg-white focus:border-blue-600 focus:outline-none block"
                  value={file?file:""}
                  onInput={e=> setFile(e.target.value)}
                  id="TextArea"
                  rows="3"
                  placeholder="Your message"
                ></textarea>
              </div>
            </div>

            <div className="flex space-x-2 justify-center">
              <button
                type="button"
                onClick={() => {handleClick(file); setAlert(true);}}
                data-mdb-ripple="true"
                data-mdb-ripple-color="light"
                className="inline-block px-6 py-2.5 bg-zinc-600 text-white font-medium text-xs leading-tight uppercase rounded shadow-md hover:bg-zinc-700 hover:shadow-lg focus:bg-zinc-700 focus:shadow-lg focus:outline-none focus:ring-0 active:bg-zinc-800 active:shadow-lg transition duration-150 ease-in-out"
              >
                Check
              </button>
              <button type="button" onClick={handleClearClick} className="inline-block px-6 py-2 border-2 border-gray-800 text-gray-800 font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out">Clear</button>
            </div>
            {alert && file !=="" ? <div
              className="bg-blue-100 mt-5 rounded-lg py-5 px-6 mb-4 text-base text-blue-700 mb-3"
              role="alert"
            >
             {/* List tokens here */}

            </div>: <div className="hidden"></div>}
          </div>
        </div>
      </div>
    </>
  )
}

export default LexicalAnalyser