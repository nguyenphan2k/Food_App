import React, { useState } from 'react'
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import SearchOutlinedIcon from '@mui/icons-material/SearchOutlined';
import AddShoppingCartOutlinedIcon from '@mui/icons-material/AddShoppingCartOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import LocalShippingOutlinedIcon from '@mui/icons-material/LocalShippingOutlined';
import FavoriteOutlinedIcon from '@mui/icons-material/FavoriteOutlined';
import WalletOutlinedIcon from '@mui/icons-material/WalletOutlined';
import HelpOutlineOutlinedIcon from '@mui/icons-material/HelpOutlineOutlined';
import AttachMoneyOutlinedIcon from '@mui/icons-material/AttachMoneyOutlined';
import TrendingDownOutlinedIcon from '@mui/icons-material/TrendingDownOutlined';
import GroupAddOutlinedIcon from '@mui/icons-material/GroupAddOutlined';

const Navbar = () => {
     const [nav, setNav] = useState(false)
     return (
          <div className='max-w-[1640px] mx-auto flex justify-between items-center p-4'>
               <div className='flex items-center'>
                    <div className='cursor-pointer'
                         onClick={() => setNav(!nav)}
                    >
                         <AppsOutlinedIcon fontSize='200px' />
                    </div>
                    <h1 className='text-2xl sm:text-3xl lg:text-4xl px-2'>
                         Best<span className='font-bold'>Eats</span>
                    </h1>
                    <div className='lg:flex hidden items-center bg-gray-200 rounded-full 
                    p-1 text-[14px]'>
                         <p className='text-white bg-black rounded-full p-2'>Delivery</p>
                         <p className='p-2'>Pickup</p>
                    </div>
               </div>
               <div className='bg-gray-200 rounded-full flex items-center px-2 w-[200px]
               sm:w-[400px] lg:w-[500px]'>
                    <SearchOutlinedIcon fontSize='25px' />
                    <input
                         type="text"
                         placeholder='Search foods...'
                         className='bg-transparent p-2 outline-none w-full'
                    />
               </div>
               <button className='items-center text-white bg-black hidden 
               md:flex py-2 rounded-full'>
                    <AddShoppingCartOutlinedIcon fontSize='25px' className='mr-2' />
                    Cart
               </button>

               {nav ? <div className='bg-black/80 fixed w-full h-screen z-10 
               top-0 left-0'></div> : ''}

               <div className={nav ? 'fixed top-0 left-0 w-[300px] h-screen z-10 bg-white duration-300' 
               : 'fixed top-0 left-[100%] w-[300px] h-screen z-10 bg-white duration-300'}>
                    <CloseOutlinedIcon
                    onClick={() => setNav(!nav)}
                         fontSize='30px'
                         className='text-black absolute top-4 right-4 cursor-pointer'
                    />
                    <h2 className='text-2xl p-4'>
                         Best<span className='font-bold'>Eats</span>
                    </h2>
                    <nav>
                         <ul className='flex flex-col p-4 text-gray-800'>
                              <li className='text-xl py-4 flex'>
                                   <LocalShippingOutlinedIcon
                                        fontSize='25px'
                                        className='mr-4'
                                   />Orders
                              </li>
                              <li className='text-xl py-4 flex'>
                                   <FavoriteOutlinedIcon
                                        fontSize='25px'
                                        className='mr-4'
                                   />Favorites
                              </li>
                              <li className='text-xl py-4 flex'>
                                   <WalletOutlinedIcon
                                        fontSize='25px'
                                        className='mr-4'
                                   />Wallet
                              </li>
                              <li className='text-xl py-4 flex'>
                                   <HelpOutlineOutlinedIcon
                                        fontSize='25px'
                                        className='mr-4'
                                   />Help
                              </li>
                              <li className='text-xl py-4 flex'>
                                   <TrendingDownOutlinedIcon
                                        fontSize='25px'
                                        className='mr-4'
                                   />Promotions
                              </li>
                              <li className='text-xl py-4 flex'>
                                   <AttachMoneyOutlinedIcon
                                        fontSize='25px'
                                        className='mr-4'
                                   />Best Ones
                              </li>
                              <li className='text-xl py-4 flex'>
                                   <GroupAddOutlinedIcon
                                        fontSize='25px'
                                        className='mr-4'
                                   />Invite Friends
                              </li>
                         </ul>
                    </nav>
               </div>
          </div>
     )
}

export default Navbar