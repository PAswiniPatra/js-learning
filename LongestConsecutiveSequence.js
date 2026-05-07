const a = [100, 4, 200, 2, 3, 99,99, 98, 97]
let temparr = []
let outputarr = []
let temp;

for (let i = 0; i < a.length; i++) {
    for (let j = 0; j < a.length - 1; j++) {
        if (a[j] > a[j + 1]) {
            temp = a[j + 1]
            a[j + 1] = a[j]
            a[j] = temp
        }

    }
}

//main logic
for (let i = 0; i < a.length;i++) {

    if (temparr.length === 0) {
        temparr[0] = a[i]
    }

    if(a[i] === a[i +1]){
        continue;
    }

    if (a[i] + 1 === a[i + 1]) {
        temparr.push(a[i + 1])
    }
    else {
        if (temparr.length > outputarr.length) {
            outputarr = [...temparr];
        }
        temparr = [];
    }
}
if (temparr.length > outputarr.length) {
    outputarr = [...temparr]
}


console.log(outputarr, outputarr.length);