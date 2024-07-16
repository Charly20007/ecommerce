import Logo from "../molecules/header/Logo"
import MainMenu from "../molecules/header/MainMenu"

const MainHeader = () => {
  return (
    <div>
        {/* <div>Logoo</div> atomizamos
        <nav>
            <ul>
                <li>Inicio</li>
                <li>Productos</li>
                <li>Ofertas</li>
                <li>Contacto</li>
            </ul>
        </nav> */}
        <Logo/>
        <MainMenu/>
    </div>
  )
}

export default MainHeader
