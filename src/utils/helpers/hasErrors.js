const hasErrors = (fields, errors) => fields.some((field) => errors.get(field));

export default hasErrors;