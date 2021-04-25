
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

                    <div className="detailed-course-pricing">
                        <div className="pricing-options-wrapper">
                            <div className="toggle-container">
                                <div className="input-box">
                                    <input type="checkbox" name="" id="pricing-plan-input" onClick={ () => {
                                        const label = document.getElementById("pricing-plan-label");
                                        if(document.getElementById("pricing-plan-input").checked === true) {
                                            label.innerHTML = '😍';
                                        } else {
                                            label.innerHTML = '😄';
                                        }
                                    }}/>
                                    <label htmlFor="pricing-plan-input" id="pricing-plan-label">😄</label>
                                </div>
                            </div>
                            <div className="pricing-options-container">
                                <div className="pricing-plan">
                                    <div className="pricing-plan-display">
                                        <h2>standard</h2>
                                        <div className="pricing-price">
                                            <span className="price">10</span>
                                            <span>$</span>
                                        </div>
                                    </div>
                                    <div className="pricing-plan-features"></div>
                                </div>
                                <div className="pricing-plan">
                                    <div id="best-option">best option</div>
                                    <div className="pricing-plan-display">
                                            <h2>premium</h2>
                                            <div className="pricing-price">
                                                <span className="price">10</span>
                                                <span>$</span>
                                            </div>
                                    </div>
                                    <div className="pricing-plan-features"></div>
                                </div>
                            </div>
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
