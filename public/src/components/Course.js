
const Course = (props) => {
    const {id, title, description, price, startDate} = props;
    return (
        <div className="course" id={id}>

            <div className="course-header">
                <h4>{title}</h4>
            </div>
            <div className="course-body">
                <p className="course-description">{description}</p>
                <div className="course-additional-info">

                </div>
            </div>
            <a className="more-info-ref" href="#">More info..</a>

        </div>
    )

}