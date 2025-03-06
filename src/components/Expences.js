import './Expences.css'

import ExpencesItem from './ExpencesItem';


function Expences(props){

return(
<div className='expences'>


<ExpencesItem 
        date = { props.item [0].date }
        title = { props.item [0].title } 
        amount = { props.item [0].amount }
    />
    <ExpencesItem 
        date = { props.item [1].date }
        title = { props.item [1].title } 
        amount = { props.item [1].amount }
    />
    <ExpencesItem 
        date = { props.item [2].date }
        title = { props.item [2].title } 
        amount = { props.item [2].amount }
    />
    <ExpencesItem 
        date = { props.item  [3].date }
        title = { props.item  [3].title } 
        amount = { props.item  [3].amount }
    />

</div>

);
}

export default Expences;