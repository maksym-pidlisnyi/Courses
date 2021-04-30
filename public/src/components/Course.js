
function DangerBtn(props) {
    if('role' in sessionStorage) {
        const role = sessionStorage.getItem("role");
        if(role === 'admin') {
            return <button className="danger-btn" onClick={ () => {console.log(props.id)} }>Delete</button>
        } else if(role === 'user') {
            return <button className="danger-btn" onClick={ () => {console.log(props.id)} }>Unenroll</button>
        }
    }
    return <div/>
}

const Course = (props) => {
    const {id, title, description, price, startDate} = props;
    return (
        <div className="course" id={id}>

            <div className="course-header">
                <h4>{title}</h4>
                <DangerBtn id={id}/>
            </div>
            <div className="course-body">
                <p className="course-description">{description}</p>
                <div className="course-additional-info">
                        <h4>Start Date: {startDate}</h4>
                        <h4 className="course-price">{price} $</h4>
                </div>
            </div>
            <div className="floating-up-div">
                <a className="more-info-ref" href={`/courses/${id}`}>More info</a>
            </div>
        </div>
    )

}