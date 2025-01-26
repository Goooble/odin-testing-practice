function cipher(string, shift){
    return string.split("").map(shifter).join("");



    function shifter(char){
        let charCode = char.codePointAt();
        let newCode = charCode + shift;
        if((charCode >= 65 && charCode <= 90) || (charCode >= 97 && charCode <= 122))
        {   
            if(newCode > 90 && charCode <= 90){
                newCode = 64 + (newCode - 90);
            }
            if(newCode > 122){
                newCode = 96 + (newCode - 122);
            }
            return(String.fromCharCode(newCode))}
        else{
            return String.fromCharCode(charCode)
        }
        
    }
    
}

module.exports = cipher;