let quizzArray = [
    ["What is the capital of the United States of America?",
    [['Washington DC', "correct"], ['Chicago', "wrong"], ['New York', "wrong"],['Los Angeles', "wrong"]]],
    
    ["How many days does a leap year have?",
    [['364 days', "wrong"], ['365 days', "wrong"], ['366 days', "correct"],['367 days', "wrong"]]],
    
    ["The föhn is what?",
    [['A rock formation', "wrong"], ['A type of rain', "wrong"], ['A wind', "correct"],['A tropical Plant', "wrong"]]],
    
    ["If someone is given hippocras what is being offered?",
    [['A Turkish delicacy of a special part of the brain of an unborn lamb', "wrong"], ['A Bahamian dwarf seahorse', "wrong"], ['A speculum similar to that believed to have been used by Hippocrates', "wrong"],['A sweet highly spiced wine, often used as a digestive', "correct"]]],
    
    ["Which plant, a bushy herb of the mint family, has a heavy, strong scent, and has been used for centuries in perfumes?",
    [['Atalie', "wrong"], ['Kalgoorlie', "wrong"], ['Patchouli', "correct"],['Fettuccine', "wrong"]]],
     
    ["In 1803, part of which two Canadian provinces was bought by the USA from France with the Louisiana Purchase, and ceded to Great Britain in 1818?",
    [['Alberta and Saskatchewan', "correct"], ['Nova Scotia and Ontario', "wrong"], ['Quebec and Saskatchewan', "wrong"],['British Columbia and Manitoba', "wrong"]]],
    
    ['What is the title extension of the 2020 film "Happy Happy Joy Joy"?',
    [['A fly marrying a bumble bee!', "wrong"], ['Asia in Amsterdam', "wrong"], ["Work's Out the Window", "wrong"],['The Ren & Stimpy Story', "correct"]]]
]

let question = document.getElementById("question")
let answers = document.getElementById("answers")
let start = document.getElementById("start")
let next = document.getElementById("next")
var actualQuestion = -1
let correct = 0
let answered = 0
let finish = 0

function checkAnswer(index){
    if (answered ==0){
        answered = 1
    next.classList.remove('hide')
    
    if (quizzArray[actualQuestion][1][index][1] == "correct"){
        document.getElementById(`answer${index}`).classList.add('correct')
        correct ++
    }   
    else {
        let found = -1
        let search = 0 
        while(found === -1){
            if (quizzArray[actualQuestion][1][search][1] == "correct"){
                found = search;
                
            }
            search ++
        }
        document.getElementById(`answer${index}`).classList.add('wrong')
        document.getElementById(`answer${found}`).classList.add('correct')
    }
}
}

function actualiseQuestion(){
    actualQuestion += 1
    questionQuote = `<h2>${quizzArray[actualQuestion][0]}</h2>`;
    answersQuote = ` `
    question.innerHTML = questionQuote
    console.log(quizzArray[actualQuestion])
    for(i in quizzArray[actualQuestion][1]){
        answersQuote += `<h3 id="answer${i}" onclick="checkAnswer(${i})">${quizzArray[actualQuestion][1][i][0]}</h3>`
    }
    answers.innerHTML = answersQuote
    next.classList.add('hide')
} 

start.addEventListener('click', event => {
    start.classList.add('hide')
    actualiseQuestion()
})

next.addEventListener('click', event => {
    if (finish ==0 ){
        console.log(correct)
        answered = 0
        if (actualQuestion <=  quizzArray.length -2){
            actualiseQuestion()
        }
        else{
            finish = 1
            question.innerHTML = `<h2>Total Score : ${correct} / 7 </h2>`
            answers.innerHTML = null
            next.innerHTML = "Restart"
        }
    }
    else{
        finish = 0;
        next.innerHTML = "Next";
        actualQuestion = 0-1;
        correct = 0;
        actualiseQuestion()
    }
    

})