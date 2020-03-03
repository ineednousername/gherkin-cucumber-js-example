class Adder {

    constructor() {
        this.i = Number(0.0);
    };

    add(aValue){
        if(isNaN(aValue))
            throw new Error("Adder only supports numbers");
        this.i+=aValue;
    }

    result(){
        return this.i;
    }
}

module.exports = Adder;