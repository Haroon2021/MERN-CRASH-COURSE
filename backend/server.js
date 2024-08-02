// This is the entry point for the API
import express from 'express';

const app = express();

app.get("/products", (req,res) => {
    
})

app.listen(5000, () => {
    console.log('App started on localhost 5000')
})
