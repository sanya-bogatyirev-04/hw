function degree(x, y){
    
    if (y > 0){
        return x * degree(x, --y);
    }
    
    else if (y < 0){
        return 1/degree(x, -y);
    }
    else if (y === 0)
        return 1;
}

console.log(degree(2, -3));
console.log(degree(2, 3));
console.log(degree(2, 0));


function getCounter (start = 0){
    let count = start;

    function counter(){
        count++
        return count;
    }

    counter.reset = function(){
        count = start;
        return count;
    };
    return counter;
}

let a = getCounter();

console.log(a());
console.log(a());
console.log(a());
console.log(a.reset());