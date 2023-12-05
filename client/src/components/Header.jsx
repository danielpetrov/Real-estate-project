import { Link } from 'react-router-dom'

export default function Header() {
    return (
        <>
            <header>
                <nav className="navigation">
                    <Link to='/'>Home</Link>
                    <Link to='/about'>About</Link>
                    <Link to='/login'>Вход</Link>
                    <Link to='/signup'>Регистрация</Link>
                    <Link to='/add-offer'>Добави обява</Link>
                </nav>
            </header>
        </>
    )
}