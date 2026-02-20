function encode()
{
    const text = document.getElementById("input").value.toLowerCase();
    const key = Number(document.getElementById("key").value);
    if(text != "" && (key != "" && key > 0))
    {
        encoded_text = "";
        alphabet = "abcdefghijklmnopqrstuvwxyz";
        for(let index = 0; index < text.length; index++)
        {
            if(alphabet.includes(text.charAt(index))) //checks for special letters
            {
                //the % shifts the letter back to the beginning if it goes over 26
                encoded_text += alphabet[(alphabet.search(text.charAt(index)) + key) % 26];
            }
            else
            {
                encoded_text += text.charAt(index)
            }
            
        }
        const output = document.createElement("h1");
        output.textContent = `Encoded Output: ${encoded_text}`;
        const body = document.getElementsByTagName("body")[0];
        if(body.children.length > 12) //removes the output if a button is pressed again
        {
            body.removeChild(body.lastChild)
        }
        body.appendChild(output);
    }
}

function decode()
{
    const text = document.getElementById("input").value.toLowerCase();
    const key = Number(document.getElementById("key").value);
    if(text != "" && (key != "" && key > 0))
    {
        encoded_text = "";
        alphabet = "abcdefghijklmnopqrstuvwxyz";
        for(let index = 0; index < text.length; index++)
        {
            if(alphabet.includes(text.charAt(index))) //checks for special letters
            {
                if((alphabet.search(text.charAt(index)) - key) >= 0)
                {
                    encoded_text += alphabet[(alphabet.search(text.charAt(index)) - key) % 26];
                }
                else
                {
                    encoded_text += alphabet[(alphabet.search(text.charAt(index)) - key) + 26];
                }
            }
            else
            {
                encoded_text += text.charAt(index)
            }
        }
        const output = document.createElement("h1");
        output.textContent = `Decoded Output: ${encoded_text}`;
        const body = document.getElementsByTagName("body")[0];
        if(body.children.length > 12) //removes the output if a button is pressed again
        {
            body.removeChild(body.lastChild)
        }
        body.appendChild(output);
    }
}