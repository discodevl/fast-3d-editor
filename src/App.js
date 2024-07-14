import {useState} from 'react';
import MainSideBar from "./components/MainSideBar";
import ModelViewer from "./components/ModelViewer";
import SideBar from "./components/SideBar";

function App() {
  const [tab, setTab] = useState(0);
  // const [block, setBlock] = useState(true);

  function tabHandler(tab) {
    setTab(tab);
  }

  // function isModelLoaded(model) {
  //   setBlock(!model);
  // }

  return (
    <div className="container-main">
      <MainSideBar  onChangeTab={tabHandler}/>
      <SideBar tab={tab}/>
      <ModelViewer />
    </div>
  );
}

export default App;
