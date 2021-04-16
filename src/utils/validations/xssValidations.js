export const validFreeText = {
    pattern: /^[a-zA-Z0-9-.'\s]*$/,
    message: 'Only letters (a-z), numbers (0-9), spaces and following characters: . - \''
};

export const validEmail = {
    pattern: /^\w+([-.']\w+)*@\w+([-.]\w+)*\.\w+([-.]\w+)*$/,
    message: 'Only letters (a-z), numbers (0-9), underscore and following characters: . - \' @'
};