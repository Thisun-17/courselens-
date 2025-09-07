import { Button } from '@/components/ui/button'
import React from 'react'

function Header() {
  return (
    <div className='flex justify-between items-center p-5 bg-gray-100'>
        <h1>Header</h1> 
        <Button>Get Started</Button>
    </div>
  )
}

export default Header 