import './App.css';
import Navabar from './Navabar';
import Background from './background';
import Fetchdata from './fetchdata';
import Comp from './component'
function App() {
  return (
    <div>   
     <header>
           <Navabar></Navabar>
      </header>
      <Background></Background> 
       <Comp></Comp>
     <Fetchdata></Fetchdata>
    
    </div>
  );
}

export default App;
