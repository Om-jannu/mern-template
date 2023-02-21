import "./homeStyle.css";
import logo from "../media/images/404-page.png";
import { FaReplyAll } from "react-icons/fa";
const PageNotFound=()=> {
  return (
    <>
      <div className='pnfcss'>
        <img className="pnfimg" src={logo} alt="mern logo" />
        <div className="pnftext">
          <p>This is a custom Page-not-found page</p>
          <a href="/"><FaReplyAll/> Back to Home page</a>
        </div>
      </div>
    </>
  )
}

export default PageNotFound;