import "./loginpage.css";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap/dist/js/bootstrap.js";
import { FaHotel } from "react-icons/fa";

const loginpage = () => {
  return (
    <>
      <div className="board">
        <div className="aligner">
          <h1 className="login"> Login</h1>
          <FaHotel className="jfa" />
          <form>
            <div className="input-box">
              <input type="text" placeholder="Username"></input>
            </div>

            <div className="input-box">
              <input type="password" placeholder="Password"></input>
            </div>
            <button className="sbtn">Sign in</button>
          </form>
          <h5 className="underline">Forgot password? </h5>
          <h5 className="underline">Create new account?</h5>
        </div>
      </div>
    </>
  );
};

export default loginpage;
