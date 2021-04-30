
function AddCourseMenu() {
    if(sessionStorage.getItem('role') === 'ROLE_ADMIN') {
        return (
            <div>
                <button className="collapsible" onClick={ () => {
                    document.getElementsByClassName("collapsible")[0].classList.toggle("active");
                    const content = document.getElementsByClassName("collapsible-course-adding")[0];
                    if (content.style.display === "block") {
                        content.style.display = "none";
                    } else {
                        content.style.display = "block";
                    }
                }
                }>Add New Course</button>
                <div className="collapsible-course-adding">
                    <form className="add-course-form">
                        <input type="text" id="course-title" name="course-title" placeholder="Title" required/>
                        <input type="date" id="start-date" name="start-date" min={Date.now()} placeholder="Start Date" required/>
                        <div className="add-course-prices">
                            <input type="text" id="course-sm" name="course-sm" placeholder="Standard Month" required/>
                            <input type="text" id="course-sy" name="course-sy" placeholder="Standard Year" required/>
                            <input type="text" id="course-pm" name="course-pm" placeholder="Premium Month" required/>
                            <input type="text" id="course-py" name="course-py" placeholder="Premium Year" required/>
                        </div>
                        <textarea name="add-course-description" id="add-course-description" placeholder="Description" required/>

                        <button className="add-course-btn" type="submit" id="add-course-btn">Submit</button>
                    </form>
                </div>
            </div>
        );
    }
    return <div/>
}

class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
            userCourses: false
        };

        this.sortKey = {
            title: 'title',
            price: 'price',
            startDate: 'startDate'
        }
    }

    handleChange(val) {
        this.setState({courses: val});
    }


    loadPosts() {
        let url;
        if(window.location.href.split('/')[0]==='my-courses' && sessionStorage.getItem("role") === 'ROLE_USER') {
            this.state.userCourses = true;
            url = "/userCourses/" + sessionStorage.getItem("userId");
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    this.handleChange(res);
                });
        } else {
            //todo all courses otherwise
            //todo replace -> coursesB
            url = "/coursesapi"
            fetch(url)
                .then((res) => res.json())
                .then((res) => {
                    this.handleChange(res);
                });
        }
    }


    componentDidMount() {
        this.loadPosts();
    }


    sortArr = (val) => {
        const {title, price, startDate} = this.sortKey;
        const sorted = this.state.courses.sort((a, b) => {
            let key;
            switch(val) {
                case "CheapToExpensive":
                    key = price;
                    return parseInt(a[key]) - parseInt(b[key]);
                case "ExpensiveToCheap":
                    key = price;
                    return parseInt(b[key]) - parseInt(a[key]);
                case "DateAsc":
                    key = startDate;
                    return new Date(a[key]) - new Date(b[key]);
                case "DateDesc":
                    key = startDate;
                    return new Date(b[key]) - new Date(a[key]);
                case "AZ":
                    key = title;
                    return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
                case "ZA":
                    key = title;
                    return a[key] > b[key] ? -1 : a[key] < b[key] ? 1 : 0;
            }
        })
        this.handleChange(sorted);
    }


    render() {
        if (this.state.courses) {
            return (

                <div className="courses-container">
                    <AddCourseMenu/>
                    <div className="sort-bar">
                        <select name="sort-select" id="sort-select" onChange={ () => {
                            const select = document.getElementById('sort-select');
                            this.sortArr(select.value)
                        }}>
                            <option value="CheapToExpensive">Cheap to Expensive</option>
                            <option value="ExpensiveToCheap">Expensive to Cheap</option>
                            <option value="DateAsc">Earliest First</option>
                            <option value="DateDesc">Latest First</option>
                            <option value="AZ">A-Z</option>
                            <option value="ZA">Z-A</option>
                        </select>
                    </div>
                    {this.state.courses.map((course) => (
                        <Course
                            key = { course.id }
                            id = { course.id }
                            title = { course.title}
                            description = { course.description }
                            price = { course.price }
                            startDate = { course.startDate }
                            userCourse = { this.state.userCourses }
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
