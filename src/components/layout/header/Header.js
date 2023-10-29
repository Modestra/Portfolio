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
                    <a href="/"><button className={"link-main"} type={"button"}></button></a>
                    <a href="/About"><button className={"link-about"} type={"button"}></button></a>
                    <a href="/Projects"><button className={"link-projects"} type={"button"}></button></a>
                    <a href="/Contacts"><button className={"link-contacts"} type={"button"}></button></a>
                </nav>
            </section>
        </header>
    )
}

export default Header;