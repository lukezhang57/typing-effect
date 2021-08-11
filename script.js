const words = ['run','bike','code','go outdoors', 'learn','challenge myself','explore']
let listindex = 0;
let wordindex = 0;
let letter = '';
let atEnd = false;

function type(){
    if (!atEnd){
        if (listindex == words.length){
            listindex = 0;
        }
        if (wordindex < words[listindex].length){
            letter = words[listindex].slice(0,++wordindex);
            document.querySelector('.word').textContent = letter;
        }
        else if (wordindex === words[listindex].length){
            document.querySelector('.word').textContent = letter;
            document.querySelector('.period').textContent = ".";
            wordindex+=20;
        }
        else if (wordindex > words[listindex].length){
            atEnd = true;
        }
        if (words[listindex].length <= 6){
            setTimeout(type, 250) 
        }
        else {
            setTimeout(type, 150) 
        }
    }
    else {
        if (wordindex > words[listindex].length){ 
            letter = words[listindex].slice(0,words[listindex].length+1);
        }
        else{
            document.querySelector('.period').textContent = "";
            letter = words[listindex].slice(0,wordindex);
            document.querySelector('.word').textContent = letter;
        }
        wordindex--;
        if (wordindex < 0){
            atEnd = false;
            listindex++;
            wordindex = 0;
        }
        setTimeout(type, 50) 
    }
}; 

type();
