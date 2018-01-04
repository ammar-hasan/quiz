define([
  './components/home/home',
  './components/js-quiz/js-quiz',
], function(Home, JSQuiz){
  return [
    {
      path:'/',
      component: Home
    },
    {
      path:'/js-quiz',
      component: JSQuiz
    }
  ]
})