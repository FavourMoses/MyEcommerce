import {Routes,Route} from 'react-router-dom'
import Motorpage from './pages/motorpage';
import Homepage from './pages/homepage';
import Phonepage from './pages/phonepage';
import Accessoriespage from './pages/accessoriespage';
import Laptoppage from './pages/laptoppage';
import Otherspage from './pages/otherspage';
import Landingpage from './pages/landingpage';
import Seclandpage from './pages/seclandpage';
import Communitypage from './pages/communitypage';
import Furngardenpage from './pages/furngardenpage';
const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Landingpage />} />
      <Route path="/second" element={<Seclandpage />} />
      <Route path="/home" element={<Homepage />} />
      <Route path="/motor" element={<Motorpage />} />
      <Route path="/phone" element={<Phonepage />} />
      <Route path="/accesories" element={<Accessoriespage />} />
      <Route path="/laptop" element={<Laptoppage />} />
      <Route path="/other" element={<Otherspage />} />
      <Route path="/community" element={<Communitypage />} />
      <Route path="/furniture-garden" element={<Furngardenpage/>} />
    </Routes>
  );
}
 
export default App;