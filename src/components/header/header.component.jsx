import React from 'react'
// import { Link } from 'react-router-dom'
import { auth } from '../../firebase/firebase.utils'
import { connect } from 'react-redux';
import { ReactComponent as Logo } from '../../assets/crwns.svg'
import CartIcon from './../cart-icon/cart-icon.component'
import Cartdropdown from './../cart-dropdown/cart-dropdown.component';
// import { ReactComponent as Logo }
// This is a new special syntax when importing SVG in React. 
// The ReactComponent import name is special and tells Create React App 
// that you want a React component that renders an SVG, rather than its filename. 
// You can read more about it here, but keep in mind that this is a 
// React library special syntax:

// https://facebook.github.io/create-react-app/docs/adding-images-fonts-and-files
// import './header.styles.scss'

import { createStructuredSelector } from "reselect"
import { selectCartHidden } from '../../redux/cart/cart.selector';
import { selectCurentUser } from '../../redux/user/user.selector';
import { HeaderContainer, LogoContainer, OptionsContainer, OptionLink } from './header.styles';





const Header = ({ currentUser, hidden }) => (
    <HeaderContainer>
        <LogoContainer to='/'>
            <Logo />
        </LogoContainer>
        <OptionsContainer>

            <OptionLink to='/shop'>SHOP</OptionLink>
            <OptionLink to='/shop'>CONTACT</OptionLink>
            {
                currentUser ?
                    <OptionLink as='div' onClick={() => auth.signOut()}>SIGN OUT</OptionLink> :
                    <OptionLink to='/sign-in-and-signup'>SIGN IN</OptionLink>
            }
            <CartIcon />
        </OptionsContainer>
        {
            hidden ?
                null : <Cartdropdown />

        }


    </HeaderContainer>
)

// const mapStateToProps=(state)=>(
//     {
//         currentUser:state.user.currentUser,
//         cart:state.cart.cartReducer
//     }
// )

// const mapStateToProps = ({ user: { currentUser }, cart: { hidden } }) => ({
//     currentUser,
//     hidden
// })

const mapStateToProps = createStructuredSelector(
    {
        currentUser: selectCurentUser,
        hidden: selectCartHidden
    }
)

export default connect(mapStateToProps, null)(Header);