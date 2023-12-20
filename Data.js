import { useState } from "react";
import Context from "./ContextAPI";
import axios from "axios";
const Kasper = ({ children }) => {
  const [userdetails, setuserdetails] = useState({});
  const [token, settoken] = useState(null);
  const [img, setimg] = useState(null)
  return (
    <Context.Provider
      value={{userdetails,setuserdetails,token,settoken,img,setimg}}
    >
      {children}
    </Context.Provider>
  );
};
export default Kasper;
