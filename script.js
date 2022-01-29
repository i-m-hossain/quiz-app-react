console.log("hello");

function myFunc(callback) {
    return `I called ${callback()}`;
}
function callback() {
    let sum = 0;
    let i = 0;
    while (i < 1000000000) {
        sum = sum + i;
        i++;
    }
    return sum;
}
const promise = new Promise(function (resolve, reject) {
    resolve(myFunc(callback));
    reject("error");
});

promise
    .then(function (value) {
        console.log(value);
    })
    .catch((err) => err);

console.log("hi");
