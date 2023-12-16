import { Link } from 'react-router-dom'
import AuthContext from '../contexts/authContext'
import { useContext } from 'react'

export default function Header() {
    const {
        isAuthenticated,
        email
    } = useContext(AuthContext)
console.log(isAuthenticated, 'isAuthenticated')
    return (
        <>
            <header>
                <nav className="navigation">
                    <Link className="home-link nav-link" to='/'>Home</Link>
                    {isAuthenticated && (
                        <div id="user-navigation">
                            <Link className='my-offers nav-link' to='/myoffers'>Моите обяви</Link>
                            {/* <Link className="add-offer-link nav-link" to='/add-offer'>Добави обява</Link> */}
                            <Link className="logout nav-link" to='/logout'>Изход</Link>
                        </div>
                    )}
                    
                    {/* <Link to='/about'>About</Link> */}
                    {!isAuthenticated && (
                        <div id="guest-navigation">
                            <Link className="login-link nav-link" to='/login'>Вход</Link>
                            <Link className="signup-link nav-link" to='/signup'>Регистрация</Link>
                            <Link className="add-offer-link nav-link" to='/add-offer'>Добави обява</Link>
                        </div>
                    )}
                    {/* <Link className="login-link nav-link" to='/login'>Вход</Link>
                    <Link className="signup-link nav-link" to='/signup'>Регистрация</Link>
                    <Link className="add-offer-link nav-link" to='/add-offer'>Добави обява</Link> */}
                </nav>
            </header>
        </>
    )
}