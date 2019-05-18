function bublesort(arr){
    var x = arr.length;
    while(x > 1) {
        for(var i = 0; i <= arr.length-2; i++){
            if(arr[i]>arr[i+1]){
                var temp = arr[i];
                arr[i] = arr[i+1];
                arr[i+1] = temp;
            }
        }
        x -= 1;
    }
    return arr;
}
console.log(bublesort([2,4,8,3,7]))

// [2, 3, 4, 7, 8]






function bubbleSort (A,N){
    var flag = A;
    while(flag > 1 ){
        for( var i = 0; i <= A - 2; i++){
            if(N[i] > N[i + 1]){
                var temp = N[i];
                N[i] = N[i + 1];
                N[i + 1] = temp;
            }
        }
        flag -= 1;
    }
    return N ;
}
console.log(bubbleSort (5,[5, 3, 2, 4, 1]));

function bbbleSort  (A,N){
    var flag = A;
    var count = 0;
    while(flag > 1 ){
        for( var i = 0; i <= flag - 2; i++){
            if(N[i] > N[i + 1]){
                count += 1;
            }
        }
        flag -= 1;
    }
    return  count;
}
console.log(bbbleSort (5,[5,3,2,4,1]));