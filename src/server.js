import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { getSecret } from './secrets';
import Comment from './models/comment';
import cors from 'cors';
var path = require('path');

const app = express();
const router = express.Router();

const API_PORT = 18321;


// db config -- set your URI from mLab in secrets.js
mongoose.connect(getSecret('dbUri'));

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));

app.use(cors());
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));

router.get('/', (req, res) => {
    res.json({ message: 'Hello, World!' });
});


router.get('/comments', (req, res) => {
    Comment.find((err, comments) => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true, data: comments });
    });
});

router.post('/comments', (req, res) => {
    const comment = new Comment();
    // body parser lets us use the req.body
    const { person, food, confirm, dietary } = req.body;
    if (!person || !confirm) {
        // we should throw an error. we can do this check on the front end
        return res.json({
            success: false,
            error: 'Sorry something is wrong with the form'
        });
    }
    comment.person = person;
    comment.food = food;
    comment.confirm = confirm;
    comment.dietary = dietary;
    comment.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});

app.get('/', function(req, res) {
    res.sendFile(path.join(__dirname + '/response-list.html'));
});

// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });


app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));





