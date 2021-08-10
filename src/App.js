import  Header from "./Header"
import Sidebar from "./Sidebar"
import './App.css';
import Feed from "./Feed"
import Widgets from "./Widgets";
import Login from "./Login";
import { useStateValue } from './StateProvider'

function App() {
  const [{user},dispatch]=useStateValue()
  return (
    <div className="App">
      {
        !user ?( 
          <Login/>
        
          ):(
       <>
        <Header/>
      <div className="App__body">
        <Sidebar />
        <Feed/>
        <Widgets/>
      </div>
       </>

          )
      }
     
    
    </div>
  );
}

export default App;
