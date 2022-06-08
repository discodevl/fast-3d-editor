import MainSideBar from "./components/MainSideBar";
import ModelViewer from "./components/ModelViewer";

function App() {
  return (
    <div style={{display: 'flex'}}>
      <MainSideBar />
      <ModelViewer/>
    </div>
  );
}

export default App;
