// import validate from 'react-joi-validation';
import Joi from "joi";
export const loginSchema = Joi.object().keys({
    email: Joi.string()
        .email({ tlds: { allow: false } })
        .required()
        .error((errors) => {
            errors.forEach((err) => {
                switch (err.code) {
                    case "string.empty":
                        err.message = "please_enter_your_email";
                        break;
                    case "string.email":
                        err.message = "please_enter_a_valid_email";
                        break;
                    default:
                        break;
                }
            });
            return errors;
        }),
    password: Joi.string()
        .min(8)
        .required()
        .error((errors) => {
            errors.forEach((err) => {
                switch (err.code) {
                    case "string.empty":
                        err.message = "please_enter_your_password";
                        break;
                    case "string.min":
                        err.message = "pwd_len_should_be_gre_than_8";
                        break;

                    default:
                        break;
                }
            });

            return errors;
        }),
});
