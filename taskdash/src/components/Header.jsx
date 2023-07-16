import React from 'react'
import Button from './Button'

const Header = ({ title }) => {
  return (
   <header className='header'>
    <h1>{title}</h1>
    <Button color='green' text='add' />
   </header>
  )
}

Header.defaultProps ={
    title: 'task dash'
}

export default Header 