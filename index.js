const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
  res.send('Esta es la Actividad 3.3: Ephemeral Enviroments de Tendencias en entorno de desarrollo de aplicaciones y servicios !');
});

app.listen(port, () => {
  console.log(`App listening at http://localhost:${port}`);
});
