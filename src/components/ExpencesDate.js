import './ExpencesDate.css'

function ExpencesDate(props) {


    const Month = props.date.toLocaleString('en-US', { month: 'long' });
    const Year = props.date.getFullYear();
    const day = props.date.toLocaleString('en-US', { day: '2-digit' });

    return (
        <div className='expence-date'>
            <div className='expence-date__day'>{day}</div>
            <div className='expence-date__month'>{Month}</div>
            <div className='expence-date__year'>{Year}</div>
        </div>
    );

}

export default ExpencesDate;