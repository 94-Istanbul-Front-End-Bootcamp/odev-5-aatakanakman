import { Redirect } from "react-router-dom";
import { Content, SideLeft, SideRight } from "./index";

const TheLayout = () => {
  const logOut = (e) => {
    
    localStorage.removeItem("isLoggedIn");
    localStorage.removeItem("username");
    localStorage.removeItem("password");
    return <Redirect to="/login"></Redirect>;
  };

  return (
    <div className="loggedView">
      <div className="container">
        <div className="row">
          <SideLeft logOut={logOut} />
          <div className="col-6">
            <div className="main">
              <Content />
            </div>
          </div>
          <SideRight />
        </div>
      </div>
    </div>
  );
};

export default TheLayout;
