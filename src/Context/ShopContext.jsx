// import React, { useState, useEffect, createContext } from 'react';

// // import all_product from '../Components/Assets/Frontend_Assets/all_product';

// export const ShopContext = createContext(null);

// const getDefaultCart = () => {
//     let cart = {};
//     for (let index = 0; index < 300+1; index++) {
//         cart[index] = 0;
//     }
//     return cart;
// };

// const ShopContextProvider = (props) => {

//     const [all_product,setAll_Product] = useState([]);
//     const [cartItems, setCartItems] = useState(getDefaultCart());

//     useEffect(()=>{
//         fetch('https://shopping-yc6u.onrender.com/allproducts')
//         .then((response)=>response.json())
//         .then((data)=>setAll_Product(data))

//         if(localStorage.getItem('auth-token')) {
//             fetch('https://shopping-yc6u.onrender.com/getcart', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/formData,',
//                     'auth-token': `${localStorage.getItem('auth-token')}`,
//                     'Content-Type': 'application/json',
//                 },
//                 body: "",
//             }).then((response) => response.json())
//             .then((data) =>setCartItems(data))
//         }
        
//     },[])

//     const addToCart = (itemId) => {
//         setCartItems((prev) => ({
//             ...prev,
//             [itemId]: prev[itemId] + 1,  // Use [itemId] instead of itemId
//         }));
//         // Log the cart items after updating
//         if(localStorage.getItem('auth-token')) {
//             fetch('https://shopping-yc6u.onrender.com/addtocart', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/formData,',
//                     'auth-token': `${localStorage.getItem('auth-token')}`,
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     "itemId": itemId
//                 })
//             }).then((response) => response.json())
//             .then((data) => console.log(data));
//         }
        
//     };

//     const removeFromCart = (itemId) => {
//         setCartItems((prev) => ({
//             ...prev,
//             [itemId]: prev[itemId] - 1,  // Use [itemId] instead of itemId
//         }));
//         if(localStorage.getItem('auth-token')) {
//             fetch('https://shopping-yc6u.onrender.com/removefromcart', {
//                 method: 'POST',
//                 headers: {
//                     'Accept': 'application/formData,',
//                     'auth-token': `${localStorage.getItem('auth-token')}`,
//                     'Content-Type': 'application/json',
//                 },
//                 body: JSON.stringify({
//                     "itemId": itemId
//                 })
//             }).then((response) => response.json())
//             .then((data) => console.log(data));
//         }

//     };

//     const getTotalCartAmount = () => {
//         let totalAmount = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
//                 let itemInfo = all_product.find((product) => 
//                     product.id === Number(item)
//                 );
//                 if (itemInfo) {
//                     totalAmount += itemInfo.new_price * cartItems[item];
//                 }
//             }
//         }
//         return totalAmount;
//     };

//     const getTotalCartItems = () => {
//         let totalItems = 0;
//         for (const item in cartItems) {
//             if (cartItems[item] > 0) {
                
//                     totalItems += cartItems[item];
                
//             }
//         }
//         return totalItems;
//     };



//     const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount ,getTotalCartItems};

//     return (
//         <ShopContext.Provider value={contextValue}>
//             {props.children}
//         </ShopContext.Provider>
//     );
// };

// export default ShopContextProvider;
import React, { useState, useEffect, createContext } from 'react';

export const ShopContext = createContext(null);

const getDefaultCart = () => {
    let cart = {};
    for (let index = 0; index <= 300; index++) {
        cart[index] = 0;
    }
    return cart;
};

const ShopContextProvider = (props) => {
    const [all_product, setAll_Product] = useState([]);
    const [cartItems, setCartItems] = useState(getDefaultCart());

    useEffect(() => {
        fetch('https://shopping-yc6u.onrender.com/allproducts')
        .then((response) => response.json())
        .then((data) => setAll_Product(data));
    
        if (localStorage.getItem('auth-token')) {
            fetch('https://shopping-yc6u.onrender.com/getcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/formData',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: "",
            }).then((response) => response.json())
            .then((data) => {
                if (data) {
                    setCartItems(data);
                }
            });
        }
    }, []);
    

    const addToCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] + 1,
        }));
        if (localStorage.getItem('auth-token')) {
            fetch('https://shopping-yc6u.onrender.com/addtocart', {
                method: 'POST',
                headers: {
                    Accept: 'application/formData',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemId": itemId }),
            }).then((response) => response.json())
                .then((data) => console.log(data));
        }
    };

    const removeFromCart = (itemId) => {
        setCartItems((prev) => ({
            ...prev,
            [itemId]: prev[itemId] - 1,
        }));
        if (localStorage.getItem('auth-token')) {
            fetch('https://shopping-yc6u.onrender.com/removefromcart', {
                method: 'POST',
                headers: {
                    Accept: 'application/formData',
                    'auth-token': `${localStorage.getItem('auth-token')}`,
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({"itemId": itemId }),
            }).then((response) => response.json())
                .then((data) => console.log(data));
        }
    };

    const getTotalCartAmount = () => {
        let totalAmount = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                let itemInfo = all_product.find((product) => product.id === Number(item));
                if (itemInfo) {
                    totalAmount += itemInfo.new_price * cartItems[item];
                }
            }
        }
        return totalAmount;
    };

    const getTotalCartItems = () => {
        let totalItems = 0;
        for (const item in cartItems) {
            if (cartItems[item] > 0) {
                totalItems += cartItems[item];
            }
        }
        return totalItems;
    };

    const contextValue = { all_product, cartItems, addToCart, removeFromCart, getTotalCartAmount, getTotalCartItems };

    return (
        <ShopContext.Provider value={contextValue}>
            {props.children}
        </ShopContext.Provider>
    );
};

export default ShopContextProvider;
