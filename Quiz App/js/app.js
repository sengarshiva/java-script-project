const question = [
    {
        'que': "Which is the 29th state of India?",
         'a': "Uttarakhand",
         'b': "Telangana",
         'c': "Uttar Pradesh",
         'd':  "Madhya Pradesh",
         'correct': "b",
    },  

    {
        'que': "what does css stands for?",
         'a': "Hypertext markup language",
         'b': "cascading style sheet",
         'c': "jason object notation",
         'd':  "helicopters terminals motorboats lamborginis",
         'correct': "b",
    },  

    {
        'que': "what year was javascript launched?",
         'a': "1996",
         'b': "1994",
         'c': "1995",
         'd':  "none of the above",
         'correct': "c",
    }   
]

let index = 0;
let total = question.length;
let right = 0,
    wrong = 0;
const quesBox = document.getElementById("quesBox")
const optionInputs = document.querySelectorAll('.option')
const loadQuestion = () => {
    if(index === total){
        return endQuiz()
    }
    reset()
    const data = question[index]
    quesBox.innerText = `${index+1} ${data.que}`;
    optionInputs[0].nextElementSibling.innerText = data.a;
    optionInputs[1].nextElementSibling.innerText = data.b;
    optionInputs[2].nextElementSibling.innerText = data.c;
    optionInputs[3].nextElementSibling.innerText = data.d;
   //  console.log(data)
}


const submitQuiz =() => {
    const data = question[index];
    const ans = getAnswer()
    if(ans === data.correct){
        right++;

    }
    else{
        wrong++;
    }
    index++;
    loadQuestion();
    return;
}

const getAnswer = () =>{
    let answer;
    optionInputs.forEach(
        (input) =>{
            if(input.checked){
                // console.log("yes")
                answer = input.value;
            }
            
        }
    )

     return answer;

}

 const reset = ()=> {
    optionInputs.forEach(
        (input) => {
            input.checked = false;
        }
    )
 }

 const endQuiz = () =>{
    document.getElementById("box").innerHTML =`
    <div style ="text-align:center">
    <h3> Thanku you for playing the quiz </h3>
    <h2>${right}/${total} are correct </h2>
    </div>
    `
 }

 // initial call
 loadQuestion();