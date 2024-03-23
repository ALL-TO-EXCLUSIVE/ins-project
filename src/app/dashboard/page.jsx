import React from 'react'
import Sidebar from '@/components/sidebar/Sidebar';
import Card from '@/components/card/Card';
import CardList from '@/components/cardList/CardList';

const dashboard = () => {
  return (
    <div className='bg-white min-h-screen w-full flex'>
      {/* <Sidebar/> */}
      <CardList/>
    </div>
  )
}

export default dashboard