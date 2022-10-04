import Navbar from './Navbar'
import { Routes, Route, Navigate } from 'react-router-dom'
import "./App.css"
import "./normalize.css"
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LogoSearch from './components/HomeProfileSide/LogoSearch';
import ProfileLeft from './components/ProfileLeftSide/ProfileLeft';
import { useSelector } from 'react-redux';

function App() {
  const user = useSelector((state) => state.authReducer.authData);

  return (
    <div className="overflow-hidden bg-[color:var(--main-background)] md:px-6 xl:px-[3rem]">
      <div className="absolute top-[-18%] right-[0] w-[22rem] h-[22rem] rounded-[50%] bg-[#42c3a77e] blur-[72px]"></div>
      <div className="absolute top-[36%] left-[-8rem] w-[22rem] h-[22rem] rounded-[50%] bg-[#42c3a766] blur-[72px]"></div>
      <div className={user ? 'Home xl:mx-[3rem] relative md:grid md:grid-cols-[1fr_7fr] xl:grid-cols-1 gap-5 overflow-hidden h-screen' : 'Home xl:mx-[3rem] relative md:grid md:grid-cols-1 gap-5 overflow-hidden h-screen'}>
        {
          user ? <Navbar /> : <div className='invisible'>Home</div>
        }
        <Routes>
          <Route
            path='/'
            element={user ? <Navigate to="home" /> : <Navigate to='auth' />}
          />

          <Route
            path='/home'
            element={user ? <Home /> : <Navigate to='../auth' />}
          />

          <Route
            path='/auth'
            element={user ? <Navigate to="../home" /> : <Auth />}
          />

          <Route
            path='/profile/:id'
            element={user ? <Profile /> : <Navigate to='../auth' />}
          />


          {/* Mobile version */}
          <Route path='/search-mobile' element={<LogoSearch />} />
          <Route path='/profile-mobile' element={<ProfileLeft />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
