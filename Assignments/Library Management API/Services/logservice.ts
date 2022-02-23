// require('dotenv').config();
// const jwt = require('jsonwebtoken');

// const postt = [
//     {
//         name: 'prathmesh',
//         posts: 'post 1'
//     }
// ];
// const logfun = (req:any) => {
//     const student_name = req.body.student_name;
//     const user = {name: student_name};
//     const accessToken = jwt.sign(user, process.env.ACCESS_TOKEN_SECERT);
//     return accessToken;
// }

// function authenticateToken(req, res, next){
//     const authHeader = req.headers['authorization'];
//     const token = authHeader && authHeader.split('')[1];
//     if(token == null)   return 'notauthorized';
//     jwt.verify(token, process.env.ACCESS_TOKEN_SECERT, (err, user)=>{
//         if(err) return 'notacess';
//         req.user =user;
//         next();
//     })
// }
// module.exports = {
//     logfun: logfun
// }