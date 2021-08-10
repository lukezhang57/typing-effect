const words = ['run','bike','code','explore','seehowlongyoucanreadthiswithouttakingyoureyesoff']
let listindex = 0;
let wordindex = 0;
let letter = '';

function type(){
    if (listindex == words.length){
        listindex = 0;
    }
    letter = " " + words[listindex].slice(0,++wordindex);
    document.querySelector('.word').textContent = letter;
    if (wordindex === words[listindex].length){
        letter = letter + ".";
        document.querySelector('.word').textContent = letter;
        listindex++;
        wordindex = 0;
    }
    setTimeout(type,300)    
}; 

type(); 