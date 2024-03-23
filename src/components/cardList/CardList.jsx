import React from 'react'
import Card from '../card/Card'
import styles from "./CardList.module.css"
const CardList = () => {
  return (
    <div className={`mx-auto min-h-screen lg:columns-4 md:columns-3 sm:columns-1 ${styles.cardlist}`}>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
        <Card/>
    </div>
  )
}

export default CardList