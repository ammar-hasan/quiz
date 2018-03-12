const express = require('express')
const bodyParser = require('body-parser')

const app = express()

app.use(express.static('./public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())

app.all('/api/quiz/js', function(req, res) {
	const quiz = require('./data/quiz/js.json')
	res.json({
		quiz: quiz
	})
})

app.listen(3010, () => console.log('Quiz app listening on port 3010!'))