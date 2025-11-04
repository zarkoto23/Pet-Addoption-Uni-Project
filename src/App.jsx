import { Route, Routes } from "react-router-dom";
import Header from "./components/header/Header";
import Footer from "./components/static-components/Footer";
import Login from "./components/login/Login";


export default function App() {

  return (
    <>

      <div className="background"></div>
      <Header />
      <Routes>
          <Route index/>
          <Route path="/login" element={<Login/>}/>

      </Routes>




      <Footer/>

    </>
  );
}
