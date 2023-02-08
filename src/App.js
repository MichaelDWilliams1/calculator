import CalcCase from "./CalcCase";

function App() {
  return (
    <div className="border-2 border-black h-screen w-screen flex bg-slate-900">
      <div className="shadow-2xl bg-slate-500 m-auto w-96 h-3/5 rounded-t-3xl flex flex-col justify-evenly">
        <div className="bg-slate-500 rounded-t-3xl h-1/4 flex justify-center items-center">
          <div className="bg-slate-900 h-5/6 w-11/12 rounded-2xl text-white text-3xl flex justify-end items-end p-2">123 + 1234</div>
        </div>
        <div className="h-2/3">
          <section className="grid grid-cols-4 grid-rows-4 h-full ml-2 mr-2 gap-2">
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">7</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">8</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">9</div>
            <div className="bg-white text-bg-slate-800 text-center text-4xl flex items-center shadow-md shadow-black justify-center">DEL</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">4</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">5</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">6</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">+</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">1</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">2</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">3</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">-</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">.</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">0</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">/</div>
            <div className="bg-white text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">*</div>
            <div className="bg-white col-span-2  text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">RESET</div>
            <div className="bg-white col-span-2 text-bg-slate-800 text-center text-5xl flex items-center shadow-md shadow-black justify-center">=</div>
          </section>
        </div>
      </div>
      
    </div>
  );
}

export default App;
