import React, { useState, useEffect } from "react";
import notifaction from '../../../assets/HomeAssets/assets/images/SideBar/notifaction.png';
import gethelp from '../../../assets/HomeAssets/assets/images/SideBar/gethelp.png';
import menu from '../../../assets/HomeAssets/assets/images/menu.svg';
import close from '../../../assets/HomeAssets/assets/images/close.svg';
import closeModalImg from '../../../assets/HomeAssets/assets/images/icon/close.png';
import { Link } from 'react-router-dom';

const DashboardHeader = () => {
  const [showMenu, setShowMenu] = useState(false);

  const toggleMenu = () => {
    setShowMenu(!showMenu);
  };

  useEffect(() => {
    if (showMenu) {
      document.body.classList.add('menu-open');
    } else {
      document.body.classList.remove('menu-open');
    }
  }, [showMenu]);


  // createmodal openModal
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
      setIsOpen(true);
    };

    const closeModal = () => {
      setIsOpen(false);
    };


  return (
    <>
      <div className="DashboardHeader d-flex align-items-center justify-content-between">
        <div className="btn_create">
          <button className="themebtn-blue w-216" onClick={openModal}>Create link</button>
        </div>
        <div className="right_icon">
          <ul className="d-flex">
            <li>
              <Link className="NavIcon">
                <img src={gethelp} alt="gethelp" />
              </Link>
            </li>
            <li>
              <Link className="NavIcon">
                <img src={notifaction} alt="notifaction" />
              </Link>
            </li>
            <li className="menu_icon" onClick={toggleMenu}>
              <Link className="NavIcon">
                {showMenu ? (
                  <img src={close} alt="close" />
                ) : (
                  <img src={menu} alt="menu" />
                )}
              </Link>
            </li>
          </ul>
        </div>
      </div>


      <div className="creat-modal " > 
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal-content input-box">
          <button onClick={closeModal} className="close-icon">< img src={closeModalImg}/></button>
            <h2 className="f24 text-white text-left ">Create Link</h2>
            <div className="input-box-field form-floating mt-32">
                <input type="text"  className="form-control login-form-control"  id="LinkTitle" placeholder="First name"  autocomplete="off" />
                <label for="LinkTitle">Link Title</label> 
            </div> 
            <div className="input-box-field form-floating ">
              <input type="text"  className="form-control login-form-control"  id="Description" placeholder="Username"  autocomplete="off" />
              <label for="Description">Description</label> 
            </div> 
            
            <div className='form-btn d-flex mt-64'>
              <button type="button" className="themebtn-dark w-100 h-56 mr-16">  Cancel </button> 
              <button type="button" className="themebtn-blue w-100 text_blue  h-56 ">  Create link </button> 
           </div> 
         
          </div>
        </div>
      )}
    </div>

    </>
  );
};

export default DashboardHeader;
