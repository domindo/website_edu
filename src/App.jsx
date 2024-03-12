


import './App.scss'
import Header from "./layout/Header/Header.jsx";
import Homepage from "./layout/Homepage/Homepage.jsx";
import Flatforms from "./layout/Homepage/Flatforms.jsx";
import Programs from "./layout/Programs/Programs.jsx";
import Benefits from "./layout/Homepage/Benefits.jsx";
import {Difference} from "./layout/Homepage/Difference.jsx";
import SliderReview from "./layout/Homepage/SliderReview.jsx";

function App() {
    //const [count, setCount] = useState(0)

    return (
        <div className="">
            <div className="">
                <Header/>
                <Homepage/>
                <Flatforms/>
                <Programs/>
                <Benefits/>
                <Difference />
                <SliderReview/>
            </div>

        </div>
        /*<>
          <div>
            <a href="https://vitejs.dev" target="_blank">
              <img src={viteLogo} className="logo" alt="Vite logo" />
            </a>
            <a href="https://react.dev" target="_blank">
              <img src={reactLogo} className="logo react" alt="React logo" />
            </a>
          </div>
          <h1>Vite + React</h1>
          <div className="card">
            <button onClick={() => setCount((count) => count + 1)}>
              count is {count}
            </button>
            <p>
              Edit <code>src/App.jsx</code> and save to test HMR
            </p>
          </div>
          <p className="read-the-docs">
            Click on the Vite and React logos to learn more
          </p>
        </>*/
    )
}

export default App
