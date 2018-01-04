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

app.listen(3000, () => console.log('Speech apis comparison server listening on port 3000!'))