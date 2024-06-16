import connect from "@/dbConfig/dbConfig"
import User from '@/models/userModel'
import { NextRequest, NextResponse } from "next/server"
import bcryptjs from 'bcryptjs'
import jwt from "jsonwebtoken"


connect()

export async function POST(request:NextRequest){
    try {
        const reqBody=await request.json()
        const { email, password} = reqBody
        console.log('ReqBody: '+reqBody)

        const user = await User.findOne({email})

        if(!user){
            console.log('this user does not exist!')
            return NextResponse.json(
                {error:'this user does not exist!'},
                {status:500}
            )
           
        }

        const validPassword = await bcryptjs.compare(password,user.password)

        if(!validPassword){
            return NextResponse.json(
                {error:'invalid password'},
                {status:400}
            )
        }

     //create token data
            const tokenData={
                id: user._id,
                username: user.username,
                email: user.email,
            }

    //create token

    const token = await jwt.sign(tokenData, process.env.TOKEN_SECRET!, {expiresIn:'1d'})

    const response = NextResponse.json({
        message: 'Login successful',
        success: true,
    })

    response.cookies.set('token',token,{
        httpOnly:true
    })

    return response
        
    } catch (error:any) {
        return NextResponse.json(
            {error:error.message},
            {status:500}
        )        
    }

}
