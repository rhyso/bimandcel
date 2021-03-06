import express from 'express';
import logger from 'morgan';
import mongoose from 'mongoose';
import bodyParser from 'body-parser';
import { getSecret } from './secrets';
import Comment from './models/comment';

const app = express();
const router = express.Router();

const API_PORT = process.env.API_PORT || 3005;

var options = {
    server: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } },
    replset: { socketOptions: { keepAlive: 1, connectTimeoutMS: 30000 } }
};

// db config -- set your URI from mLab in secrets.js
mongoose.connect(getSecret('dbUri'),options);

const db = mongoose.connection;

db.on('error', console.error.bind(console, 'MongoDB connection error:'));



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
    const { author, text } = req.body;
    if (!author || !text) {
        // we should throw an error. we can do this check on the front end
        return res.json({
            success: false,
            error: 'You must provide an author and comment root serv'
        });
    }
    comment.author = author;
    comment.text = text;
    comment.save(err => {
        if (err) return res.json({ success: false, error: err });
        return res.json({ success: true });
    });
});



// app.get('/', function (req, res) {
//     res.send('Hello World!');
// });


app.use('/api', router);

app.listen(API_PORT, () => console.log(`Listening on port ${API_PORT}`));





