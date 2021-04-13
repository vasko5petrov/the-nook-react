import { connect } from 'react-redux';

export default ({ form, registerActions, validate, field }) => (ComposedComponent) => {
    return @connect((store) => ({
        form: store[form],
        value: store[form].getIn(['values', field]),
        error: store[form].getIn(['clientErrors', field]) || store[form].getIn(['serverErrors', field])
    }))
    class extends ComposedComponent {
        static displayName = `FormField${ComposedComponent.displayName || ComposedComponent.name}`

        handleFieldChange = (e) => {
            this.props.dispatch(registerActions.updateField({field, value: e.target.value}));
        }

        handleFieldValidate = () => {
            const errors = validate(this.props.form.get('values'));
            this.props.dispatch(registerActions.updateError({field, value: errors.get(field)}));
        }
    };
};
