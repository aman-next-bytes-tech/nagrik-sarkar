require('dotenv').config();
const express = require('express');
const connectDB = require('./connectDB');
const cors = require('cors');
const userRouter = require('./routes/user.route');


const app = express();
const PORT = process.env.PORT;

// Middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());

// database connection
// connectDB(process.env.MONGO_URI)
//     .then(() => console.log('mongoose connected'))
//     .catch((err) => console.log(err));

// user router
app.use('/api/user', userRouter);

app.get('/', (req, res) => {
    res.json({ message: "hello from the server" });
});

app.listen(PORT, () => {
    console.log(`app is running on http://localhost:${PORT}`);
})