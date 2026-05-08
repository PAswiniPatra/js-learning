const userArr = [1,2,3,4]
let tempArr = []
let outputArr = []

// main logic
for (let i = 0; i < userArr.length; i++) {
    if (tempArr.length === 0) {
        tempArr[0] = userArr[i]
    }
    
    if (userArr[i] < userArr[i+1]) {
        tempArr.push(userArr[i+1])
    }
    else if (tempArr.length > outputArr.length) {
        outputArr = [...tempArr]
        tempArr = []
    }
    
}

if (tempArr.length > outputArr.length) {
    outputArr = [...tempArr]
}

console.log(outputArr);
