const express = require('express');
const app = express();


app.use(express.json({extended:false}));
app.get('/', (req, res) => {
    res.send('Server  running!')
  });
app.use('/api/users',require('./routers/user'));



const PORT = process.env.PORT || 5000;

app.listen(PORT,()=>{console.log(`Server listen on port ${PORT}`)});