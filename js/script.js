var input_element;
var words;
var wordlist_container;
var current_word;
var new_word;

words = [
    
    'cat',
    'dog',
    'bat'
    
];

//create input so users can add words
input_element = document.createElement('input');
input_element.setAttribute('id','word_display');
input_element.setAttribute('placeholder','new word');

//hit enter to add a word
input_element.addEventListener('keydown',function(event){
    if(event.keyCode === 13){
        new_word = document.createElement('p');
        new_word.textContent = this.value;
        wordlist_container.children[0].parentElement.insertBefore(new_word, wordlist_container.children[0]);
        this.value = null;
            
            //remove word from list
            new_word.addEventListener('dblclick',function(event){
                this.remove();
            });
        };
    
    });

//container to hold list
wordlist_container = document.createElement('div');
wordlist_container.setAttribute('id','wordlist');

var create_words = function(element_type,element_id){
    var element = document.createElement(element_type);
    element.setAttribute('id',element_id);
    wordlist_container.appendChild(element);
    
};

//when webpage loads
document.addEventListener('DOMContentLoaded',function(event){
    
    //append to body
    document.body.appendChild(input_element);
    document.body.appendChild(wordlist_container);
    
    //loop to create words
    for(var i=0; i<words.length; i++){
        create_words('p','word_'+i);
        current_word = document.getElementById('word_'+i);
        current_word.textContent = words[i];
        
        
        current_word.addEventListener('dblclick',function(event){
            this.remove();
            
        });
        
    };
    
    
    
    
});





//word.split('')  to split word