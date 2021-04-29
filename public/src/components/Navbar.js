
function UserNavigation() {
    if('accessToken' in sessionStorage) {
        //todo if role == admin else
        return (
            <nav>
                <a  href="/logout">Log out</a>
            </nav>
        )
    } else {
       return (
           <nav>
               <a  href="/login">Sign In</a>
               <a id="register-link" href="/register">Sign Up</a>
           </nav>
        )
    }
}


class Navbar extends React.Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div className="navbar-content">
                <div className="navbar-menu">
                    <a id="logo" href="#">WebDevCourses<i className="fab fa-react"/></a>
                    <nav>
                        <a href="/">Home</a>
                        <a href="/about">About Us</a>
                        <a href="/courses">Products</a>
                    </nav>
                </div>
                <div id="registerMenu" className="register-menu">
                        <UserNavigation/>
                </div>
            </div>
        );
    }

}


ReactDOM.render(<Navbar />, document.getElementById("navbar"));
