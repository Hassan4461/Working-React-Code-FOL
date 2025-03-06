import ExpencesItem from "./components/ExpencesItem";
import Expences from "./components/Expences";

function App(){


    // let expenceDate = new Date(2025, 2, 12);
    // let expenceTitle = "Collagee Fees";
    // let expenceAmount = '₹57000';

    let expence = [
        {
            // id : a1,
            title: 'Collage Fees',
            amount : '₹ 56,000',
            date : new Date(2025 , 2, 12)
        },

        {
            // id : a2,
            title: 'House Rent',
            amount : '₹ 45,000',
            date : new Date(2025 , 5, 12)
        },

        {
            // id : a3,
            title: 'Car Insurance',
            amount : '₹ 50,000',
            date : new Date(2025 , 5, 12)
        },

        {
            // id : a4,
            title: 'Stock Market',
            amount : '₹ 5,000',
            date : new Date(2025 , 3, 9)
        }
    ];


    return (
    <div>
        <h3>Let's Start React With Hassan</h3>
        
        <Expences item = {expence} />
    </div>
 
    );
}

export default App;


