import * as yup from 'yup'

export const registerSchema = yup.object().shape({
    username: yup
              .string()
              .required()
              .min(3)
              .max(20),
    email:    yup
              .string()
              .email()
              .required(),
    password:
             yup
             .string()
             .required()
             .min(7),
    TOS:     yup
             .boolean()
             .oneOf([true])
});