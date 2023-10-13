import "./index.css";
import Content from "./components/Content";

// images
import one from "./imgs/one.jpg";
import two from "./imgs/four.jpg";
import three from "./imgs/three.jpg";

function App() {
  return (
    <div className="App">
      <Content text="gradient" img={one} />
      <Content text="orange" img={two} />
      <Content text="leaf" img={three} />
    </div>
  );
}

export default App;
