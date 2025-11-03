import { Link } from "react-router-dom"
import { NavigationMenu } from "./components/Navigation";

export default function App() {
  return (
    <>
    <NavigationMenu>
       <Link to="#" className="px-4 py-2 hover:text-primary transition">
          Home
        </Link>
      </NavigationMenu>
    <div className=" min-h-screen flex flex-col items-center justify-center gap-6 text-center">
      <h1 className="text-5xl font-semibold text-primary drop-shadow-sm">
        🐾 Осинови приятел
      </h1>
      

      <p className="text-lg text-secondary-foreground max-w-md">
        Помогни на животно да намери дом 💕
      </p>

   
    </div>

    </>
 
  );
}
