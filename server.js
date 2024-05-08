
import express from 'express';

import path from 'path';
import { fileURLToPath } from 'url';

const port = process.env.PORT || 8000
const app = express();

import posts from './routes/posts.js';

console.log('port: ' + port);

const __filename = fileURLToPath(import.meta.url); // get the resolved path to the file
const __dirname = path.dirname(__filename); // get the name of the directory

// Static folder example
app.use(express.static(path.join(__dirname,'public')));

app.use('/api/posts',posts);

/* Basic route examples
app.get('/', (req,res) => {
    res.send('<h1>test</h1>');
})

app.get('/about', (req,res) => {
    res.send('<h1>About</h1>');
})
*/



app.listen(port, () => console.log('server running'));
