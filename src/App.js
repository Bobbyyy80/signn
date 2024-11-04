import Log from "./Log";
import Sign from "./Sign"
import{BrowserRouter,Routes,Route  } from 'react-router-dom'
const App=()=>{
  return(
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Log/>}/>
      <Route path="/Log" element={<Log/>}/>
      <Route path="/Sign" element={<Sign/>}/>  	
    </Routes>
    </BrowserRouter>
  );
}
export default App;