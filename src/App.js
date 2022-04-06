import Header from "./components/Header";
import Carousel from "./components/Carousel";
import Body from "./components/Body";
import Footer from "./components/Footer";
import "bootstrap/dist/css/bootstrap.min.css";

function App() {
  return (
    <>
      <Header />
      <Carousel />
      <h2>Body text</h2>
      <Body />
      <p>Opiss aaaabbababbbababbab</p>
      <Footer />
    </>
  );
}

export default App;
