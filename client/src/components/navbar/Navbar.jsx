import React from 'react'
import classes from './navbar.module.css'
import { Link } from 'react-router-dom'
import womanImg from '../../assets/woman.jpg'
import { useState } from 'react'

const Navbar = () => {
  const [showModal, setShowModal] = useState(false)

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.left}>
          <Link to='/'>SNAPTALES📝 </Link>
        </div>
        <ul className={classes.center}>
          <li className={classes.listItem}><Link to='/'>HOME</Link></li>
          <li className={classes.listItem}>ABOUT</li>
          <li className={classes.listItem}>CONTACTS</li>
          <li className={classes.listItem}>CATEGORIES</li>
        </ul>
        <div className={classes.right}>
          <img onClick={() => setShowModal(prev => !prev)} src={womanImg} className={classes.img} />
          {showModal &&
            <div className={classes.modal}>
              <Link to='/create'>Create</Link>
              <span><Link to= '/login'>Logout</Link></span>
            
            </div>
          }
        </div>
      </div>
    </div>
  )
}

export default Navbar