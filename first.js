function phrase( name, age ){
    console.log(`Привет, ${name}, вам ${age} лет`);
}

function together( array ){
    console.log(array.join(''));
}

var user = {
    name: "Sasha", 
    age: 20
};
phrase(user.name, user.age);

var mass = ['s', 'a', 's', 'h', 'a'];
together(mass);
