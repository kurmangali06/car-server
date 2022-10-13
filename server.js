import express from 'express'
import dotenv from 'dotenv'
import mongoose from 'mongoose'
import cors from "cors"
import seedRouter from './routes/seedRoute.js'
import carsRouter from './routes/carsRoute.js'
import userRouter from './routes/userRoute.js'
import rentRouter from './routes/rantRoute.js'
import categoryRouter from './routes/typeRoute.js'

const app = express()
app.use(cors())
app.use(express.json())
app.use(express.urlencoded({extended:true}))

app.use('/api/seed/', seedRouter);
app.use('/api/cars/', carsRouter);
app.use('/api/users/', userRouter);
app.use('/api/rent/', rentRouter);
app.use('/api/category/', categoryRouter);

dotenv.config();
mongoose.connect(process.env.MONGODB_URL).then(() => {
  console.log('connected to DB');
}).catch((err) => {
  console.log(err.message, "MongoDB error");
})
const port = process.env.PORT || 5000;

app.listen(port, () => {
  console.log(`Serve at :  http://localhost:${port}`);
})