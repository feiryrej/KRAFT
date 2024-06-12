import express, { Express } from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import { indexRouter, applicantRouter, referenceRouter } from './routes';
import { logServerDetails } from './utilities/logServerDetails';

const app: Express = express();
const PORT: number = 5000;
app.use(cors());
app.use(bodyParser.json());
app.use(express.json());

app.use('/', indexRouter);
app.use('/applicants', applicantRouter);
app.use('/references', referenceRouter);

app.listen(PORT, () => {
    logServerDetails(PORT);
});
