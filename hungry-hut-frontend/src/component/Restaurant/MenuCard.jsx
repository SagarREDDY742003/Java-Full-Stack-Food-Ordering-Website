import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import React from 'react'
import { Button, Checkbox, FormControlLabel, FormGroup } from '@mui/material';

const demo = [
    {
        category:"Nuts & Seeds",
        ingredients:["Cashews","Walnuts","Pistachios","Chia Seeds","Sunflower Seeds"]
    },
    {
        category:"Vegetables", 
        ingredients:["Onion","Broccoli","Bell Peppers","Tomatoes"]
    },
    {
        category:"Spices & Herbs",
        ingredients:["Basil","Oregano","Thyme","Rosemary","Cilantro","Parsley","Cumin"]
    },
    {
        category:"Proteins",
        ingredients:["Chicken Breast","Tofu","Lentils","Chickpeas","Black Beans","Eggs","Greek Yogurt"]
    },
    {
        category:"Sauces",
        ingredients:["Tomato Sauce","Pesto","Soy Sauce","Hot Sauce"]
    }
]

const MenuCard = () => {

    const handleCheckBoxChange = (ingredient) => {
        console.log(ingredient);
    }
    
  return (
    <div>
        <Accordion>
            <AccordionSummary expandIcon={<ExpandMoreIcon />} aria-controls="panel1-content" id="panel1-header">
                <div className='lg:flex items-center justify-between'>
                    <div className='lg:flex items-center lg:gap-5'>
                        <img className='w-[7rem] h-[7rem] object-cover rounded-lg' src='https://images.pexels.com/photos/699953/pexels-photo-699953.jpeg' alt='' />
                    </div>
                    <div className='space-y-1 lg:pl-4 lg:max-w-2xl'>
                        <p className='font-semibold text-xl'>Pizza</p>
                        <p>₹499</p>
                        <p className='text-gray-400'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
                            malesuada lacus ex, sit amet blandit leo lobortis eget.</p>
                    </div>
                </div>
            </AccordionSummary>
            <AccordionDetails>
                <form>
                    <div className='flex gap-5 flex-wrap'>
                        {
                            demo.map((item) => 
                                <div>
                                    <p>{item.category}</p>
                                    <FormGroup>
                                        {item.ingredients.map((ingredient) =>
                                            <FormControlLabel control={<Checkbox onChange={() => handleCheckBoxChange(ingredient)}/>} label={ingredient}/>
                                        )}
                                    </FormGroup>
                                </div>
                            )
                        }
                    </div>
                    <div>
                        <Button variant='contained' disabled={false} type='submit' className='pt-5'>
                            {true?"Add to Cart":"Out of Stock"}
                        </Button>
                    </div>
                    
                </form>
                
            </AccordionDetails>
      </Accordion>
    </div>
  )
}

export default MenuCard
