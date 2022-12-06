const express = require('express')
const bodyParser = require('body-parser')
const cors =  require('cors')
const app = express()
const mysql2 = require('mysql2')


const con = mysql2.createConnection({
    host: "localhost",
    user: "root",
    password: "Y1012Jqkhkp",
    database: "abidb",

});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({extended:true}));




app.post("/register",(req,res) => {
    const FIRST_NAME= req.body.FIRST_NAME
    const LAST_NAME=req.body.LAST_NAME
    const EMAIL=req.body.EMAIL
    const PASSWORD=req.body.PASSWORD

    const sqlInsert = 'INSERT INTO gps (FIRST_NAME,LAST_NAME,EMAIL,PASSWORD) VALUES (?,?,?,?)';
    con.query(sqlInsert,[FIRST_NAME,LAST_NAME,EMAIL,PASSWORD], (err,result) => {
    if(err) throw err;
    res.send(result);
    });
})

app.post("/login",(req,res) => {
    
    const EMAIL=req.body.EMAIL
    const PASSWORD=req.body.PASSWORD

    const sqlInsert = 'SELECT * FROM gps WHERE EMAIL = ? AND PASSWORD = ?';
    con.query(sqlInsert,[EMAIL,PASSWORD], (err,result) => {
    if(err) throw err;
    if(result.length > 0){
        res.send(result);
    }else{
        res.send({Message:"wrong user/password"});
        // alert("wrong user/password");
    }
    //  alert("table created");
    
    });
})


app.get("/dataa",(req,res) => {
    const sqlInsert = 'SELECT * FROM gpsdata';
    con.query(sqlInsert, (err,result) => {
    if(err) throw err;
    res.send(result);
    });
})



app.listen(3001,() => {
    console.log("runnung...");
});