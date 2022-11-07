import './App.scss';
import {Route, Routes} from 'react-router-dom';

// Public
import Layout from './layout/Layout';
import Forside from './pages/Forside';
import Kontakt from './pages/Kontaks';
import Omos from './pages/Omos';

// Admin
import AdminLayout from './admin/layout/AdminLayout';
import AdminHome from './admin/AdminPages/AdminHome';
import AdminTours from './admin/AdminPages/AdminTours/AdminTours';
import Login from './admin/components/Login';
import NoMatch from './admin/components/NoMatch';
import AdminToursCreate from './admin/AdminPages/AdminTours/AdminToursCreate';
import AdminToursEdit from './admin/AdminPages/AdminTours/AdminToursEdit';
import AdminAbout from './admin/AdminPages/AdminAbout';
import AdminContact from './admin/AdminPages/AdminContact';
import AdminFooter from './admin/AdminPages/AdminFooter';





function App () {
  return (
    <div className="App">
      {/* BrowserRouter ligger i index.js */ }
      {/* LoginContextProvider ligger i index.js */ }

            
      <Routes>
      <Route path="/" element={<Layout />} >
        {/* Public */}
          <Route index element={<Forside />} />
          <Route path="kontakt" element={<Kontakt />} />
          <Route path="omos" element={<Omos />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          {/* Admin */}
          <Route index element={<AdminHome />} />
          <Route path="admintours" element={<AdminTours />} />
          <Route path="admintoursopret" element={<AdminToursCreate />} />
          <Route path="admintoursret/:ID" element={<AdminToursEdit />} />
          <Route path="adminabout" element={<AdminAbout />} />
          <Route path="admincontact" element={<AdminContact />} />
          <Route path="adminfooter" element={<AdminFooter />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

      </Routes>  
    </div>
  );
}

export default App;
