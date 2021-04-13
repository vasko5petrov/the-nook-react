import formField from 'components/decorators/formField';
import validate from 'utils/validations/registerForm';
import * as registerActions from 'store/modules/registerForm';

export default ({ field }) => formField({form: 'registerForm', registerActions, validate, field });