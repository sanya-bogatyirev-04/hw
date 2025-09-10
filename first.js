<<<<<<< HEAD
function degree(x, y){
    
    if (y > 0){
        return x * degree(x, --y);
    }
    
    else if (y < 0){
        return 1/degree(x, -y);
    }
    else if (y === 0)
        return 1;
=======
function phrase( name, age ){
    console.log(`Привет, ${name}, вам ${age} лет`);
    console.log('привет из гита');
>>>>>>> 4f902d0fea41a929717f5e62830f5e38aa4695a7
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