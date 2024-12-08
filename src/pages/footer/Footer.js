import React from "react";
import { FaInstagram, FaFacebook, FaTwitter, FaYoutube } from 'react-icons/fa';



const Footer = () => {
  return (
    <div className="bg-[#000] text-white">
      <div className="grid grid-cols-1 sm:gird-cols-3 lg:grid-cols-4 gap-6 sm:px-8 px-5 py-16 sm:text-center">
        

         <div >
           <h4 style={{fontWeight:"bold"}}>Company</h4>
           <p className="text-sm"style={{cursor:'pointer', color:'gray', marginTop:'5px'}}>About</p>
           <p className="text-sm"style={{cursor:'pointer', color:'gray', marginTop:'5px'}}>Jobs</p>
           <p className="text-sm"style={{cursor:'pointer', color:'gray', marginTop:'5px'}}>FAQ</p>
          </div>

          
          <div >
           <h4 style={{fontWeight:"bold"}}>Communitites</h4>
           <p className="text-sm"style={{cursor:'pointer', color:'gray', marginTop:'5px'}}>For Artists</p>
           <p className="text-sm"style={{cursor:'pointer', color:'gray', marginTop:'5px'}}>Developers</p>
           <p className="text-sm"style={{cursor:'pointer', color:'gray', marginTop:'5px'}}>Advertising</p>
           <p className="text-sm"style={{cursor:'pointer', color:'gray', marginTop:'5px'}}>Investors</p>
          </div>
          

        <div>
        <h4 style={{fontWeight:"bold", marginBottom:'10px'}}>Follow us</h4> 
        <div style={{ display: 'flex', justifyContent: 'center' , cursor:'pointer'}}>
            <FaInstagram size={32}  style={{ marginRight: '15px' }} />
            <FaFacebook size={32} style={{ marginRight: '15px' }} />
            <FaTwitter size={32}  style={{ marginRight: '15px' }} />
            <FaYoutube size={32} />
        </div>
        </div>

        
      </div>

      <div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10
         text-center pt-2 text-gray-400 text-sm pb-8"
      >
        <span> Copyright @ SongWave. All rights reserved.</span>
        <span>Terms of Use · Privacy Policy</span>
       
      </div>
    </div>
  );
};

export default Footer;