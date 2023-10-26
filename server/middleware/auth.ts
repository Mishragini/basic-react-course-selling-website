import jwt from 'jsonwebtoken';

import secretKey from '../../src/vite-env';

export const userAuthentication =(req,res,next)=>{
    const authHeader=req.headers.authorization;
    if(authHeader){
        const token =authHeader.split(' ')[1];
        jwt.verify(token,secretKey,(err,user)=>{
            if(err) res.sendStatus(403);
            req.user=user;
            next();
        })

    }
    else res.sendStatus(401);
}