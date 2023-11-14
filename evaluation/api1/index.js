const express = require('express');
const app = express();
const axios = require('axios');

const port = 3000;

let initialValue = 10;

const url = 'http://localhost:3002/times-two';

let currentValue = initialValue;


app.get('/plus-one', (req,res) => {
    axios({
        method: 'get',
        url: url+`?value=${currentValue+1}`
      }).then((response)=>{
        currentValue = response.data?.value;
        console.log(currentValue);
      });
})

app.listen(port, () =>{
    console.log(`App running in port ${port}`);
})
