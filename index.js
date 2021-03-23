const express = require('express');
const app = express();

//*============>1st Way*//
// function rootcall(req,res){
//     res.send('Thank you very much')
// }

//*============>2nd Way*//
//  const rootcall = (req,res) => res.send("Thank you Very Much");

app.get('/', (req, res) => {
    res.send("Thank you for Calling Me");
});
app.listen(3003, () => console.log('Listening to port 3003'));
