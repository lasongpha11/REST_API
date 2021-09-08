import express from 'express';
import bodyParser from 'body-parser';

import usersRoutes from './routes/users.js';

const app = express();
const PORT = 5000;

app.use(bodyParser.json())

app.use('/users', usersRoutes);
// Routes
app.get('/',(req,res) => {
    res.send('we are on home');
})

// app.get('/posts',(req,res) => {
//     res.send('we are on posts');
// })

// Listen

app.listen(PORT, () => console.log(`Server Running on port: http://localhost:${PORT}`));
