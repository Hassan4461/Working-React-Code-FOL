import './ExpencesItem.css'

function ExpencesItem(){
    let title = "car Insurances";
   
    return(
     <div className='expence-item'>
        <div>11 Feb 2024</div>
        <div className='expence-item-descripiton'>
            {/* <h2>Car Insurance</h2> */}
            <h2>{title}</h2>
            <div className='expence-item-price'>$500</div>
        </div>
    </div>
)

}

export default ExpencesItem;