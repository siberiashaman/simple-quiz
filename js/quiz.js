// Questions will be asked
const Questions = [{
    id: 0,
    q: "What is capital of India?",
    a: [{ text: "gandhinagar", isCorrect: false },
    { text: "Surat", isCorrect: false },
    { text: "Delhi", isCorrect: true },
    { text: "mumbai", isCorrect: false }
    ]

},
{
    id: 1,
    q: "What is the capital of Thailand?",
    a: [{ text: "Lampang", isCorrect: false, isSelected: false },
    { text: "phuket", isCorrect: false },
    { text: "Ayutthaya", isCorrect: false },
    { text: "Bangkok", isCorrect: true }
    ]

},
{
    id: 2,
    q: "What is the capital of Russia",
    a: [{ text: "surat", isCorrect: false },
    { text: "novosibirsk", isCorrect: false },
    { text: "riga", isCorrect: false },
    { text: "moscow", isCorrect: true }
    ]

}

]

// Set start
var start = true;


// Iterate
function iterate(id) {

    // Getting the result display section
    var result = document.getElementsByClassName("result");
    result[0].innerText = "";

    // Getting the question
    const question = document.getElementById("question");


    // Setting the question text
    question.innerText = Questions[id].q;

    // Getting the options
    const op1 = document.getElementById('op1');
    const op2 = document.getElementById('op2');
    const op3 = document.getElementById('op3');
    const op4 = document.getElementById('op4');


    // Providing option text 
    op1.innerText = Questions[id].a[0].text;
    op2.innerText = Questions[id].a[1].text;
    op3.innerText = Questions[id].a[2].text;
    op4.innerText = Questions[id].a[3].text;

    // Providing the true or false value to the options
    op1.value = Questions[id].a[0].isCorrect;
    op2.value = Questions[id].a[1].isCorrect;
    op3.value = Questions[id].a[2].isCorrect;
    op4.value = Questions[id].a[3].isCorrect;

    var selected = "";

    // Show selection for op1
    op1.addEventListener("click", () => {
        if (op1.classList.contains("btn-primary")) {
            op1.classList.add("btn-warning");
            op1.classList.remove("btn-primary");
            op2.classList.remove("btn-warning");
            op2.classList.add("btn-primary");
            op3.classList.remove("btn-warning");
            op3.classList.add("btn-primary");
            op4.classList.remove("btn-warning");
            op4.classList.add("btn-primary");
        }
        selected = op1.value;
    })

    // Show selection for op2
    op2.addEventListener("click", () => {
        if (op2.classList.contains("btn-primary")) {
            op2.classList.add("btn-warning");
            op2.classList.remove("btn-primary");
            op1.classList.remove("btn-warning");
            op1.classList.add("btn-primary");
            op3.classList.remove("btn-warning");
            op3.classList.add("btn-primary");
            op4.classList.remove("btn-warning");
            op4.classList.add("btn-primary");
        }
        selected = op2.value;
    })

    // Show selection for op3
    op3.addEventListener("click", () => {
        if (op3.classList.contains("btn-primary")) {
            op3.classList.add("btn-warning");
            op3.classList.remove("btn-primary");
            op1.classList.remove("btn-warning");
            op1.classList.add("btn-primary");
            op2.classList.remove("btn-warning");
            op2.classList.add("btn-primary");
            op4.classList.remove("btn-warning");
            op4.classList.add("btn-primary");
        }
        selected = op3.value;
    })

    // Show selection for op4
    op4.addEventListener("click", () => {
        if (op4.classList.contains("btn-primary")) {
            op4.classList.add("btn-warning");
            op4.classList.remove("btn-primary");
            op1.classList.remove("btn-warning");
            op1.classList.add("btn-primary");
            op2.classList.remove("btn-warning");
            op2.classList.add("btn-primary");
            op3.classList.remove("btn-warning");
            op3.classList.add("btn-primary");
        }
        selected = op4.value;
    })

    // Grabbing the evaluate button
    const evaluate = document.getElementsByClassName("evaluate");

    // Evaluate method
    evaluate[0].addEventListener("click", () => {
        if (selected == "true") {
            result[0].innerHTML = "True";
            result[0].style.color = "green";
        } else {
            result[0].innerHTML = "False";
            result[0].style.color = "red";
        }
    })
}

if (start) {
    iterate("0");
}

// Next button and method
const next = document.getElementsByClassName('next')[0];
var id = 0;

next.addEventListener("click", () => {
    start = false;
    if (id < 2) {
        id++;
        iterate(id);
        console.log(id);
    }

})
