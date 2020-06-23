/* eslint-disable import/prefer-default-export */

import Joi from '@hapi/joi';

class Schema {
  /**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */
  static signup(data) {
    const schema = Joi.object({
      phoneNumber: Joi.string()
        .lowercase()
        .trim()
        .required()
        .error((errors) => {
          errors.forEach((err) => {
            switch (err.type) {
              case 'string.regex.base':
                err.message = 'phone number can only contain letters';
                break;
              default:
                break;
            }
          });
          return errors;
        }),
        firstName: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
          'string.base': 'firstName must be a string',
          'string.min': 'firstName length must be at least {{#limit}} characters long',
          'string.max': 'firstName length must be less than or equal to {{#limit}} characters long',
          'any.required': 'firstName is required',
          'string.empty': 'firstName is not allowed to be empty'
        }),
        lastName: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
          'string.base': 'lastName must be a string',
          'string.min': 'lastName length must be at least {{#limit}} characters long',
          'string.max': 'lastName length must be less than or equal to {{#limit}} characters long',
          'any.required': 'lastName is required',
          'string.empty': 'lastName is not allowed to be empty'
        }),
      userName: Joi.string()
        .min(3)
        .max(30)
        .required()
        .messages({
          'string.base': 'userName must be a string',
          'string.min': 'userName length must be at least {{#limit}} characters long',
          'string.max': 'userName length must be less than or equal to {{#limit}} characters long',
          'any.required': 'userName is required',
          'string.empty': 'userName is not allowed to be empty'
        }),
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .messages({
          'string.base': 'email must be a string',
          'string.email': 'email must be a valid email',
          'any.required': 'email is required',
          'string.empty': 'email is not allowed to be empty'
        }),
      isVerified: Joi.boolean(),
      role: Joi.string().valid('super-administrator', 'mineduc-staff', 'district-staff', 'sector-staff', 'cell-staff', 'head-master', 'dos', 'teacher', 'parent').required(),
      password: Joi.string()
        .min(8)
        .max(64)
        .required()
        .pattern(/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)/)
        .messages({
          'string.base': 'password must be a string',
          'string.min': 'password length must be at least {{#limit}} characters long',
          'string.max': 'password length must be less than or equal to {{#limit}} characters long',
          'any.required': 'password is required',
          'string.pattern.base': 'password must include at least a number and a capital letter',
          'string.empty': 'password is not allowed to be empty'
        }),
    });

    return schema.validate(data);
  }
  /**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */

  static loginchema(data) {
    const schema = Joi.object({
      email: Joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .messages({
          'string.base': 'email must be a string',
          'string.email': 'email must be a valid email',
          'any.required': 'email is required',
          'string.empty': 'email is not allowed to be empty'
        }),
      password: Joi.string()
        .max(64)
        .required()
        .messages({
          'string.max': 'password length must be less than or equal to {{#limit}} characters long',
          'any.required': 'password is required',
          'string.empty': 'password is not allowed to be empty'
        }),
    });
    return schema.validate(data);
  }

  /**
  * @static
  * @param {obj} data
  * @returns {obj} returns schema object
 */
  static assignRole(data) {
    const schema = Joi.object({
      email: Joi.string()
        .email()
        .required()
        .messages({
          'string.base': 'email must be a string',
          'string.email': 'email must be a valid email',
          'any.required': 'email is required',
          'string.empty': 'email is not allowed to be empty'
        }),
      roleName: Joi
        .string()
        .trim()
        .valid(
          'super-admin',
          'admin',
          'vendor',
          'user',
          'guest',
          'other'
        )
        .required()
    });

    return schema.validate(data);
  }


}

export default Schema;
