// push
var arr=[1,2,3,4,5];
console.log("before push "+arr)
arr.push(6);
console.log("after push "+arr);

// pop
var arr1=[1,2,3,4,5];
console.log("before pop "+arr1)
arr1.pop();
console.log("after pop "+arr1);

// unshift
var arr2=[1,2,3,4,5];
console.log("before unshift "+arr2)
arr2.unshift(6);
console.log("after unshift "+arr2);

// shift
var arr3=[1,2,3,4,5];
console.log("before shift "+arr3)
arr3.push(6);
console.log("after shift "+arr3);

// slice
var arr4=[1,2,3,4,5];
console.log("before slice "+arr4)
var newarr= arr4.slice(0,2);
console.log("after slice "+newarr);

// splice to remove
var arr5=[1,2,3,4,5];
var newarr1 = arr5.splice(0,3);
console.log("removed splice "+newarr1);
console.log("splice "+arr5)

// splice to add
var arr5=[1,2,3,4,5];
var newarr2 = arr5.splice(1 ,0,6,7,8);
console.log("reoved splice "+newarr2);
console.log("added splice "+arr5)

// program
var evenarr=[];
var oddarr=[];
for(let i=10;i<20;i++){
    if(i%2==0)
    {
        evenarr.push(i);

    }
    else{
        oddarr.push(i);
    }
}
console.log("the even element are :"+evenarr);
console.log("the odd element are :"+oddarr);

// split
var str="hi this is me";
var split = str.split(" ",3);
console.log(split);