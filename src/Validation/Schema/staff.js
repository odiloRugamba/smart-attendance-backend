/* eslint-disable import/prefer-default-export */

import Joi from '@hapi/joi';

class Schema {
  /**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */
  static createStaff(data) {
    const schema = Joi.object({
      phone: Joi.string()
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
      email: Joi.string()
          .email({ minDomainSegments: 2 })
          .required()
          .messages({
            'string.base': 'email must be a string',
            'string.email': 'email must be a valid email',
            'any.required': 'email is required',
            'string.empty': 'email is not allowed to be empty'
          }),
        
      schoolId: Joi.number()
      .required()
      .messages({
        'string.base': 'school id must be a number',
        'any.required': 'school id is required',
        'string.empty': 'school id is not allowed to be empty'
      }),
      role: Joi.string().valid('DOS', 'TEACHER').required(),
    });

    return schema.validate(data);
  }

}

export default Schema;
