import {useState} from 'react';
import MainSideBar from "./components/MainSideBar";
import ModelViewer from "./components/ModelViewer";
import SideBar from "./components/SideBar";

function App() {
  const [tab, setTab] = useState();

  function tabHandler(tab) {
    setTab(tab);
  }


  return (
    <div className="container-main">
      <MainSideBar onChangeTab={tabHandler}/>
      <SideBar tab={tab}/>
      <ModelViewer />
    </div>
  //   <div style={{display: 'flex',
  //     width: '99.5vw',
  //     height: '99vh',
  //     border: '4px solid black'}}>
  //   <div style={{width: '5%',
  //     height: '100%',
  //     border: '1px solid red',
  //     backgroundColor: 'red'}}></div>
  //   <div style={{width: '20%',
  //     height: '100%',
  //     border: '1px solid green',
  //     backgroundColor: 'green'}}></div>
  //   <div style={{width: '75%',
  //     height: '100%',
  //     border: '1px solid yellow', backgroundColor: 'yellow'}}></div>
  // </div>
  );
}

export default App;
