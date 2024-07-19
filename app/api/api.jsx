import axios from 'axios';

const getNurses = () => {
    axios.get('https://api.example.com/data')
    .then(response => {
        console.log(response.data);
    })
    .catch(error => {
        console.error("Error fetching data: ", error);
    });
} 

// const saveSchedule = (payload) => {
//     const data = {
//         name: 'John',
//         age: 30
//     };
      
//     axios.post('https://api.example.com/create', data)
//     .then(response => {
//         console.log(response.data);
//     })
//     .catch(error => {
//         console.error("Error sending data: ", error);
//     });
// }

export default getNurses;
