import { useState } from "react";
import Post from "./Post";
import CreatePost from "./CreatePost";
import Slab from "./slab";
import FileUpload from "./FileUpload";
import SideBar from "./sidebar";
import Header from "./Header";
import StepApp from "./salary/StepApp";
import { MultiStepContext } from "../contexts/StepContext";
import StepContext from "../contexts/StepContext";


const Dashboard = () => {
  const [selectedTab, setSelectedTab] = useState("Home");

  return (
    <>
      <StepContext>
        <div className="mainContainer">
            <div className="maincontent">
              <SideBar
                selectedTab={selectedTab}
                setSelectedTab={setSelectedTab}
              ></SideBar>
              <div className="content">
                <Header></Header>
                {/* {selectedTab === "Home" && <Post />} */}
                {selectedTab === "Dashboard" && <CreatePost />}
                {selectedTab === "Slab" && <StepApp />}
                {selectedTab === "File Upload" && <FileUpload />}
              </div>
            </div>
          </div>
      </StepContext>
        
    </>
  );
};

export default Dashboard;
