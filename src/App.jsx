import './App.scss';
import logo from './Sheldon_Cooper_Profile.webp'

function App () {
  return (
    <div className="App">
      {/* BrowserRouter ligger i index.js */ }
      {/* LoginContextProvider ligger i index.js */ }

      {/*       
      <Routes>
      <Route path="/" element={<Layout />} >
          <Route index element={<Home />} />
          <Route path="kontakt" element={<Contact />} />
          <Route path="omos" element={<About />} />
          <Route path="login" element={<Login />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

        <Route path="/admin" element={<AdminLayout />}>
          <Route index element={<AdminHome />} />
          <Route path="admintours" element={<AdminTours />} />
          <Route path="admintoursopret" element={<AdminToursCreate />} />
          <Route path="admintoursret/:ID" element={<AdminToursEdit />} />
          <Route path="*" element={<NoMatch />} />
        </Route>

      </Routes>  
      */}

      <header className="App-header">
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
      </header>
    </div>
  );
}

export default App;
