// // // import React from 'react'
// // // import './Footer.css'
// // // import footer_logo from '../Assets/Frontend_Assets/logo_big.png'
// // // import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png'
// // // import pintester_icon from '../Assets/Frontend_Assets/pintester_icon.png';
// // // import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png';

// // // const Footer = () => {
// // //   return (
// // //     <div className='footer'>
// // //         <div className='footer-logo'>
// // //             <img src={footer_logo} alt=''/>
// // //             <p>SHOPPER</p>
// // //         </div>
// // //         <ul className='footer-links'>
// // //             <li>Company</li>
// // //             <li>Products</li>
// // //             <li>Offices</li>
// // //             <li>About</li>
// // //             <li>Contact</li>
// // //         </ul>
// // //         <div className='footer-social-icons'>
// // //             <div className='footer-icon-container'>
// // //                 <img src={instagram_icon} alt=''/>
// // //             </div>
// // //             <div className='footer-icon-container'>
// // //                 <img src={pintester_icon} alt=''/>
// // //             </div>
// // //             <div className='footer-icon-container'>
// // //                 <img src={whatsapp_icon} alt=''/>
// // //             </div>
            
            
// // //         </div>
// // //         <div className='footer-copyright'>
// // //         <hr/>
// // //         <p>Copyright @ 2024 - All Rights Reserved.</p>
// // //         </div>
    
// // //     </div>
// // //   )
// // // }

// // // export default Footer


import React, { useEffect } from 'react';
import './Footer.css';
import footer_logo from '../Assets/Frontend_Assets/logo_big.png';
import instagram_icon from '../Assets/Frontend_Assets/instagram_icon.png';
import pintester_icon from '../Assets/Frontend_Assets/pintester_icon.png';
import whatsapp_icon from '../Assets/Frontend_Assets/whatsapp_icon.png';

const Footer = () => {
  useEffect(() => {
    const script = document.createElement('script');
    script.src = 'https://cdn.jsdelivr.net/npm/particles.js@2.0.0/particles.min.js';
    script.async = true;
    script.onload = () => {
      if (window.particlesJS) {
        window.particlesJS('particles-js', {
          "particles": {
            "number": {
              "value": 33,
              "density": {
                "enable": true,
                "value_area": 1420.4657549380909
              }
            },
            "color": {
              "value": "#ffffff"
            },
            "shape": {
              "type": "triangle",
              "stroke": {
                "width": 0,
                "color": "#000000"
              },
              "polygon": {
                "nb_sides": 5
              },
              "image": {
                "src": "img/github.svg",
                "width": 100,
                "height": 100
              }
            },
            "opacity": {
              "value": 0.06313181133058181,
              "random": false,
              "anim": {
                "enable": false,
                "speed": 1,
                "opacity_min": 0.1,
                "sync": false
              }
            },
            "size": {
              "value": 11.83721462448409,
              "random": true,
              "anim": {
                "enable": false,
                "speed": 40,
                "size_min": 0.1,
                "sync": false
              }
            },
            "line_linked": {
              "enable": true,
              "distance": 150,
              "color": "#ffffff",
              "opacity": 0.4,
              "width": 1
            },
            "move": {
              "enable": true,
              "speed": 6,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "bounce": false,
              "attract": {
                "enable": false,
                "rotateX": 600,
                "rotateY": 1200
              }
            }
          },
          "interactivity": {
            "detect_on": "canvas",
            "events": {
              "onhover": {
                "enable": true,
                "mode": "repulse"
              },
              "onclick": {
                "enable": true,
                "mode": "push"
              },
              "resize": true
            },
            "modes": {
              "grab": {
                "distance": 400,
                "line_linked": {
                  "opacity": 1
                }
              },
              "bubble": {
                "distance": 400,
                "size": 40,
                "duration": 2,
                "opacity": 8,
                "speed": 3
              },
              "repulse": {
                "distance": 200,
                "duration": 0.4
              },
              "push": {
                "particles_nb": 4
              },
              "remove": {
                "particles_nb": 2
              }
            }
          },
          "retina_detect": true
        });
      }
    };
    script.onerror = () => {
      console.error('Error loading particles.js');
    };
    document.body.appendChild(script);

    // Cleanup script when component unmounts
    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <div className='footer'>
      <div id="particles-js"></div>
      <div className='footer-content'>
        <div className='footer-logo'>
          <img src={footer_logo} alt=''/>
          <p>SHOPPER</p>
        </div>
        <ul className='footer-links'>
          <li>Company</li>
          <li>Products</li>
          <li>Offices</li>
          <li>About</li>
          <li>Contact</li>
        </ul>
        <div className='footer-social-icons'>
          <div className='footer-icon-container'>
            <img src={instagram_icon} alt=''/>
          </div>
          <div className='footer-icon-container'>
            <img src={pintester_icon} alt=''/>
          </div>
          <div className='footer-icon-container'>
            <img src={whatsapp_icon} alt=''/>
          </div>
        </div>
        <div className='footer-copyright'>
          <hr/>
          <p>Copyright @ 2024 - All Rights Reserved.</p>
        </div>
      </div>
    </div>
  );
}

export default Footer;


