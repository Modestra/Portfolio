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
                    <a href="/" className={"link-main"}><button type={"button"}></button></a>
                    <a href="/About" className={"link-about"}><button type={"button"}></button></a>
                    <a href="/Projects" className={"link-projects"}><button type={"button"}></button></a>
                    <a href="/Contacts" className={"link-contacts"}><button type={"button"}></button></a>
                </nav>
            </section>
        </header>
    )
}

export default Header;