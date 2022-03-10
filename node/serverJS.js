const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const mysql = require('mysql');
const app = express();


const hostname = '127.0.0.1';
const port = 4000;

//PARDE aplication ww-
app.use(bodyParser.json());
app.use(cors());

const con = mysql.createConnection({
  host: 'localhost',
  user: 'root',
  password: 'qwerty',
});

con.connect((err) => {
  if (err) throw err;
})

/* const users = [
  { user: 'Abraham', password: 'abrahamwow' },
  { user: 'Oscar', password: 'ozkar' },
  { user: 'Eliza', password: 'erandi' },
  { user: 'Paola', password: 'paukaulits' },
  { user: 'Erick', password: 'erandi' },
] */

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/demofile.html');
});

app.post('/login', (req, res) => {
  

  con.query(`SELECT * FROM login.users where user = '${req.body.user}' `, (error, resultado) => {

    if (error) throw error;

    //Si hay usuarios en mi arreglo de la BD
    if (resultado.length > 0) {
      //Si la contraseña de la BD y la contraseña del body son exactamente iguales
      if (resultado[0].pass === req.body.pass) {
        res.json({
          mensaje: "Logeado",
          acceso: true
        })
      } else {
        res.json({
          mensaje: "Contraseña incorrecta",
          acceso: false
        })
      }
    } else {
      res.json({
        mensaje: "No existe el usuario",
        acceso: false
      })
    }
  })
});


app.listen(port, hostname, () => {
  console.log(`Server running at http://${hostname}:${port}`);
});
