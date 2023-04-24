function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}

console.log(padLeft(4, "Hello world"));
function example1(padding: number | string, input: string) {
    const isNum = typeof padding === "number";
    if (isNum) {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}


export {};