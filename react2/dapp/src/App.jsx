import TailwindLogo from "./images/tailwind.jpeg";

function App() {
  
  return (
    <div className="bg-red-100 min-h-screen">
      <header className="bg-blue-100 h-12 md:h-20" > 
      <div className="max-w-screen-xl mx-auto h-full flex justify-between items-center">
        <div>SJM Portfolio</div>
        {/* <div><img className="w-20 md:w-40" src={TailwindLogo} alt="Tailwind"/></div> */}
        <ul className="flex gap-2 md:gap-8 text-xs sm:text-sm md:text-base">
          <li className="bg-indigo-300 btn-style">Introduce</li>
          <li className="bg-purple-300 btn-style">Portfolio</li>
          <li className="bg-green-300 btn-style">Contact Me</li>
        </ul>
      </div>
      </header>
    </div>
  );
}

export default App;
