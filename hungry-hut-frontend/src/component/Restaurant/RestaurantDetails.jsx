import { Divider, FormControl, FormControlLabel, Grid, Radio, RadioGroup, Typography } from '@mui/material'
import { useState } from 'react'
import LocationOnIcon from '@mui/icons-material/LocationOn';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import MenuCard from './MenuCard';

const foodTypes = [ {value: "all", label: "All"},
                    {value: "veg", label: "Veg"},
                    {value: "non-veg", label: "Non-Veg"},
                    {value: "seasonal", label: "Seasonal"},];

const categories = ["pizza", "burger", "indian", "dessert", "drinks"];

const menu = [1,1,1,1,1,1];

const RestaurantDetails = () => {

    const [foodType, setFoodType] = useState("all");

    const handleFilter=(e) => {
        setFoodType(e.target.value);
    }

  return (
    <div className='px-5 lg:px-20'>
        
        <section>

            <h3 className='text-gray-500 py-2 mt-10'>Home/india/indian fast food/3</h3>

            <div>
                <Grid container spacing={2}>
                    <Grid item xs={12} lg={12}>
                        <img src="https://images.pexels.com/photos/791810/pexels-photo-791810.jpeg" alt="" className='w-full h-[40vh] object-cover' />
                    </Grid>
                    <Grid item xs={12} lg={6}>
                        <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/1237073/pexels-photo-1237073.jpeg" alt=''  />
                    </Grid>
                    <Grid item xs={12} lg={6}  > 
                        <img className="w-full h-[40vh] object-cover" src="https://images.pexels.com/photos/903376/pexels-photo-903376.jpeg" alt="" />
                    </Grid>
                </Grid>
            </div>

            <div className='pt-3 pb-5'>

                <h1 className='text-4xl font-semibold'>The Big Chill Cakery</h1>

                <p className='text-gray-500 mt-1'>
                    <span>lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.</span>
                </p>

                <div className='space-y-3 mt-3'>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <LocationOnIcon/>
                        <span> 123, Baker Street, London, UK</span>
                    </p>
                    <p className='text-gray-500 flex items-center gap-3'>
                        <CalendarMonthIcon/>
                        <span> Mon-Sun: 9:00 AM - 9:00 PM (Open Now)</span>
                    </p>
                </div>
                
            </div>

        </section>

        <Divider/>

        <section className='pt-[2rem] lg:flex relative'>

            <div className=' space-y-10 lg:w-[20%] filter'>
                <div className='box space-y-5 lg:sticky top-28'>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}} >
                            Food Type
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType} >
                                {foodTypes.map((item) => (
                                    <FormControlLabel key={item.value} value={item.value} control={<Radio/>} label={item.label} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                    <Divider/>
                    <div>
                        <Typography variant='h5' sx={{paddingBottom:"1rem"}} >
                            Food Category
                        </Typography>
                        <FormControl className='py-10 space-y-5' component={"fieldset"}>
                            <RadioGroup onChange={handleFilter} name='food_type' value={foodType} >
                                {categories.map((item) => (
                                    <FormControlLabel key={item} value={item} control={<Radio/>} label={item} />
                                ))}
                            </RadioGroup>
                        </FormControl>
                    </div>
                </div>
            </div>

            <div className=' space-y-5 lg:w-[80%] lg:pl-10'>
                {menu.map((item) => <MenuCard/>)}
            </div>

        </section>

    </div>
  )
}

export default RestaurantDetails
