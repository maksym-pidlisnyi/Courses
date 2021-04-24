
class Courses extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            courses: [],
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
        fetch("/coursesapi")
            .then((res) => res.json())
            .then((res) => {
                this.handleChange(res);
            });
    }


    componentDidMount() {
        this.loadPosts();
    }


    sortArr = (key) => {
        // if(document.getElementById("check_all_1").checked) return;
        const sorted = this.state.courses.sort((a, b) => {
            if(key === 'title') return a[key] < b[key] ? -1 : a[key] > b[key] ? 1 : 0;
            if(key === 'startDate') return new Date(b[key]) - new Date(a[key])
            return parseInt(b[key]) - parseInt(a[key])
        })
        this.handleChange(sorted);
    }


    render() {
        if (this.state.courses) {
            return (

                <div className="courses-container">
                    <div className="sort-bar">
                         <label className="sort-label" htmlFor="sort-price">
                             <input type="checkbox" id="sort-price" name="sort-price" onClick = {() => this.sortArr(this.sortKey.price)}/>
                             Sort By Price</label>
                        <label className="sort-label" htmlFor="sort-title">
                            <input type="checkbox" id="sort-title" name="sort-title" onClick = {() => this.sortArr(this.sortKey.title)}/>
                            Sort By Title</label>
                        <label className="sort-label" htmlFor="sort-date">
                            <input type="checkbox" id="sort-date" name="sort-date" onClick = {() => this.sortArr(this.sortKey.startDate)}/>
                            Sort By Start Date</label>
                    </div>
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
