const express = require('express');
const cors = require('cors');
const app = express();

require('dotenv').config();
const PORT = process.env.PORT || 3100;

app.use(cors());
app.use(express.json());

app.use('/api/login', require('./Routes/login'));
app.use('/api/signup', require('./Routes/signup'));
app.use('/api/signout', require('./Routes/singout'));
app.use('/api/todos', require('./Routes/todos'));
app.use('/api/user', require('./Routes/user'));
app.use('/api/refresh-token', require('./Routes/refreshToken'));

app.get("/", (req,res) =>{
    res.send("Hello World");
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
})