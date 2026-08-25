const express = require ( 'expres');
const app = express ( );
app.use (express.static ('.'));
app.get (' /api' , (req,res)=> res.json ( {mensagem: 'API FUNCIONANDO!'} ));
app.listen(3000, ( )=>console.log('Rodando na porta 3000'));
