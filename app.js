let express = require('express');
let app = express();

app.use('/',express.static(__dirname));

app.listen(3000, ()=>
    console.log('servidor iniciado')
);


app.get('/datos.json', function (req, res) {
    res.send('datos.json');
  });