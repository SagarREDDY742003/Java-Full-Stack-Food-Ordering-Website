import { Card, Chip, IconButton } from '@mui/material'
import React from 'react'
import FavoriteIcon from '@mui/icons-material/Favorite';
import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';

const RestaurantCard = () => {
  return (
    <Card className='w-[18rem]'>

        <div className={`${true?'cursor-pointer':'cursor-not-allowed'} relative`}>
            <img 
                src="https://images.pexels.com/photos/460537/pexels-photo-460537.jpeg"
                alt="restaurant" 
                className='w-full h-[10rem] object-cover rounded-t-md' 
            />

            <Chip 
                size='small' 
                className='absolute top-2 left-2' 
                color={true?"success":"error"}
                label={true?"OPEN":"CLOSED"}
            />
        </div>

        <div className='p-4 textPart lg:flex w-full justify-between'>
            <div className='space-y-1'>
                <p className='font-semibold text-lg'>Indian Fast Food</p>
                <p className='text-gray-500 text-sm'>Craving it all? Dive into our global...</p>
            </div>
            <div>
                <IconButton>
                    {true?<FavoriteIcon color='red'/>:<FavoriteBorderIcon />}
                </IconButton>
            </div>
        </div>

    </Card>
  )
}

export default RestaurantCard
