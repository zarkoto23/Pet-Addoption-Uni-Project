import { BrowserRouter, Route, Routes } from "react-router-dom";

import Header from "./components/header/Header";
import Footer from "./components/static-components/Footer";
import Login from "./components/login/Login";
import Register from "./components/register/Register";
import { Flip, ToastContainer } from "react-toastify";
import Home from "./components/static-components/Home";
import Contact from "./components/static-components/Contact";
import About from "./components/static-components/About";
import Volunteer from "./components/static-components/Volunteer";
import NotFound from "./components/static-components/NotFound";
import Catalog from "./components/catalog/Catalog";
import Create from "./components/create/Create";

export default function App() {
  return (
    <>
      <BrowserRouter>
        <div className="background"></div>
        <Header />

        <Routes>
          <Route index element={<Home />} />
          <Route path="/login" element={<Login />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/create" element={<Create />} />


          <Route path="/register" element={<Register />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/volunteer" element={<Volunteer />} />
          <Route path="/contact" element={<NotFound />} />
        </Routes>

        <Footer />
        <ToastContainer
          position="top-center"
          autoClose={1500}
          hideProgressBar
          newestOnTop={false}
          closeOnClick={false}
          rtl={false}
          pauseOnFocusLoss={false}
          draggable={false}
          pauseOnHover
          theme="light"
          transition={Flip}
        />
      </BrowserRouter>
    </>
  );
}
