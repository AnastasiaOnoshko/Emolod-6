import './style.css'

const Header = () => {

    return (
        <div className = "header-wrapper">
            <p>HEADER</p>
            <div>
                <ul>
                    <li><a href="/">Main</a></li>
                    <li><a href="/profile">Profile</a></li>
                    <li><a href="/blog">Blog</a></li>
                    <li><a href="/about-us">About us</a></li>
                   
                </ul>
            </div>
        </div>
        
    )
}

export default Header