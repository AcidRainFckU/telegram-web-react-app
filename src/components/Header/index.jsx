import React from 'react'
import Button from '../Button'

const tg = window.Telegram.WebApp;

const Header = (props) => {
 const onClose = () => {
    tg.close();
  };
  return (
    <div className='header'>
      <Button onClick={onClose}>Close</Button>
      <span className={'username'}>
        {tg.initDataunsafe?.user?.username}
      </span>
    </div>
  )
}

export default Header