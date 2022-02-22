
function findlength(num){
    let numstr=num.toString();
    if(numstr.length!=10)
        return true;
    return false;
}

module.exports={
    findlength: findlength
}