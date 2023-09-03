import { useNavigate } from 'react-router-dom';

function Navbar(){

    const navigate = useNavigate();

    return(
      <div className='navbar'>
          <p className='navbar-logo'>Kuk Papers</p>
          <div className='navbar-items'>
            <p onClick={()=>{ navigate('/'); }}>Home</p>
            <p onClick={()=>{ navigate('/upload'); }}>Upload</p>
            <p onClick={()=>{ navigate('/contact'); }}>Contact</p>
          </div>
      </div>
    );
}
export default Navbar;