import React from "react";
import Navbar from "./Components/Navbar";
import About from "./Components/About";
import Section from "./Components/Section";
import sectionData from "./data/Sectiondata";


const App = () => {
  return (
    <div>
      <Navbar />
      <About />

      {
         sectionData.map((item,index)=>(
                
            <Section key={index}
              title={item.title}
              description={item.description}
            />
         
     ))
      }
    </div>
  );
};

export default App;
