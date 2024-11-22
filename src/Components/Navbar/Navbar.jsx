// import React, { useContext, useState, useRef } from 'react'
// import  './Navbar.css';
// import logo from '../Assets/Frontend_Assets/logo.png'
// import cart_icon from '../Assets/Frontend_Assets/cart_icon.png'
// import { Link } from 'react-router-dom';
// import { ShopContext } from '../../Context/ShopContext';
// import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png'

// const Navbar = () => {
//     const {getTotalCartItems} =useContext(ShopContext)

//     const [menu, setMenu]=useState("shop");
//     const menuRef=  useRef();

//     const drodown_toogle= (e) => {
//         menuRef.current.classList.toggle('nav-menu-visible');
//         e.target.classList.toggle('open');
//     }


//   return (
//     <div className='navbar'>
//         <div className='nav-logo'>
//             <img src={logo} alt="logo" />
//             <p>SHOPPER</p>
//         </div>
//         <img className='nav-dropdown' onClick={drodown_toogle} src={nav_dropdown} alt=""/>
//         <ul ref={menuRef} className='nav-menu'>
//             <li onClick={()=>{setMenu("shop")}}><Link style={{textDecoration: 'none'}} to='/'>Shop</Link>{menu==="shop"?<hr/>:<></>}</li>
//             <li onClick={()=>{setMenu("mens")}}><Link style={{textDecoration: 'none'}} to='/mens'>Men</Link>{menu==="mens"?<hr/>:<></>}</li>
//             <li onClick={()=>{setMenu("womens")}}><Link  style={{textDecoration: 'none'}} to='/womens'>Women</Link>{menu==="womens"?<hr/>:<></>}</li>
//             <li onClick={()=>{setMenu("kids")}}><Link style={{textDecoration: 'none'}} to='/kids'>kids</Link>{menu==="kids"?<hr/>:<></>}</li>
        
        
//         </ul>
//         <div className='nav-login-cart'>
//         {localStorage.getItem('auth-token')
//         ? <button onClick={()=>{localStorage.removeItem('auth-token);window.location.replace('/')}}>Logout</button>: 
//         <Link  to ='/login'><button>Login</button></Link>}
           
//            <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link> 
//             <div className='nav_cart-count'>{getTotalCartItems()}</div>
//         </div>
      
//     </div>
//   )
// }

// export default Navbar
import React, { useContext, useState, useRef } from 'react';
import './Navbar.css';
import logo from '../Assets/Frontend_Assets/logo.png';
import cart_icon from '../Assets/Frontend_Assets/cart_icon.png';
import { Link } from 'react-router-dom';
import { ShopContext } from '../../Context/ShopContext';
import nav_dropdown from '../Assets/Frontend_Assets/nav_dropdown.png';

const Navbar = () => {
    const { getTotalCartItems } = useContext(ShopContext);
    const [menu, setMenu] = useState("shop");
    const menuRef = useRef();

    const dropdown_toggle = (e) => {
        menuRef.current.classList.toggle('nav-menu-visible');
        e.target.classList.toggle('open');
    }

    const handleLogout = () => {
        localStorage.removeItem('auth-token');
        window.location.replace('/');
    }

    return (
        <div className='navbar'>
            <div className='nav-logo'>
                <img src={logo} alt="logo" />
                <p>SHOPPER</p>
            </div>
            <img className='nav-dropdown' onClick={dropdown_toggle} src={nav_dropdown} alt="dropdown" />
            <ul ref={menuRef} className='nav-menu'>
                <li onClick={() => setMenu("shop")}><Link style={{ textDecoration: 'none' }} to='/'>Shop</Link>{menu === "shop" ? <hr /> : null}</li>
                <li onClick={() => setMenu("mens")}><Link style={{ textDecoration: 'none' }} to='/mens'>Men</Link>{menu === "mens" ? <hr /> : null}</li>
                <li onClick={() => setMenu("womens")}><Link style={{ textDecoration: 'none' }} to='/womens'>Women</Link>{menu === "womens" ? <hr /> : null}</li>
                <li onClick={() => setMenu("kids")}><Link style={{ textDecoration: 'none' }} to='/kids'>Kids</Link>{menu === "kids" ? <hr /> : null}</li>
            </ul>
            <div className='nav-login-cart'>
                {localStorage.getItem('auth-token')
                    ? <button onClick={handleLogout}>Logout</button>
                    : <Link to='/login'><button>Login</button></Link>
                }
                <Link to='/cart'><img src={cart_icon} alt="cart_icon" /></Link>
                <div className='nav_cart-count'>{getTotalCartItems()}</div>
            </div>
        </div>
    );
}

export default Navbar;