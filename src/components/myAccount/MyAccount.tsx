// import "./myAccount.scss";
import * as React from 'react';
import Popover from '@mui/material/Popover';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Backdrop from '@mui/material/Backdrop';
import { useLocation, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { Navbar } from "@/components/Navbar";


const backdropVariant = {
  hidden: {
    opacity: 0,
    y: "-100vh"
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 1.5,
      type: "spring",
      stiffness: 400
    }
  }
}



export function MyAccount() {

  const [backdrop, setBackdrop] = React.useState(false);
  const [anchorEl, setAnchorEl] = React.useState<HTMLButtonElement | null>(null);

  const handleClick = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const open = Boolean(anchorEl);
  const id = open ? 'simple-popover' : undefined;

  const handleBackdropClose = () => {
    setBackdrop(false);
  };
  const handleBackdropOpen = () => {
    setBackdrop(true);
  };

  const navigate = useNavigate();

  // const location = useLocation();
  // const { name, email } = location.state || {};

  return (
    <div>
      <Navbar />
      <div className="container bg-white rounded-lg pt-10 pb-40 w-1/2 items-start my-[3.125rem]">
        <h2 className="font-semibold mb-5">My Account</h2>
        <div className="mb-8 flex items-center gap-x-8 justify-between w-full">
          <div className="flex flex-col w-full">
            <label htmlFor="fullname" className='mb-2'>Name</label>
            <input type="text" name="fullname" className="border rounded-md h-10 w-full" />
          </div>
          <div className="flex flex-col w-full">
            <label htmlFor="name" className='mb-2'>Email</label>
            <input type="text" name="email" className="border rounded-md h-10 w-full" />
          </div>
        </div>
        <div className="mb-14">
          <h3 className="mb-2">Password</h3>
          <button className="bg-primary100 px-3 py-2 gap-x-4 rounded-md text-white flex items-center" onClick={handleBackdropOpen}>
            <img src="/padlock.svg" alt="" />
            Change Password
          </button>
        </div>
        <div className="mb-12">
          <h3 className="font-medium text-primary60 mb-5">My Organizations</h3>
          <div className="flex items-center justify-between bg-deepgray py-4 px-4 rounded-md mb-3">
            <h6>Emmy`s Team</h6>
            <div className='flex items-center gap-x-5'>
            <button onClick={handleClick} className="bg-black rounded-lg px-4 py-2 text-white">View</button>
              <button><img src="/3dots.svg" alt="" /></button>
            </div>
          </div>
          <div className="flex items-center justify-between bg-deepgray py-4 px-4 rounded-md">
            <h6>Odejimi Samuel’s Team</h6>
            <div className='flex items-center gap-x-5 relative'>
              <button className="bg-black rounded-lg px-4 py-2 text-white">View</button>
              <button className="cursor-pointer"><img src="/3dots.svg" alt="" /></button>
              <ul className='absolute top-10 left-0 p-3 text-xs bg-white'>
                  <li>Settings</li>
                  <li>Leave Organization</li>    
              </ul>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-between">
          <button className="flex items-center gap-x-3 py-2 px-4 rounded-lg bg-lightpink">
            <img src="/bucket.svg" alt="" className="h-5 w-5" />
            <span>Delete Account</span>
          </button>
          <button className="bg-primary100 text-white px-6 py-2 rounded-lg">Save changes</button>
        </div>
      </div>

      <div className="backdrop">
        <Backdrop
          sx={{ color: '#fff', backgroundColor: "#00000033", backdropFilter: 'blur(2px)', zIndex: (theme) => theme.zIndex.drawer + 1 }}
          open={backdrop}
        >
          <motion.div className="content"
            variants={backdropVariant}
            initial="hidden"
            animate="visible"
          >
            <div className="topHeader">
              <h2>Change Password</h2>
              <i className="fa-solid fa-xmark" onClick={handleBackdropClose}></i>
            </div>
            <form action="">
              <div className="center">
                <div className="psw">
                  <label htmlFor="psw">Current Password</label>
                  <input type="password" name="psw" placeholder="***************" />
                </div>
                <div className="newPsw">
                  <label htmlFor="new">Current Password</label>
                  <input type="password" name="new" placeholder="***************" />
                </div>
                <div className="confirmPsw">
                  <label htmlFor="confirm">Current Password</label>
                  <input type="password" name="confirm" placeholder="***************" />
                </div>
              </div>

              <div className="bottom">
                <button type="button" onClick={handleBackdropClose}>Cancel</button>
                <button>Change Password</button>
              </div>
            </form>
          </motion.div>
        </Backdrop>
      </div>
    </div>
  );
};