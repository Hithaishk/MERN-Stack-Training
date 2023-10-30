const isValid = function(value){
    if (typeof value === "undefined" || value ===null)return flase;
    if (typeof value === "string" && value.trim().length ===0) return false;
    if (typeof value === Number && value.trim().length ===0) return flase;
    return true;
};
let isValidBody = function (body){
    return Object.keys(body).length>0;
};

let isValidName=/^[a-zA-Z]*$/;
let isValidEmail=/^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
let isValidMobile=/^(?:(?:\+|0{0,2})91(\s*[\-]\s*)?|[0]?)?[6789]\d{9}$/;
module.exports ={isValid,isValidBody,isValidName,isValidEmail,isValidMobile}