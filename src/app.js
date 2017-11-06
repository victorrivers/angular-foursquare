var express = require('express')
var app = express()

app.use(express.static('source'))

app.get('/', (req, res) => {
	res.sendFile('index.html');
});

app.listen(8888, () => console.log('Listening on port 8888!'))