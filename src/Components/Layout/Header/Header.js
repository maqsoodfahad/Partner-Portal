import {React, useState} from 'react'
import { useNavigate } from "react-router-dom";
import logo from '../../../assets/HomeAssets/assets/images/logo-header.png'

import { Link } from 'react-router-dom'
  const Header = () => { 
  return (
    <>  
      {/* header-wrap start*/}
      <header className="theme-container headerLogin ">
        <div className='loginlogo'>
          <Link><img src={logo} /></Link>
        </div>
      </header>  
        {/* header-wrap end*/} 
   </> 
  )
}

export default Header