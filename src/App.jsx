import './App.scss';
import logo from './Sheldon_Cooper_Profile.webp';
import {Route, Routes} from 'react-router-dom';

// Public
import Layout from './layout/Layout';
import Home from './pages/Home';
import Contact from './pages/Contact';
import About from './pages/About';

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
          <Route index element={<Home />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="omos" element={<About />} />
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
     

      {/* <header className="App-header">
        <img src={ logo } className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
          <br />
          Be carefull. Sheldon Cooper might give a lecture if there is an error.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
    </div>
  );
}

export default App;
