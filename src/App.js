import "./App.css";
import BindingData from "./BindingData/BindingData";
import RenderCondition from "./RenderWithCondition/RenderCondition";
import HandleEvent from "./HandleEvent/HandleEvent";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
function App() {
  return (
    <div className="App">
      <BindingData />
      <RenderCondition/>
      <HandleEvent/>
      <RenderWithMap/>
    </div>
  );
}

export default App;
