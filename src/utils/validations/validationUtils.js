const runValidation = (value) => ([validationFn, errorStr]) => validationFn(value) ? '' : errorStr;
const getErrorMessage = ([_, errorStr]=[]) => errorStr;

export const validate = (value, validationTuples) => getErrorMessage(validationTuples.find(runValidation(value)));

export const required = (x) => !!x;
export const minlenght = (length) => (x) => x.length >= length;
export const maxlenght = (length) => (x) => x.length <= length;
export const exactlength = (length) => (x) => x.length === length;
export const equalTo = (y) => (x) => x === y;
export const differentFrom = (y) => (x) => x !== y;
export const nonEmptyCollection = (x) => x.size !== 0;
export const not = (fn) => (x) => !fn(x);
