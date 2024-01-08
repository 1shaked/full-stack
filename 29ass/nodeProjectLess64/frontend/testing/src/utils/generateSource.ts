export function generateSource (n : number) {
    const arr_sources: [number , number][] = []
    for (let i = 1; i < n; i++) {
        // check if this is a source
        if (n % i !== 0) continue;
        arr_sources.push([i , n / i]);
    }
    return arr_sources;
}