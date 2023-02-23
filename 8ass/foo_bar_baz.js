let count = 1;
// if num / 2 -> foo
// else if num / 3 -> bar
// if num / 2 and num / 3 -> baz
debugger;
while (count <= 100) {

    console.log(count);
    let dev_by_3_and_2 =  0;
    let is_dev_by_3 = count % 3 == 0;
    let is_dev_by_2 = count % 2 == 0;
    if (is_dev_by_3) {
        dev_by_3_and_2 = dev_by_3_and_2 + 1;
    } 
    if (is_dev_by_2) {
        dev_by_3_and_2 = dev_by_3_and_2 + 1;
    } 
    if (dev_by_3_and_2 == 2) {
        console.log('baz');
    }
    if (dev_by_3_and_2 == 1) {
        if (is_dev_by_3) {
            console.log('bar')
        }   
        if (is_dev_by_2) {
            console.log('foo')
        }   
    }
    count = count + 1;
}

/*

12
dev_by_3_and_2 = 0 

if (12 % 3 == 0 ) {
    dev_by_3_and_2 = dev_by_3_and_2 + 1;
}
if (12 % 2 == 0 ) {
    dev_by_3_and_2 = dev_by_3_and_2 + 1;
}
*/