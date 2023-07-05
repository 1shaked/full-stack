class Computer {
    ram: number;
    ssd: number;
    private _chip: string;
    private _age: number;

    constructor(ramParam: number, ssdParam: number, chipParam: string) {
        this.ram = ramParam;
        this.ssd = ssdParam;
        this._chip = chipParam;
        this._age = 0;
    }
    printComputer () {
        console.log(`The ram ${this.ram}, the ssd is ${this.ssd}, and the chip is ${this._chip}`);
    }
    get chip(): string {
        return this._chip;
    }
    set age (n: number) {
        this._age = n;
    }



}

class Phone extends Computer {
    screenSize: number;

    constructor(screenSize: number, ramParam: number, ssdParam: number, chipParam: string) {
        super(ramParam, ssdParam, chipParam);
        this.screenSize = screenSize;
    
    }
}

let c = new Computer(16, 500 , 'M2');
c.age = 68