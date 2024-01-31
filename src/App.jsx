import "./App.css";
import Calculator from "./components/Calculator";
import Footer from "./components/Footer";
import Header from "./components/Header";

function App() {
  return (
    <div className="min-h-screen min-w-screen h-full w-full flex flex-col bg-zinc-600 items-center ">
      <Header />
      <Calculator />
      <Footer />
    </div>
  );
}

export default App;
