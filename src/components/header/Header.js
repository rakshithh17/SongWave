import React from 'react';

import { MdHome,MdQueueMusic,MdAccountCircle, MdSearch} from 'react-icons/md';




const Header = () => {
    return (
        <header style={{ backgroundColor: 'black', padding: '2rem', color:'white', width:'100%', minWidth:'100%' }}>
          <div style={{ display:'flex', alignItems:'center', justifyContent:'spaces-between', marginRight:'40px'}}>
             <div style={{ display:'flex', alignItems:'center'}}>
             
             <svg xmlns="http://www.w3.org/2000/svg" width="448" height="448" viewBox="0 0 56 56" stroke="currentColor" style={{ width:'40px', height:'40px', borderRadius: '10px',fontWeight:'bold'}}>
                  <path fill="currentColor" d="M24.59 49.574c.96 0 1.664-.726 1.664-1.64V8.066c0-.914-.703-1.64-1.664-1.64c-.938 0-1.64.726-1.64 1.64v39.868c0 .914.702 1.64 1.64 1.64m13.64-4.687c.938 0 1.641-.75 1.641-1.664V12.777c0-.914-.703-1.664-1.64-1.664c-.938 0-1.665.75-1.665 1.664v30.446c0 .914.727 1.664 1.664 1.664M17.793 41.09c.938 0 1.64-.727 1.64-1.64v-22.9c0-.913-.703-1.64-1.64-1.64c-.961 0-1.664.727-1.664 1.64v22.9c0 .913.703 1.64 1.664 1.64m13.617-2.531c.938 0 1.664-.727 1.664-1.641V19.082c0-.914-.726-1.64-1.664-1.64c-.937 0-1.64.726-1.64 1.64v17.836c0 .914.703 1.64 1.64 1.64m13.64-4.196c.938 0 1.641-.75 1.641-1.664V23.3c0-.914-.703-1.664-1.64-1.664a1.64 1.64 0 0 0-1.664 1.664v9.398a1.64 1.64 0 0 0 1.664 1.664m-34.077-1.851c.937 0 1.64-.727 1.64-1.64v-5.743c0-.914-.703-1.64-1.64-1.64c-.961 0-1.664.726-1.664 1.64v5.742c0 .914.703 1.64 1.664 1.64"/>
                </svg>
                <h1 style={{ fontSize:'1.5rem', fontWeight:'bold'}}>SongWave</h1>
             </div>
             <div style={{display:'flex',marginRight:'40px', marginLeft:'150px'}}>
                
             <MdHome size={28}  />
                <a href='/' style={{ color:'white', textDecoration:'none', marginRight:'100px',  fontSize: '1.2rem',fontWeight:'bold'}}>Home</a>

                <MdSearch size={28}   />
                <a href='/search' style={{ color:'white', textDecoration:'none', marginRight:'100px',  fontSize: '1.2rem',fontWeight:'bold'}}>Search</a>
                
                <MdQueueMusic size={28}  />
                <a href='/favourites' style={{coclor:'white', textDecoration:'none',fontSize: '1.2rem',fontWeight:'bold',marginRight:'450px'}}>Favourites</a>
                
                
                 <MdAccountCircle size={28}  />
                <a href='/login' style={{coclor:'white', textDecoration:'none',fontSize: '1.2rem',fontWeight:'bold'}}>Log in</a>
             </div>
          </div>
        </header>
    );
};

export default Header;