function DangerBtn(props) {
    if (sessionStorage.getItem("role") === 'ROLE_ADMIN') {
        return <button className="danger-btn" onClick={async () => {

            try {
                const response = await fetch('/coursesB', {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({id: props.id})
                });

                alert('Successfully deleted!');
                // const responseObj = await response.json();
                // if (responseObj.message) {
                //     alert(responseObj.message);
                //     console.log(responseObj.error);
                // } else {
                //     alert('Course successfully deleted!');
                // }
            } catch (e) {
                console.log(e);
            }

        }}>Delete</button>

    } else if (props.userCourse) {

        return <button className="danger-btn" onClick={async(e) => {
            e.preventDefault();

            const courseId = props.id;
            const userId = sessionStorage.getItem("userId");
            try {
                const response = await fetch('/checkOut', {
                    method: 'DELETE',
                    headers: {'Content-Type': 'application/json'},
                    body: JSON.stringify({courseId: courseId, userId: userId})
                });

                console.log(response.text())
                alert('Successfully unenrolled!');
                // const responseObj = await JSON.parse(response);
                // if (responseObj.message) {
                //     alert(responseObj.message);
                //     console.log(responseObj.error);
                // } else {
                //     alert('Successfully unenrolled!');
                // }
            } catch (er) {
                console.log(er);
            }

        }}>Unenroll</button>
    }

    return <div/>
}

const Course = (props) => {
    const {id, title, description, price, startDate} = props;
    return (
        <div className="course" id={id}>

            <div className="course-header">
                <h4>{title}</h4>
                <DangerBtn userCourse={props.userCourse} id={id}/>
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