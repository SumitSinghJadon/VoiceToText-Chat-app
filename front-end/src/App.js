import { HashRouter,Route,Routes } from 'react-router-dom';
import LayOut from './LayOut';
import VoiceToText from './VoiceToText';
import ReceivedText from './ReceivedText';
import CreateRoom from './CreateRoom';


const App = () => {
  return (
   <>
   <HashRouter>
   <Routes>
    <Route path='/' element={<LayOut/>}>
    <Route index element={<CreateRoom/>}/>
    <Route path='CreateRoom' element={<CreateRoom/>}/>
    <Route path='VoiceToText' element={<VoiceToText/>}/>
    <Route path='ReceivedText' element={<ReceivedText/>}/>
    </Route>
   </Routes>
   </HashRouter>



   </>
  );
};

export default App;
