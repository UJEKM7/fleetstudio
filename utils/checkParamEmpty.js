const checkParamEmpty = (req, paramArray) => {
    const errorValues = [null, undefined, ""," ", NaN, "\n"];
    const result = paramArray.filter(e => errorValues.includes(req[e]));
    if(result.length){
        return {result, success:false};
    }
    return {result:[], success: true};
}

module.exports = checkParamEmpty;