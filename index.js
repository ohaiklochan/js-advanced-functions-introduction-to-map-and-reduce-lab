// Your code here

function mapToNegativize(sourceArray) {
    return sourceArray.map(x => x * -1)
};

function mapToNoChange(sourceArray) {
    return sourceArray.map(x => x)
};

function mapToDouble(sourceArray) {
    return sourceArray.map(x => x * 2)
};

function mapToSquare(sourceArray) {
    return sourceArray.map(x => x * x)
};

function reduceToTotal(sourceArray, startingPoint = 0) {
    const total = function(valueOne, valueTwo) {
        return valueOne + valueTwo
    };
    return sourceArray.reduce(total, startingPoint)
};

function reduceToAllTrue(sourceArray) {
    const sum = function(valueOne, valueTwo) {
        if(!!valueOne === true && !!valueTwo === true) {
            return true;
        }
        else {
            return false;
        }
    }
    return sourceArray.reduce(sum, true)
}

function reduceToAnyTrue(sourceArray) {
    const sum = function(valueOne, valueTwo) {
        if (valueOne === true) {
            return true;
        }
        else {
            return !!valueTwo;
        }
    }
    return sourceArray.reduce(sum, false)
}
