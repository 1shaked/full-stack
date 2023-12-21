function padLeft(padding: number | string, input: string) {
    if (typeof padding === "number") {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}

// padLeft(5 , "Hello world") // returns "     Hello world"
// padLeft("Hello world", "Hello world") // returns "Hello worldHello world"


console.log(padLeft(4, "Hello world"));
function example1(padding: number | string, input: string) {
    const isNum = typeof padding === "number";
    if (isNum) {
        return " ".repeat(padding) + input;
    }
    return padding + input;
}










function example (a: string | number  ) {

    console.log(a);
    if (typeof a == "string") {
        console.log(a.toUpperCase());
        return ;
    }
    console.log(a * a );
}


















export {};