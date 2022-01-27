const arry = [1, 2, 3, 4, 5];
/*
for (let i = 0; i < 5; i++) {
    console.log(arry[i]);
}

 */
// 値を持ってくる
for (let v of arry) {
    console.log(v);
}

// 添字を持ってくる
for (let i in arry) {
    console.log(i);
}