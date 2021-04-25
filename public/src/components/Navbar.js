
function Navbar() {
    return (

            <div className="navbar-content">
                <div className="navbar-menu">
                    <a id="logo" href="#">WebDevCourses<i className="fab fa-react"/></a>
                    <nav>
                        <a href="/">Home</a>
                        <a href="#">About Us</a>
                        <a href="/courses">Products</a>
                    </nav>
                </div>
                <div className="register-menu">
                    <nav>
                        <a href="/login">Sign In</a>
                        <a id="register-link" href="/register">Sign Up</a>
                    </nav>
                </div>
            </div>

    );
}


ReactDOM.render(<Navbar />, document.getElementById("navbar"));
