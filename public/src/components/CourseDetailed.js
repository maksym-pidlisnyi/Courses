
class CourseDetailed extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            course: {},
            pricing_term: "month"
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
        //todo extract id
       // this.loadPosts(id);
    }

    render() {
        if (this.state.course) {
            return (

                <div className="detailed-course-container">
                    <div className="detailed-course-header">
                        <div className="course-header-img-block"></div>
                        <div className="course-header-text-block">
                            <div className="course-header-text-content">
                                <h1 id="course-page-brand-name">WebDevCourses</h1>
                                <h1>JS</h1>
                                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi asperiores earum error eveniet quasi quo rem similique ut? Animi asperiores deleniti ex facilis, maiores modi placeat quibusdam quod sequi ut.</p>
                            </div>
                            <a href="#detailed-course-pricing">Enroll Me!</a>
                        </div>
                    </div>

                    <div id="detailed-course-pricing" className="detailed-course-pricing">
                        <div className="pricing-options-wrapper">
                            <div className="toggle-container">
                                <h2>Monthly</h2>
                                <div className="input-box">
                                    <input type="checkbox" name="" id="pricing-plan-input" onClick={ () => {
                                        const label = document.getElementById("pricing-plan-label");
                                        const prices = document.getElementsByClassName("price");
                                        if(document.getElementById("pricing-plan-input").checked === true) {
                                            prices[0].innerHTML = "100";
                                            prices[1].innerHTML = "150";
                                            this.state.pricing_term = "year";
                                            for (let el of document.getElementsByClassName("pricing-term")) {
                                                el.innerHTML = "per year"
                                            }
                                            label.innerHTML = '😍';
                                        } else {
                                            prices[0].innerHTML = "10";
                                            prices[1].innerHTML = "16";
                                            this.state.pricing_term = "month";
                                            for (let el of document.getElementsByClassName("pricing-term")) {
                                                el.innerHTML = "per month"
                                            }
                                            label.innerHTML = '😄';
                                        }
                                    }}/>
                                    <label htmlFor="pricing-plan-input" id="pricing-plan-label">😄</label>
                                </div>
                                <h2>Yearly</h2>
                            </div>
                            <div className="pricing-options-container">
                                <div className="pricing-plan">
                                    <div className="pricing-plan-display">
                                        <h2>standard</h2>
                                        <div className="pricing-price">
                                            <span className="price">10</span>
                                            <span className="currency">$</span>
                                        </div>
                                        <p className="pricing-term">per month</p>
                                        <a href="#" className="start-btn">start standard plan</a>
                                    </div>
                                    <div className="pricing-plan-features">
                                        <ul className="features-list">
                                            <li className="active-feature">Feature 1</li>
                                            <li className="active-feature">Feature 2</li>
                                            <li className="active-feature">Feature 3</li>
                                            <li className="active-feature">Feature 4</li>
                                            <li className="inactive-feature">Feature 5</li>
                                            <li className="inactive-feature">Feature 6</li>
                                            <li className="inactive-feature">Feature 7</li>
                                        </ul>
                                    </div>
                                </div>
                                <div className="pricing-plan">
                                    <div id="best-option">best option</div>
                                    <div className="pricing-plan-display">
                                            <h2>premium</h2>
                                            <div className="pricing-price">
                                                <span className="price">16</span>
                                                <span className="currency">$</span>
                                            </div>
                                        <p className="pricing-term">per month</p>
                                        <a href="#" className="start-btn">start premium plan</a>
                                    </div>
                                    <div className="pricing-plan-features">
                                        <ul className="features-list">
                                            <li className="active-feature">Feature 1</li>
                                            <li className="active-feature">Feature 2</li>
                                            <li className="active-feature">Feature 3</li>
                                            <li className="active-feature">Feature 4</li>
                                            <li className="active-feature">Feature 5</li>
                                            <li className="active-feature">Feature 6</li>
                                            <li className="active-feature">Feature 7</li>
                                        </ul>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="detailed-course-testimonials">
                        <h1>what our customers are saying</h1>
                        <div id="carouselExampleControls" className="carousel slide" data-ride="carousel">
                            <div className="carousel-inner">
                                <div className="carousel-item active">
                                    <div className="testimonial-triple">
                                        <div className="testimonial-card">
                                            <div className="testi-header"> <span> <img src="https://pbs.twimg.com/profile_images/844846692956459009/moM6ACpu_bigger.jpg" alt="Avatar"/> </span> <span className="testi-user-name">John Doe</span> </div>
                                            <div className="testi-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consectetur cum dolore ipsam magnam nam natus nisi repellat, sint sit tempore voluptas! Amet consequuntur fugit mollitia quaerat similique?</div>
                                        </div>
                                        <div className="testimonial-card">
                                            <div className="testi-header"> <span> <img src="https://pbs.twimg.com/profile_images/1308211174429749248/ugAopGfO_bigger.jpg" alt="Avatar"/> </span> <span className="testi-user-name">Jane Doe</span> </div>
                                            <div className="testi-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consectetur cum dolore ipsam magnam nam natus nisi repellat, sint sit tempore voluptas! Amet consequuntur fugit mollitia quaerat similique?</div>
                                        </div>
                                        <div className="testimonial-card">
                                            <div className="testi-header"> <span> <img src="https://pbs.twimg.com/profile_images/1341497846168694786/Ls0jopTm_bigger.jpg" alt="Avatar"/> </span> <span className="testi-user-name">Ann J</span> </div>
                                            <div className="testi-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consectetur cum dolore ipsam magnam nam natus nisi repellat, sint sit tempore voluptas! Amet consequuntur fugit mollitia quaerat similique?</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-triple">
                                        <div className="testimonial-card">
                                            <div className="testi-header"> <span> <img src="https://pbs.twimg.com/profile_images/844846692956459009/moM6ACpu_bigger.jpg" alt="Avatar"/> </span> <span className="testi-user-name">John Doe</span> </div>
                                            <div className="testi-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consectetur cum dolore ipsam magnam nam natus nisi repellat, sint sit tempore voluptas! Amet consequuntur fugit mollitia quaerat similique?</div>
                                        </div>
                                        <div className="testimonial-card">
                                            <div className="testi-header"> <span> <img src="https://pbs.twimg.com/profile_images/1308211174429749248/ugAopGfO_bigger.jpg" alt="Avatar"/> </span> <span className="testi-user-name">Jane Doe</span> </div>
                                            <div className="testi-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consectetur cum dolore ipsam magnam nam natus nisi repellat, sint sit tempore voluptas! Amet consequuntur fugit mollitia quaerat similique?</div>
                                        </div>
                                        <div className="testimonial-card">
                                            <div className="testi-header"> <span> <img src="https://pbs.twimg.com/profile_images/1341497846168694786/Ls0jopTm_bigger.jpg" alt="Avatar"/> </span> <span className="testi-user-name">Ann J</span> </div>
                                            <div className="testi-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consectetur cum dolore ipsam magnam nam natus nisi repellat, sint sit tempore voluptas! Amet consequuntur fugit mollitia quaerat similique?</div>
                                        </div>
                                    </div>
                                </div>
                                <div className="carousel-item">
                                    <div className="testimonial-triple">
                                        <div className="testimonial-card">
                                            <div className="testi-header"> <span> <img src="https://pbs.twimg.com/profile_images/844846692956459009/moM6ACpu_bigger.jpg" alt="Avatar"/> </span> <span className="testi-user-name">John Doe</span> </div>
                                            <div className="testi-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consectetur cum dolore ipsam magnam nam natus nisi repellat, sint sit tempore voluptas! Amet consequuntur fugit mollitia quaerat similique?</div>
                                        </div>
                                        <div className="testimonial-card">
                                            <div className="testi-header"> <span> <img src="https://pbs.twimg.com/profile_images/1308211174429749248/ugAopGfO_bigger.jpg" alt="Avatar"/> </span> <span className="testi-user-name">Jane Doe</span> </div>
                                            <div className="testi-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consectetur cum dolore ipsam magnam nam natus nisi repellat, sint sit tempore voluptas! Amet consequuntur fugit mollitia quaerat similique?</div>
                                        </div>
                                        <div className="testimonial-card">
                                            <div className="testi-header"> <span> <img src="https://pbs.twimg.com/profile_images/1341497846168694786/Ls0jopTm_bigger.jpg" alt="Avatar"/> </span> <span className="testi-user-name">Ann J</span> </div>
                                            <div className="testi-body">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid at commodi consectetur cum dolore ipsam magnam nam natus nisi repellat, sint sit tempore voluptas! Amet consequuntur fugit mollitia quaerat similique?</div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <a className="carousel-control-prev" href="#carouselExampleControls" role="button"
                               data-slide="prev">
                                <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                                <span className="sr-only">Previous</span>
                            </a>
                            <a className="carousel-control-next" href="#carouselExampleControls" role="button"
                               data-slide="next">
                                <span className="carousel-control-next-icon" aria-hidden="true"></span>
                                <span className="sr-only">Next</span>
                            </a>
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
