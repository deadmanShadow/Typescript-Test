const createError = (msg: string): never => {
    throw new Error(msg);
}

//  Custom type guard 
const isNumber = (value: any): boolean => {
    return typeof value === "number" ? true : false;
};

// use of NEVER type
const numberOfString = (value : number | string): string => {
    if (typeof value === "string") return "string";
    if (isNumber(value)) return "number";
    return createError ("Something went wrong");
};
