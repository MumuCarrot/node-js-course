import express from 'express';
import userRouter from './routers/user.router.js';
import productRouter from './routers/product.routes.js';
import { logRequest } from './middleware/middleware.js';
import { errorResponder } from './middleware/error.middleware.js';
import bodyParser from 'body-parser';

const app = express();

app.use(bodyParser.json());
app.use(logRequest);
app.use(userRouter);
app.use(productRouter);
app.use(errorResponder);

app.listen(3000, () => {
   console.log('Server is running on port 3000');
});