
const subBut = document.getElementById("submit-btn");
subBut.addEventListener("click", function(){
    const input = document.getElementById("name");
    console.log(input.value);
});

//might need to validate first

function encode(text, key)
{
    console.log(text)

    encoded_text = "";
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let index = 0; index < text.length; index++)
    {
        console.log((alphabet.search(text.charAt(index)) + key))
        console.log((alphabet.search(text.charAt(index)) + key) % 26)
        //the % shifts the letter back to the beginning if it goes over 26
        encoded_text += alphabet[(alphabet.search(text.charAt(index)) + key) % 26]
    }
    console.log(encoded_text)

}

function decode(text, key)
{
    console.log(text)

    encoded_text = "";
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let index = 0; index < text.length; index++)
    {
        //NOTE: js doesn't handle negative indexing
        //i think i need an if states doing, doing what i did in python, unless i gt a nagative number, then use + // last left off
        
        console.log((alphabet.search(text.charAt(index)) - key))
        //console.log((alphabet.search(text.charAt(index)) - key) % 26)
        //console.log((alphabet.search(text.charAt(index)) - key) + 26)
        //the % should shift the letter to the end if it goes under 0
        
        //encoded_text += alphabet[(alphabet.search(text.charAt(index)) - key) % 26]
        //encoded_text += alphabet[(alphabet.search(text.charAt(index)) - key) + 26]
        console.log(encoded_text)
    }
    console.log(encoded_text)
}