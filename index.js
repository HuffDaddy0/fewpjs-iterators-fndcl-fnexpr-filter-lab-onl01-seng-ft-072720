function findMatching(array, stringInput){
    const solution = array.filter(function(string, stringInput){
        const standardString = stringInput.split("").map(letter => letter.toLowerCase())
        debugger
        return string === standardString
    })
    return solution
};

function fuzzyMatch(array, string){
    array.find(function(index){
        return index.charAt(0) === string.charAt(0)
    });
};

