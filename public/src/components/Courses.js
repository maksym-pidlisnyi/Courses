
class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
        };
    }

    handleChange(val) {
        this.setState({courses: val});
    }


    loadPosts() {
        fetch("/coursesapi")
            .then((res) => res.json())
            .then((res) => {
                this.handleChange(res);
            });
    }


    componentDidMount() {
        this.loadPosts();
        this.interval = setInterval(() => this.loadPosts(), 20000);
    }

    componentWillUnmount() {
        clearInterval(this.interval);
    }


    render() {
        if (this.state.courses) {
            return (

                <div className="courses-container">
                    <div className="sort-bar"></div>
                    {this.state.courses.map((course) => (
                        <Course
                            key = { course.id }
                            id = { course.id }
                            title = { course.title}
                            description = { course.description }
                            price = { course.price }
                            startDate = { course.startDate }
                        />
                    ))}
                </div>

            );
        } else {
            return <div>Please wait</div>;
        }
    }
}




ReactDOM.render(<Courses />, document.getElementsByClassName('main-section')[0]);
