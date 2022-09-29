import Navbar from './Navbar'
import { Routes, Route } from 'react-router-dom'
import "./App.css"
import "./normalize.css"
import Auth from "./pages/Auth";
import Home from "./pages/Home";
import Profile from "./pages/Profile";
import LogoSearch from './components/HomeProfileSide/LogoSearch';
import ProfileLeft from './components/ProfileLeftSide/ProfileLeft';

function App() {
  return (
    <div className="overflow-hidden bg-[color:var(--main-background)] md:px-6 xl:px-[3rem]">
      <div className="absolute top-[-18%] right-[0] w-[22rem] h-[22rem] rounded-[50%] bg-[#42c3a77e] blur-[72px]"></div>
      <div className="absolute top-[36%] left-[-8rem] w-[22rem] h-[22rem] rounded-[50%] bg-[#42c3a766] blur-[72px]"></div>
      <div className='Home xl:mx-[3rem] relative md:grid md:grid-cols-[1fr_7fr] xl:grid-cols-1 gap-5 overflow-hidden h-screen'>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/search-mobile' element={<LogoSearch />} />
          <Route path='/profile-mobile' element={<ProfileLeft />} />
        </Routes>
      </div>
{/* 
      <Profile /> */}
      <Auth/>
    </div>
  );
}

export default App;
