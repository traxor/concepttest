var i = 0;
var j = 10;

/*This function could probably be improved*/
function addform() {
    
    if (i > 9)
        return;

    var parentdiv = document.getElementById("answerfield");

    document.getElementById("counter").value++;
                        
    i++;
    j++;

    var text = document.createElement("text");
    text.innerHTML = "Answer " + (i) + ": ";

    var correcttext = document.createElement("text");
    correcttext.innerHTML = " Correct: ";

    var newrow = document.createElement("text");
    newrow.innerHTML = "<br/>";

    var Answer = document.createElement("input");
    Answer.type = "text"
    Answer.id = i;
    Answer.name = i;
    Answer.value = "";

    var checkbox = document.createElement("input");
    checkbox.type = "Checkbox";
    checkbox.id = j;
    checkbox.name = j;
    checkbox.value = "correct";

    parentdiv.appendChild(text);
    parentdiv.appendChild(Answer);
    parentdiv.appendChild(correcttext);
    parentdiv.appendChild(checkbox);
    parentdiv.appendChild(newrow);

}

function removeform(){

    if (i <= 0)
        return;

    var parentdiv = document.getElementById("answerfield");

    document.getElementById("counter").value--;
    


    var answer = document.getElementById(i);
    var checkbox = document.getElementById(j);

    i--;
    j--;

    for (k = 0; k < 5; k++) {
        parentdiv.removeChild(parentdiv.lastChild);
    }
}

function updatelectures() {

    //var lectures = document.getElementById("lectures");
    document.forms["Submit"].submit();
}
     