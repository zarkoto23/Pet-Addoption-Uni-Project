import Header from "./components/header/Header";
import Footer from "./components/static-components/Footer";

export default function App() {
  return (
    <>
      <div className="background"></div>

      <Header />

<div className="min-h-[120vh] flex flex-col">
  <main className="flex-grow pb-24">
    {/* съдържание */}
  </main>
</div>

      <Footer/>

    </>
  );
}
