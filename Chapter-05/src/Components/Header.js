const Title = () => {
    return(
        <a href="/" className="logo">
            <img src="https://foodvilla.no/src/img/logo.png" alt="Good Food"/>
        </a>
    )
}

const Header = () => {
    return(
        <header>
            <Title/>
            <nav className="menu">
                <ul>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                    <li><a href="#">Contact</a></li>
                    <li><a href="#">Cart</a></li>
                </ul>
            </nav>
        </header>
    )
}

export default Header;