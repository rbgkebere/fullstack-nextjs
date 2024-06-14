import mongoose, { mongo } from "mongoose";

import React from 'react'

export default async function connect() {
 try {

    mongoose.connect(process.env.MONGO_URI!)
    const connection = mongoose.connection

    connection.on(
        'connected',()=>{
            console.log('MongoDB connected successfully!')
        }
    )

    connection.on(
        'error',(error)=>{
            console.log('MongoDB failed connection. Please Make sure MongoDB is running.'+error)
            process.exit()
        }
    )

} catch (error) {

    console.log('Something goes wrong')
    console.log(error)
 
}
}
