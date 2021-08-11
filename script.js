const words = ['run','bike','code','go outdoors', 'learn','challenge myself']
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
            letter = letter + ".";
            document.querySelector('.word').textContent = letter;
            wordindex++;
        }
        else if (wordindex > words[listindex].length){
            atEnd = true;
        }
        if (words[listindex].length <= 5){
            setTimeout(type,300) 
        }
        else {
            setTimeout(type,150) 
        }
    }
    else {
        if (wordindex > words[listindex].length){ 
            letter = words[listindex].slice(0,words[listindex].length);
            wordindex--;
        }
        letter = words[listindex].slice(0,wordindex);
        document.querySelector('.word').textContent = letter;
        wordindex--;
        if (wordindex < 0){
            atEnd = false;
            listindex++;
            wordindex = 0;
        }
        setTimeout(type,100) 
    }
    
}; 

type();
