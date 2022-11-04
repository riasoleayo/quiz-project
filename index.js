var questionBank= [
    {

        question : 'Letter A is the what letter of the alphabet',
        option : ['last','second','first','fifth'],
        answer : 'first'

    },


    {

        question : 'After letter y is',
        option : ['B','F','Q','Z'],
        answer : 'Z'

    },

    {

        question : 'The sixth letter is',
        option : ['P','F','J','O'],
        answer : ''
    },


    {

        question : 'A noun is a what thing',
        option : ['Doing','Naming','None of the above','All of the above'],
        answer : 'Naming'

    },

    {

        question : 'What noun starts with capital letter',
        option : ['Proper','Abstract','Concrete','None'],
        answer : 'Proper'

    },

    {

        question : 'What is an action word',
        option : ['Preposition','Adverb','Verb','Interjection'],
        answer : 'Verb'

    },

    {

        question : 'Jumping is a what',
        option : ['Noun','Verb','Pronoun','Adverb'],
        answer : 'Noun'

    },

    {

        question : 'Eat is a what',
        option : ['A verb','A preposition','An adverb','An interjection'],
        answer : 'Verb'

    },

    {

        question : 'Your name is a what',
        option : ['Noun','Adjective','Verb','None of the above'],
        answer : 'Noun'

    },

    {

        question : 'What is not a type of clause',
        option : ['Adjectival','Intercontinental','All of the above','None of the above'],
        answer : 'Intercontinental'

    },

    {

        question : 'What is not a part of speech',
        option : ['Simile','Pronoun','Personification','A and C'],
        answer : 'A and C'

    },

    {

        question : 'Pick the odd one out',
        option : ['Personification','Metaphor','Oxymoron','Preposition'],
        answer : 'Preposition'

    },

    {

        question : 'The last letter of the alphabet',
        option : ['Q','Y','P','Z'],
        answer : 'Z'

    },

    {

        question : 'The fifteenth letter',
        option : ['O','P','M','Y'],
        answer : 'O'

    },

    {

        question : 'The correct option is a pronoun',
        option : ['Me','Laptop','Water','Laugh'],
        answer : 'Me'

    },

]   

var question = document.getElementById('question');
var container = document.getElementById('container');
var scoreBoard = document.getElementById('scoreboard');
var option0 = document.getElementById('option0');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var options = document.querySelectorAll('.next');
var points = document.getElementById("score");
var span = document.querySelectorAll('span');
var i = 0;
var score = 0;

function displayQuestions(){
    for(var a=0;a<span.length;a++){
        span[a].style.background='none'
    }
    question.innerHTML = 'Q.' +(i+l) + '' + questionBank[i].question;
    option0.innerHTML = questionBank[i].option[0];
    option1.innerHTML = questionBank[i].option[1];
    option2.innerHTML = questionBank[i].option[2];
    option3.innerHTML = questionBank[i].option[3];

    stat.innerHTML = 'question'  + ' ' + (i+i) + ' ' + questionBank.length;
}
displayQuestions()
