import express from 'express';

import mongoose from 'mongoose';

import adminRouter from './routes/admin';

import userRouter from './routes/user';

import cors from 'cors';

const app=express();

app.use(cors);
app.use(express.json());
app.use(express.urlencoded({ extended: true })); 

app.use('/admin',adminRouter);
app.use('/user',userRouter);

mongoose.connect('mongodb://127.0.0.1.', { dbName: "courses" });


app.listen(3000, () => console.log('Server running on port 3000'));