const runValidation = (value) => ([validationFn, errorStr]) => validationFn(value) ? '' : errorStr;
const getErrorMessage = ([_, errorStr]=[]) => errorStr;

export const validate = (value, validationTuples) => getErrorMessage(validationTuples.find(runValidation(value)));

export const required = (x) => Boolean(x);
export const pattern = (pattern) => (x) => pattern.test(x);
export const equalTo = (y) => (x) => x === y;
export const not = (fn) => (x) => !fn(x);
export const minlenght = (length) => (x) => x.length >= length;
export const maxlenght = (length) => (x) => x.length <= length;

export const containsWhiteSpace = (x) => /^(.*\s+.*)+$/.test(x);
export const containsLowercase = (x) => /(?=.*[a-z])/.test(x);
export const containsUppercase = (x) => /(?=.*[A-Z])/.test(x);
export const containsDigit = (x) => /(?=.*\d)/.test(x);
export const containsSpecialCharacters = (x) => /(?=.*[!$%&*+,@-])/.test(x);