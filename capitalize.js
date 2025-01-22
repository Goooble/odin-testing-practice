function capitalize(string){
    return string.split("").map((letter, index) => {
        if(index === 0){
            return letter.toUpperCase();
        }
        return letter
    }).join("");
}

module.exports = capitalize;