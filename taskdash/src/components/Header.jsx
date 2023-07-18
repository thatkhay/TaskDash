import React from 'react'
import Button from './Button'

const Header = ({ title , onAdd, showAdd }) => {

 

  return (
   <header className='header'>
    <h1>{title}</h1>
    <Button   color={showAdd ? 'red' : 'black' } text={showAdd ? 'close' : 'add' } onClick={onAdd} />
   </header>
  )
}

Header.defaultProps ={
    title: 'task dash'
}

export default Header 