import { Link } from 'react-router-dom'
import AuthContext from '../contexts/authContext'
import { useContext } from 'react'

export default function Header() {
    const {
        isAutenticated,
        email
    } = useContext(AuthContext)

    return (
        <>
            <header>
                <nav className="navigation">
                    <Link className="home-link nav-link" to='/'>Home</Link>
                    {isAutenticated && (
                        <div id="user-navigation">
                            <Link className="add-offer-link nav-link" to='/add-offer'>Добави обява</Link>
                        </div>
                    )}
                    
                    {/* <Link to='/about'>About</Link> */}
                    {!isAutenticated && (
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