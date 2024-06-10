import {Routes,Route} from 'react-router-dom'
import Motorpage from './pages/motorpage';
import Homepage from './pages/homepage';
import Phonepage from './pages/phonepage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/motor" element={<Motorpage />} />
      <Route path="/phone" element={<Phonepage />} />
    </Routes>
  );
}
 
export default App;