

function printMyName(name) {
    console.log(name);
}

function activatePrint(func, activatePrintName) {
    func(activatePrintName);
}

activatePrint(printMyName , 'max')
activatePrint('max', printMyName) // func = 'max' , activatePrintName = printMyName // Error




function activatePrint2(activatePrintName , func) {
    func(activatePrintName);
}
activatePrint2('max', printMyName)


// func1(func2)
// func2(func3)


// func(func1 , func2 , value) -> func1(value) and func2(value) == true -> true