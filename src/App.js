import './App.css';
import {useEffect} from "react";
const tg = window.Telegram.WebApp;
function App() {

  useEffect( () =>{
    tg.ready();
      }, []

  )
  const onClick =()=>{
    tg.close()
  }


  return (
    <div className="App">
    work
      <button onClick={onClick}> cloae </button>
    </div>
  );
}

export default App;
