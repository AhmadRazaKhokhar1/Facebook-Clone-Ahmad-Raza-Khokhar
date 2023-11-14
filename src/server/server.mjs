import express from 'express'
import cors from 'cors'
import dotenv  from 'dotenv';
dotenv.config()
const port = process.env.PORT || 200;
const app = express();

app.use(cors());
app.use(express.json());

let postsData = [];

app.post('/post', (req, res)=>{
    let newData = {
        index:req.body.index,
        caption:req.body.caption,
        img:req.body.img,
    }
    postsData.push(newData);
    res.send('You have successfully posted!')
})
app.get('/', (req, res)=>{
    res.json(postsData);
})
app.listen(port, ()=>{
    console.log(port)
})
