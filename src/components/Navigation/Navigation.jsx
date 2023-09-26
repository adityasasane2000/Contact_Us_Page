import style from "./Navigation.module.css";

const Navigation = () =>{
    return (
        <nav className={`${style.navigation} conatiner`}>
            <div className="logo">
                <img src="images/Frame 2 1.png" alt="logo" />
            </div>

            <ul>
                <li>HOME</li>
                <li>ABOUT</li>
                <li>CONTACT</li>
            </ul>
        </nav>
    )
}

export default Navigation;