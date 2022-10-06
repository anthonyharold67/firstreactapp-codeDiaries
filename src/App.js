import './App.css';
import {useState} from 'react';
import Navbar from './Navbar';
import Counter from './Counter';


function App() {
  const [userName,setUserName] = useState("jacob");
  let myName = "Anthony"
  const changeName = () =>{
    myName = "Mustafa"
    console.log(myName)
    setUserName("Ronaldo")
    console.log("merhaba");
    
  }
  return (
    <div className="App">
      <Navbar />
      <h1>Hello React!</h1>
      <h5>{myName}</h5>
      <button onClick={changeName}>Değiştir</button>
      <hr/>
      <h4 onClick={()=> setUserName("Özil")}>{userName}</h4>
      <button onClick={()=> setUserName("Messi")}>Değiştir</button>
      <hr/>
      <Counter />
    </div>
  );
}

export default App;
