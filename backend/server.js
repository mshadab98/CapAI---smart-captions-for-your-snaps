// require('dotenv').config()
// const app = require('./src/app')
// const connectDB = require('./src/db/db')


// connectDB()


// app.listen(5000,()=>{
//     console.log('server is running on 5000')
// })


require('dotenv').config();
const app = require('./src/app');
const connectDB = require('./src/db/db');

connectDB();

module.exports = app;  // 👈 yahi important hai
