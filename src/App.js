import "./App.css";
import BindingData from "./BindingData/BindingData";
// import RenderCondition from "./RenderWithCondition/RenderCondition";
import HandleEvent from "./HandleEvent/HandleEvent";
import RenderWithMap from "./RenderWithMap/RenderWithMap";
import RenderMovie from "./RenderMovie/RenderMovie";
import DemoState from "./State/DemoState";
import RenderCar from "./State/RenderCar";
import RenderCarTemplateString from "./State/RenderCarTemplateString";
import DemoProps from "./Props/DemoProps";
import DemoRedux from "./DemoRedux/DemoRedux";
import TestRedux from "./TestRedux/TestRedux";
import PhoneRedux from "./PhoneRedux/PhoneRedux";
import MovieBooking from "./MovieBooking/MovieBooking";
import { Route, Routes } from "react-router-dom";
import NotFound from "./pages/NotFound";
import HomePage from "./pages/HomePage";

function App() {
  return (
    <div className="App">
      <Routes>
        <Route index element={<HomePage/>}/>
        <Route path="/bidingdata" element={<BindingData />} />
        <Route path="/handle-event" element={<HandleEvent />} />
        <Route path="/render-with-map" element={<RenderWithMap />} />
        <Route path="/render-movie" element={<RenderMovie />} />
        <Route path="/demo-state" element={<DemoState />} />
        <Route path="rendercar" element={<RenderCar />} />
        <Route
          path="/render-car-templatestring"
          element={<RenderCarTemplateString />}
        />
        <Route path="/props">
          <Route path="/props/demo-props" element={<DemoProps />} />
        </Route>
        <Route path="/demoredux" element={<DemoRedux />} />
        <Route path="/testredux" element={<TestRedux />} />
        <Route path="/phoneredux" element={<PhoneRedux />} />
        <Route path="/movie-booking" element={<MovieBooking />} />
        <Route path="*" element={<NotFound />} />
      </Routes>

      {/* <HandleEvent /> */}
      {/* <RenderWithMap /> */}
      {/* <RenderMovie /> */}
      {/* <DemoState /> */}
      {/* <RenderCar /> */}
      {/* <RenderCarTemplateString /> */}
      {/* <DemoProps /> */}
      {/* <DemoRedux /> */}
      {/* <TestRedux /> */}
      {/* <PhoneRedux /> */}
      {/* <MovieBooking /> */}
    </div>
  );
}

export default App;
