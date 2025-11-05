const express = require('express')
const authRoutes = require('./routes/auth.routes')
const cors = require('cors');
const postRoutes = require('./routes/post.routes')
const cookieParser = require('cookie-parser')

const app = express()
app.use(cors({
   origin: "https://cap-ai-smart-captions-for-your-snap-three.vercel.app/",
   credentials: true
}));
app.use(cookieParser())
app.use(express.json())


app.use('/api/auth', authRoutes);
app.use('/api/posts',postRoutes)





module.exports = app;