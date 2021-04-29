
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
                        {/* <label className="sort-label" htmlFor="sort-price">*/}
                        {/*     <input type="checkbox" id="sort-price" name="sort-price" onClick = {() => this.sortArr(this.sortKey.price)}/>*/}
                        {/*     Sort By Price</label>*/}
                        {/*<label className="sort-label" htmlFor="sort-title">*/}
                        {/*    <input type="checkbox" id="sort-title" name="sort-title" onClick = {() => this.sortArr(this.sortKey.title)}/>*/}
                        {/*    Sort By Title</label>*/}
                        {/*<label className="sort-label" htmlFor="sort-date">*/}
                        {/*    <input type="checkbox" id="sort-date" name="sort-date" onClick = {() => this.sortArr(this.sortKey.startDate)}/>*/}
                        {/*    Sort By Start Date</label>*/}
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
