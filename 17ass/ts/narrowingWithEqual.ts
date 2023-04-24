function example(x: number | string, y: number | boolean) {
    if (typeof x === 'number' && typeof y === 'number') {
        console.log(x, y);
        let v = x + y;
        console.log(v);
    }
    
}

export {};