var input_element;
var wordlist_container;

var words = [
    'cat',
    'dog',
    'bat'
];

//create input so users can add words
input_element = document.createElement('input');
input_element.setAttribute('id','word_input');
input_element.setAttribute('placeholder','new word');

wordlist_container = document.createElement('div');


 //hit enter to add a word
    input_element.addEventListener('keydown',function(event){
       if(event.keyCode === 13){
            element = document.createElement('p');
        
           element.textContent = this.value;
           wordlist_container.appendChild(element);
           //console.log(this);
          this.parentNode.insertBefore(element, this.nextSibling);
           this.value = null;
       };
    });


//when webpage loads
document.addEventListener('DOMContentLoaded',function(){
    
    //append to body
    document.body.appendChild(input_element);
    document.body.appendChild(wordlist_container);
    
    //console.log(input_element);
    
    
    
    //create word list
    words.forEach(function(words){
        //console.log(words);
        element = document.createElement('p');
        element.textContent = words;
        document.body.appendChild(element);
    });
   
   
   
 
   //double click to delete word from list 
   wordlist_container.addEventListner('dblclick',function(event){
       this.remove();
   });
    
});





//word.split('')  to split word