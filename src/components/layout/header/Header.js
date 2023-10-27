import "./Header.css"
function Header() {
    return (
        <header>
            <section className={"react"}>
                <p>Реализованно с помощью React</p>
            </section>
            <section className={"links"}>
                <p>Моё портфолио</p>
                <nav className={"link-navbar"}>
                    <a href="/"><button type={"button"}></button></a>
                    <a href="/About"><button type={"button"}></button></a>
                    <a href="/Projects"><button type={"button"}></button></a>
                    <a href="/Contacts"><button type={"button"}></button></a>
                </nav>
            </section>
        </header>
    )
}

export default Header;