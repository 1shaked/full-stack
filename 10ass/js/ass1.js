/*

    create an object that have the following keys
    {
        name, age , width, parents , children
    }
    try delete and update 


    create an object that have the following keys line
    {
        x1 , x2, y1 , y2   and bonus create a 
        function that take the object and calculate the distance between the points  
        ((x1 - y1)^2 + (x2 - y2)^2)^1/2
    }

    calcDistance(line) -> The distance between the points is {}
*/

let user = {
    name: "",
    age: 25 ,
    width: 23,
    parents: {
        dad: 'nicha',
        mom: 'kler'
    }, 
    children: {
        child1: 'maya',
        child2: 'david'
    }
}

user.age = 22
user.parents.mom  = 'maya'
user.children.child1 = 'roni'

delete user.children



let line = { 
    x1: 4,
    y1: 0,
    x2: 0,
    y2: 3,
}

function calcDistance(lineForPoints) {
    let x_difference = lineForPoints.x1 - lineForPoints.x2;
    let x_difference_power = Math.pow(x_difference, 2 ) ;
    
    let y_difference = lineForPoints.y1 - lineForPoints.y2;
    let y_difference_power = Math.pow(y_difference, 2 ) ;
    
    let x_difference_plus_y = x_difference_power + y_difference_power;
    // let distance = Math.pow(x_difference_plus_y, 0.5);
    let distance = Math.sqrt(x_difference_plus_y);
    console.log('This distance is --> ' + distance );
}

calcDistance(line)

/*

    true || true -> true
    false || false -> false
    false || true -> true
    false || false || false || true -> true

    let age = 18
    let name = 'chen'

    if (age > 18 || name == 'chen') {
        console.log('if')
    } else {
        console.log('else')
    }

*/