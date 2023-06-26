// numeric enum

enum RequestType{
    readData =1,
    saveData = 3,
    deleteData,

}

console.log(RequestType);

// console.log(RequestType.readData);
console.log(RequestType["readData"]);

// string enum

enum RequestType2{
    readData= "READ_DATA",
    deleteData = "DELETE_DATA"
}


// console.log(RequestType2.deleteData);
console.log(RequestType2["deleteData"]);


// heterogenous enum

enum RequestType3{
    readData= "READ_DATA",
    deleteData = "DELETE_DATA",
    id= 1014
}