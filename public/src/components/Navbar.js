
function Navbar() {
    return (

            <div className="navbar-content">
                <div className="navbar-menu">
                    <a id="logo" href="#">WebDevCourses<i className="fab fa-react"/></a>
                    <nav>
                        <a href="#">Головна</a>
                        <a href="#">Про Нас</a>
                        <a href="#">Курси</a>
                    </nav>
                </div>
                <div className="register-menu">
                    <nav>
                        <a href="#">Login</a>
                        <a id="register-link" href="#">Register</a>
                    </nav>
                </div>
            </div>

    );
}


ReactDOM.render(<Navbar />, document.getElementById("navbar"));
