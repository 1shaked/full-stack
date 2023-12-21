function example(x: number | string, y: number | boolean) {
    if (typeof x === 'number' && typeof y === 'number') {
        console.log(x, y);
        let v = x + y;
        console.log(v);
        return ;
    }
    console.log(x, y);
}

export {};