define(['vue', 'text!./js-quiz.tpl'], function(Vue, template) {
  return Vue.extend({
   template: template,
    mounted: function () {
      var self = this
      fetch('/api/quiz/js?_='+ Date.now()).then(function (res) {
        if (res.status !== 200) {
          throw new Error("Not found.")
        }
        return res.json()
      }).then(function (data) {
        self.quiz = data.quiz
      }).catch(function (error) {
        self.error = "Retrieving the data was not successful."
      })
    },
    data: function() {
      return {
        index: 0,
        quiz: null,
        error: null
      }
    },
    methods: {
      onPrevious: function () {
        this.index -= 1
      },
      onNext: function () {
        this.index += 1
      },
      onFinish: function () {
        var score = this.quiz.questions.reduce(function (p, c) {
          if (String(c.selection) === String(c.answer.value)) {
            p += 1
          }
          return p
        }, 0)
        alert("You scored " + score + " out of " + this.quiz.questions.length)
        window.location.hash = "/"
      }
    }
  })
})