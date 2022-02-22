const express = require('express');
const app = express();

app.use(express.json());
const userRoute = require('./Routes/user');
const swaggerJsDoc = require('swagger-jsdoc');
const swaggerUI = require('swagger-ui-express');

const swaggerDocs = require('./openApiDocumentation/swagger.json');

app.use('/api-docs', swaggerUI.serve,swaggerUI.setup(swaggerDocs));

app.use('/', userRoute);

app.listen(8080, ()=>{
    console.log("Listening the port at 8080");
});

