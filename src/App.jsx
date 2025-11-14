import { Route, Routes } from "react-router-dom";

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
import UserProvider from "./components/providers/UserProvider";
import Details from "./components/details/Details";
import Profile from "./components/profile/Profile";
import AuthGuard from "./components/guards/AuthGuard";
import GuestGuard from "./components/guards/GuestGruard";
import Edit from "./components/edit/Edit";
import CarouselProvider from "./components/providers/CarouselProvider";

export default function App() {
  return (
    <UserProvider>
      <div className="background"></div>
      <Header />

      <Routes>
        <Route index element={<Home />} />

        <Route element={<CarouselProvider />}>
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/catalog/details/:petId" element={<Details />} />
        </Route>

        <Route element={<GuestGuard />}>
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Route>

        <Route element={<AuthGuard />}>
          <Route path="/create" element={<Create />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/edit" element={<Edit />} />
        </Route>

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
    </UserProvider>
  );
}
