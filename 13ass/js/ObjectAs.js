

function assign (target, source) {
    let keys = Object.keys(source);
    for (let index = 0; index < keys.length; index = index + 1) {
        let key = keys[index];
        let value = source[key];
        target[key] = value;
    }
    return target;
}

let car = {brand: 'lambo', model: 'ventador', year: 2009};
let K = assign({}, car)