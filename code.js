let word = "fruit"


function getWord() {

    let wordCount = parseInt(document.getElementById("count").innerHTML);
    let uword = [];

    // select correct word from HTML
    switch (wordCount) {
        case 0:
            uword = document.getElementsByClassName('a')
            break;
        case 1:
            uword = document.getElementsByClassName('b')
            break;
        case 2:
            uword = document.getElementsByClassName('c')
            break;
        case 3:
            uword = document.getElementsByClassName('d')
            break;
        case 4:
            uword = document.getElementsByClassName('e')
            break;
        case 5:
            uword = document.getElementsByClassName('f')
            break;
        case 6:
            alert("Game over. Word was " + word);

    }

    // send each letter to get checked
    for (let [key, name] of Object.entries(uword)) {
        checkLetter(name, key);
        checkAlphabet(name, key);
    }

    // update count
    document.getElementById("count").innerHTML = wordCount + 1;

            

    

}

function checkAlphabet(e, c) {
    let arg = "_" + e;

    if (c == 'g') {
        document.getElementById(arg).style.backgroundColor = 'green';
        document.getElementById(arg).style.color = "white";
    }
    else if (c == 'y') {
        document.getElementById(arg).style.backgroundColor = 'yellow';
        document.getElementById(arg).style.color = "black";
    }
    
}

function checkLetter(e,i){
    let ul1 = e.value.toLowerCase();
    let rl1 = word[i].toLowerCase();
    let bool = 0;
    if(ul1 == rl1){
        e.style.backgroundColor = "green";
        checkAlphabet(ul1, 'g');
    } else if(word.indexOf(ul1) > -1){
        e.style.backgroundColor = "yellow";
        e.style.color = "black";
        checkAlphabet(ul1, 'y');
    } else {
        e.style.backgroundColor = '#444';
    }   
}



