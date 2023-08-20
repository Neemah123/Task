import "./App.css";
import Footer from "../src/components/footer/footer/Footer";
import { BrowserRouter } from "react-router-dom";

function App() {
  return (
    <>
      <div>
        <BrowserRouter>
          <Footer />
        </BrowserRouter>
      </div>
    </>
  );
}

export default App;
