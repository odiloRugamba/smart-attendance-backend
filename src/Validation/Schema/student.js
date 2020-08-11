/* eslint-disable import/prefer-default-export */

import Joi from '@hapi/joi';

class Schema {
  /**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */
 
  static createStudent(data) {
    const schema = Joi.object({
    guardianPhone: Joi.string()
      .allow(null)
      .lowercase()
      .trim()
      .min(10)
      .max(14)
      .messages({
          'string.min': 'guardian\'s phone number length must be at least {{#limit}} characters long',
          'string.max': 'guardian\'s phone number length must be less than or equal to {{#limit}} characters long'
        }),
    guardianEmail: Joi.string()
      .allow(null)
      .email({ minDomainSegments: 2 })
      .messages({
        'string.base': 'guardian\'s email must be a string',
        'string.email': 'guardian\'s email must be a valid email',
        'string.empty': 'guardian\'s email is not allowed to be empty'
      }),
    guardianRelationship: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages({
        'string.base': 'Relationship with guardian must be a string',
        'string.min': 'Relationship with guardian length must be at least {{#limit}} characters long',
        'string.max': 'Relationship with guardian length must be less than or equal to {{#limit}} characters long',
        'any.required': 'Relationship with guardian is required',
        'string.empty': 'Relationship with guardian is not allowed to be empty'
      }),

    guardianFirstName: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages({
        'string.base': 'guardian first name must be a string',
        'string.min': 'guardian first name length must be at least {{#limit}} characters long',
        'string.max': 'guardian first name length must be less than or equal to {{#limit}} characters long',
        'any.required': 'guardian first name is required',
        'string.empty': 'guardian first name is not allowed to be empty'
      }),

    guardianLastName: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages({
        'string.base': 'gaurdian last name must be a string',
        'string.min': 'gaurdian last name length must be at least {{#limit}} characters long',
        'string.max': 'gaurdian last name length must be less than or equal to {{#limit}} characters long',
        'any.required': 'gaurdian last name is required',
        'string.empty': 'gaurdian last name is not allowed to be empty'
      }),

    firstName: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages({
        'string.base': 'first name must be a string',
        'string.min': 'first name length must be at least {{#limit}} characters long',
        'string.max': 'first name length must be less than or equal to {{#limit}} characters long',
        'any.required': 'first name is required',
        'string.empty': 'first name is not allowed to be empty'
      }),
    lastName: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages({
        'string.base': 'last name must be a string',
        'string.min': 'last name length must be at least {{#limit}} characters long',
        'string.max': 'last name length must be less than or equal to {{#limit}} characters long',
        'any.required': 'last name is required',
        'string.empty': 'last name is not allowed to be empty'
      }),

    gender: Joi.string().valid('M','F'),

    disability: Joi.string()
      .allow(null)
      .allow("")
      .messages({
        'string.base': 'disability must be a string',
        'string.min': 'disability length must be at least {{#limit}} characters long',
        'string.max': 'disability length must be less than or equal to {{#limit}} characters long',
        'any.required': 'disability is required'
      }),


    dob: Joi.string()
      .min(3)
      .max(30)
      .required()
      .messages({
        'string.base': 'date of birth must be a string',
        'string.min': 'date of birth length must be at least {{#limit}} characters long',
        'string.max': 'date of birth length must be less than or equal to {{#limit}} characters long',
        'any.required': 'date of birth is required',
        'string.empty': 'date of birth is not allowed to be empty'
      }),
  
    schoolId: Joi.number()
      .required()
      .messages({
          'string.base': 'school id id must be a number',
          'any.required': 'school id is required',
          'string.empty': 'school id is not allowed to be empty'
      }),
  
    villageId: Joi.number()
      .required()
      .messages({
          'string.base': 'village id must be a number',
          'any.required': 'village id is required',
          'string.empty': 'village id is not allowed to be empty'
      }),

    classId: Joi.number()
      .required()
      .messages({
          'string.base': 'class id must be a number',
          'any.required': 'class id is required',
          'string.empty': 'class id is not allowed to be empty'
      }),

    enrollmentYear: Joi.number()
    .required()
    .messages({
        'string.base': 'enrollment year must be a number',
        'any.required': 'enrollment year is required',
        'string.empty': 'enrollment year is not allowed to be empty'
    }),

    }).options({abortEarly: false});

    return schema.validate(data);
  }

}

export default Schema;
