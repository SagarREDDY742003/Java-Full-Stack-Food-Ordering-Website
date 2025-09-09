import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Navbar = () => {

    const {auth,cart} = useSelector(store=>store);

    const navigate = useNavigate();

    const handleAvatarClick=()=>{
        if(auth.user?.role==="ROLE_CUSTOMER"){
            navigate("/my-profile")
        }
        else{
            navigate("/admin/restaurant")
        }
    }

  return (
    <div className='px-5 sticky z-50 top-0 py-[.8rem] bg-[#b80742] lg:px-20 flex justify-between'>

        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4' >
            <li className='logo font-semibold italic text-gray-100 text-2xl list-none' onClick={()=>navigate("/")}>Hungry Hut</li>
        </div>

        <div className='flex items-center space-x-2 lg:space-x-10'>

            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
            </div>

            <div className=''>
                {auth.user?
                    <Avatar onClick={handleAvatarClick} sx={{ bgcolor: "white", color: "#b80742" }}>{auth.user.fullName[0].toUpperCase()}</Avatar> :
                    <IconButton onClick={() => navigate("/account/login")}>
                        <Person />
                    </IconButton>    
                }
            </div>
            
            <div>
                <IconButton onClick={() => navigate("/cart")}>
                    <Badge color="secondary" badgeContent={cart.cartItems.length}>
                        <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                    </Badge>
                </IconButton>
            </div>

        </div>

    </div>
  )
}

export default Navbar
