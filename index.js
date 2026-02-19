/*
const subBut = document.getElementById("submit-btn");
subBut.addEventListener("click", function(){
    const input = document.getElementById("name");
    console.log(input.value);
});
*/

function getText()
{
    const subBut = document.getElementById("sub-but");
    subBut.addEventListener("click", function(){
        const input = document.getElementById("input");
        console.log(input.value);
    });
    return input.value
}

function getKey()
{
    const keyBut = document.getElementById("key-but");
    keyBut.addEventListener("click", function(){
        const keyIn = document.getElementById("key");
        console.log(keyIn.value);
    });
}

//might need to validate first

function encode()
{
    console.log(Number("A"))
    //console.log(input.value);

    //const text = getText();
    const text = document.getElementById("input").value;
    console.log(text);

    const key = Number(document.getElementById("key").value);
    console.log(key);

    if(text == "" || (key == "" || key < 1))
    {
        console.log("nothing");
    }
    else
    {
        //text = input.value
        console.log(text);

        encoded_text = "";
        alphabet = "abcdefghijklmnopqrstuvwxyz";
        for(let index = 0; index < text.length; index++)
        {
            console.log((alphabet.search(text.charAt(index)) + key));
            console.log((alphabet.search(text.charAt(index)) + key) % 26);
            //the % shifts the letter back to the beginning if it goes over 26
            encoded_text += alphabet[(alphabet.search(text.charAt(index)) + key) % 26];
        }
        console.log(encoded_text);

        const output = document.createElement("h1");
        output.textContent = `Output: ${encoded_text}`;
        const body = document.getElementsByTagName("body")[0];
        body.appendChild(output);
    }
}

function decode(text, key)
{
    console.log(text);

    encoded_text = "";
    alphabet = "abcdefghijklmnopqrstuvwxyz";
    for(let index = 0; index < text.length; index++)
    {
        console.log((alphabet.search(text.charAt(index)) - key))
        if((alphabet.search(text.charAt(index)) - key) >= 0)
        {
            encoded_text += alphabet[(alphabet.search(text.charAt(index)) - key) % 26];
        }
        else
        {
            encoded_text += alphabet[(alphabet.search(text.charAt(index)) - key) + 26];
        }

        console.log(encoded_text);
    }
    console.log(encoded_text);
}