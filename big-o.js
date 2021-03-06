'use strict'

function addUpToFaster(n) {
    return n * (n + 1) / 2;
}

const time1 = performance.now();
addUpToFaster(1000000000);
const time2 = performance.now();
console.log(`Time Elapsed: ${(time2 - time1) / 1000} seconds.`)



function addUpToSlower(n) {
    let total = 0;
    for (let i = 1; i <= n; i++) {
        total += i;
    }
    return total;
}

const t1 = performance.now();
addUpToSlower(1000000000);
const t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds.`)