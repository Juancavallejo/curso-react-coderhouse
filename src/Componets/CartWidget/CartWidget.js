import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faCartShopping } from '@fortawesome/free-solid-svg-icons'
import { useContext } from "react";
import CartContext from '../../context/CartContext';
import { Link } from "react-router-dom";

const CardWidget = () => {
    const {obtenerCantidad} = useContext(CartContext)

    const cantidad = obtenerCantidad()

    return (
        <Link to='/cart'> <FontAwesomeIcon icon={faCartShopping}/> {cantidad} </Link>
    );
}

export default CardWidget