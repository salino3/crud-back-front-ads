function error(msg, code) {
 let err = new Error(msg);

 if(code){
    err.statusCode = code;
 };

 return err;
};


module.exports = error;



