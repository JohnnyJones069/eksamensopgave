import './App.scss';
import {Route, Routes} from 'react-router-dom';

// Public
import Layout from './layout/Layout';
import Forside from './pages/Forside';
import Kontaktos from './pages/Kontaktos';
import Nyheder from './pages/Nyheder';
import Omos from './pages/Omos';
import ShowNyhed from './layout/components/ShowNyhed';
import AccordionPage from './pages/AccordionPage';
import Service from './pages/Service';

// Admin
import AdminLayout from './admin/layout/AdminLayout';
import AdminHome from './admin/AdminPages/AdminHome';
import Login from './admin/components/Login';
import NoMatch from './admin/components/NoMatch';
import AdminAbout from './admin/AdminPages/AdminAbout';
import AdminNews from './admin/AdminPages/AdminNyheder/AdminNyheder';
import AdminNyhedOpret from './admin/AdminPages/AdminNyheder/AdminNyhderOpret';
import AdminNyhedRet from './admin/AdminPages/AdminNyheder/AdminNyhederRet';
import AdminBooking from './admin/AdminPages/AdminBooking/AdminBooking';
import AdminBookingRet from './admin/AdminPages/AdminBooking/AdminBookingRet';




function App () {
  return (
    <div className="App">
      {/* BrowserRouter ligger i index.js */ }
      {/* LoginContextProvider ligger i index.js */ }

            
      <Routes>
      <Route path="/" element={<Layout />} >
        {/* Public */}
          <Route index element={<Forside />} />
          <Route path="kontaktos" element={<Kontaktos />} />
          <Route path="omos" element={<Omos />} />
          <Route path="nyheder" element={<Nyheder />} /> 
          <Route path="nyheder/:ID" element={<ShowNyhed />} /> 
          <Route path="faq" element={<AccordionPage />} />
          <Route path="service" element={<Service />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin */}
          <Route index element={<AdminHome />} />
          <Route path="adminnyheder" element={<AdminNews />} />
          <Route path="adminnyhedopret" element={<AdminNyhedOpret />} />
          <Route path="adminnyhedret/:ID" element={<AdminNyhedRet />} />
          <Route path="adminabout" element={<AdminAbout />} />
          <Route path="adminbooking" element={<AdminBooking />} />
          <Route path="adminbookingret/:ID" element={<AdminBookingRet />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

      </Routes>  
    </div>
  );
}

export default App;
