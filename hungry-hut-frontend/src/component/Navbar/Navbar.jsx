import React from 'react'
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Badge, IconButton } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Person } from '@mui/icons-material';
import { useNavigate } from 'react-router-dom';

const Navbar = () => {

    const navigate = useNavigate();

  return (
    <div className='px-5 sticky z-50 top-0 py-[.8rem] bg-[#b80742] lg:px-20 flex justify-between'>

        <div className='lg:mr-10 cursor-pointer flex items-center space-x-4'>
            <li className='logo font-semibold italic text-gray-100 text-2xl list-none'>Hungry Hut</li>
        </div>

        <div className='flex items-center space-x-2 lg:space-x-10'>

            <div className=''>
                <IconButton>
                    <SearchIcon sx={{fontSize:"1.5rem"}}/>
                </IconButton>
            </div>

            <div className=''>
                {false?
                    <Avatar sx={{ bgcolor: "white", color: "#b80742" }}>C</Avatar> :
                    <IconButton onClick={() => navigate("/account/login")}>
                        <Person />
                    </IconButton>    
                }
            </div>
            
            <div>
                <IconButton>
                    <Badge color="secondary" badgeContent={4}>
                        <ShoppingCartIcon sx={{fontSize:"1.5rem"}}/>
                    </Badge>
                </IconButton>
            </div>

        </div>

    </div>
  )
}

export default Navbar
