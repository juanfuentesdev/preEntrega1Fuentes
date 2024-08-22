import logo from '../../assets/ktienda.png';
import CartWidget from '../CartWidget';
import ItemList from '../ItemList';

const Navbar = () => {

    return(
        <header className="header">
            <nav className="navbar">
            <figure className="navbar__logo">
                <img className='logoimg' src={logo} alt="" />
            </figure>
            <menu className="navbar__menu">
                <ItemList label="Comprar" />
                <ItemList label="Contacto" />
                <ItemList label="Login" />

                    <li><a href="" className='navbar__link'><CartWidget quantity={4}/>
                    </a>
                </li>
            </menu>
            </nav>
        </header>
    );
}

export default Navbar;