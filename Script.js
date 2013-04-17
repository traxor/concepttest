var i = 0;
var j = 10;

function addform() {

    var parentdiv = document.getElementById("answerfield");

    document.getElementById("counter").value++;
                        
    i++;
    j++;

    var text = document.createElement();
    text.innerHTML = "Answer " + (i) + ": ";

    var correcttext = document.createElement();
    correcttext.innerHTML = "Correct: ";

    var newrow = document.createElement();
    newrow.innerHTML = "<br/>";

    var Answer = document.createElement("input");
    Answer.setAttribute("type", "text");
    Answer.setAttribute("name", i);
    Answer.setAttribute("value", "");

    var checkbox = document.createElement("input");
    checkbox.type = "Checkbox";
    checkbox.name = j;
    checkbox.value = "correct";

    parentdiv.appendChild(text);
    parentdiv.appendChild(Answer);
    parentdiv.appendChild(correcttext);
    parentdiv.appendChild(checkbox);
    parentdiv.appendChild(newrow);

}

function updatelectures() {

    var lectures = document.getElementById("lectures");
    document.forms["Submit"].submit();
}
     