import { Button, Card } from '@mui/material'
import React from 'react'

const OrderCard = () => {
  return (
    <Card className='flex justify-between items-center p-5 sm:mx-4'>
        <div className='flex items-center space-x-5'>
            <img className='w-16 h-16' src="https://thvnext.bing.com/th/id/OIP.kjXliNp6y5Bjlmo4stafCAHaHa?w=129&h=104&c=7&bgcl=78f41a&r=0&o=6&dpr=2&pid=13.1&ucfimg=1" alt="food" />
            <div>
                <p>Pizza</p>
                <p>$ 222</p>
            </div>
        </div>
        <div>
            <Button className='cursor-not-allowed'>completed</Button>
        </div>
    </Card>
  )
}

export default OrderCard
