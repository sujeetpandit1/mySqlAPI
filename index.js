const express = require('express')
const app = express()
const mysql = require('mysql2')
const routes = require('./src/routes/route')


app.use(express.json())

const connection = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'Arjun@#19927498928425',
    database: 'test_db'
  })
  connection.connect((err) => {
    if (err) {
      console.error('error connecting: ' + err.stack);
      return;
    }
   
    console.log('mySql db is Connected ');
  });


    app.use((req, _res, next) =>{
    req.con= connection
    next();
  })

app.use('/', routes)


const port = process.env.PORT || 4000;
app.listen(port, () => {
  console.log(`Running at http://localhost:${port}`);
});





