import React, { useState } from 'react' 
import './Header.css'
import {BiMenuAltRight} from 'react-icons/bi'
import OutsideClickHandler from 'react-outside-click-handler'

const Header = () => {

    const [menuOpened, setMenuOpened] = useState(false)
    const getMenuStyles = (menuOpened) => {
        if (document.documentElement.clientWidth <= 800){
            return {right: !menuOpened && "-100%"}
        }
    }

    return (
        <section className='h-wrapper'>
            <div className='flexCenter paddings innerWidth h-container'>

                <img src='./logo.png' alt='logo' width={100}/>

                <OutsideClickHandler onOutsideClick={()=> setMenuOpened(false)}>
                <div className='flexCenter h-menu' style={getMenuStyles(menuOpened)}>
                    <a href="C:\Users\tobos\Desktop\Projects\ReactJSWebsites\src\components\Residencies\Residencies.jsx">Residencies</a>
                    <a href="C:\Users\tobos\Desktop\Projects\ReactJSWebsites\src\components\Value\Value.jsx">Our values</a>
                    <a href="C:\Users\tobos\Desktop\Projects\ReactJSWebsites\src\components\Contact\Contact.jsx">Contact us</a>
                    <a href="C:\Users\tobos\Desktop\Projects\ReactJSWebsites\src\components\GetStarted\GetStarted.jsx">Get Started</a>
                    <button className='button'>
                        <a href="mailto:">Contact</a>
                    </button>
                </div>
                </OutsideClickHandler>

                <div className='menu-icon' onClick={()=>setMenuOpened((prev)=>!prev)}>
                <BiMenuAltRight size={30}/>
                </div>

            </div>
            
        </section>
    )
}

export default Header