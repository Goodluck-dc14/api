import React from "react";
import Body from "./component/Body";
import { BrowserRouter, Switch, Route } from "react-router-dom";
import Detailed from "./component/Detailed";

const App = () => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/" component={Body} />
        <Route exact path="/Detailed/:id" component={Detailed} />
      </Switch>
    </BrowserRouter>
  );
};

export default App;

// import React, { useState } from "react";
// import HeaderNav from "./Portfolio/HeaderNav";
// import Home from "./Portfolio/Home";
// import About from "./Portfolio/About";
// import Portfolio from "./Portfolio/Portfolio";
// import Services from "./Portfolio/Services";
// import Resume from "./Portfolio/Resume";
// import Contact from "./Portfolio/Contact";
// import Footer from "./Portfolio/Footer";

// const App = () => {
//   const [change, setChange] = useState(false);

//   const getPosition = () => {
//     if (window.scrollY >= 80) {
//       setChange(true);
//     } else {
//       setChange(false);
//     }
//   };
//   window.addEventListener("scroll", getPosition);
//   return (
//     <div>
//       <HeaderNav
//         clr={change ? "white" : ""}
//         good={change ? "1px solid rgba(0, 0, 0, 0.1)" : ""}
//       />
//       <Home />
//       <About />
//       <Portfolio />
//       <Services />
//       <Resume />
//       <Contact />
//       <Footer />
//     </div>
//   );
// };

// export default App;
