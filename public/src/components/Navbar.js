
function Navbar() {
    getParam();
    if ('accessToken' in sessionStorage) {
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
                <div id="registerMenu" className="register-menu">
                    <nav>
                        <a  href="/logout">Log out</a>
                    </nav>
                </div>
            </div>
        );
    } else {
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
                <div id="registerMenu" className="register-menu">
                    <nav>
                        <a  href="/login">Sign In</a>
                        <a id="register-link" href="/register">Sign Up</a>
                    </nav>
                </div>
            </div>

        );
    }
}

function getParam() {
    fetch('/api/getToken')
        .then(value => value.json())
        .then(data => {
            sessionStorage.clear();
            let token = data.token.toString()
            if (token != null && token.length > 1) {
                console.log(token);
                sessionStorage.setItem('accessToken', token);
            }
        }).catch((error) => {
        console.error('Error:', error);
    });
}

ReactDOM.render(<Navbar />, document.getElementById("navbar"));
