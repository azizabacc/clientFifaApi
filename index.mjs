import express from 'express';
import router from './routes/player.js';


const app = express();




app.set('view engine', 'ejs');
app.use(express.json())
app.use(express.urlencoded({extended : false}))
app.use('/static', express.static("public"));
// routes
app.use('/players',router);

app.get('/',(req,res)=>{
    res.render("index.ejs")
})
app.listen(4000, () => {
console.log('Server started on port 4000');
});