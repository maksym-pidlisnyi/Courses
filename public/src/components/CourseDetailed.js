
class CourseDetailed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {},
        };
    }

    handleChange(val) {
        this.setState({courses: val});
    }

    loadPosts(id) {
        fetch('/courseInfo/' + id)
            .then((res) => res.json())
            .then((res) => {
                this.handleChange(res);
            });
    }

    componentDidMount() {
        // const id =
     //   this.loadPosts(1);
    }

    render() {
        if (this.state.course) {
            return (

                <div className="course-detailed-container">
                    <div className="detailed-course-header">
                        <div className="course-header-img-block"></div>
                        <div className="course-header-text-block">
                            <div className="course-header-text-content">
                                <h1 id="course-page-brand-name">WebDevCourses</h1>
                                <h1>JS</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores earum error eveniet quasi quo rem similique ut? Animi asperiores deleniti ex facilis, maiores modi placeat quibusdam quod sequi ut.</p>
                            </div>
                            <a href="#">Enroll Me!</a>
                        </div>
                    </div>
                </div>

            );
        } else {
            return <div>Please wait</div>;
        }
    }
}




ReactDOM.render(<CourseDetailed />, document.getElementsByClassName('main-section-course-detailed')[0]);
