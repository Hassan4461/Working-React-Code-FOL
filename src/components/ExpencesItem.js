import './ExpencesItem.css'

import ExpencesDate from './ExpencesDate';

function ExpencesItem(props){
 

    return(
     <div className='expence-item'>
        {/* <div>{props.date.toISOString()}</div> */}


     <ExpencesDate date = {props.date} />
     
        <div className='expence-item-descripiton'>
            
            <h2>{props.title}</h2>
            <div className='expence-item-price'>{props.amount}</div>
        </div>
    </div>
);

}

export default ExpencesItem;