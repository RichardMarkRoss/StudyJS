var array = ['a', 'b', 'c', 'b', 'e', 'f'];

function method1(param) {
    var arrayList = param;
    arrayList = [];
    console.log(arrayList);
}

function method2(param) {
    var arrayList = param;
    arrayList.spice(0, arrayList.length);
    console.log(arrayList);
}

function method3(param) {
    var arrayList = param;
    arrayList.length = 0;
    console.log(arrayList);
}

function method4(param) {
    var arrayList = param;
    arrayList.pop();
    console.log(arrayList);
}