/* eslint-disable import/prefer-default-export */

import Joi from '@hapi/joi';

class Schema {
  /**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */
 
  static createSchool(data) {
    const schema = Joi.object({
    headPhone: Joi.string()
        .lowercase()
        .trim()
        .min(10)
        .max(14)
        .required()
        .messages({
            'string.min': 'headmaster\'s phone number length must be at least {{#limit}} characters long',
            'string.max': 'headmaster\'s phone number length must be less than or equal to {{#limit}} characters long',
            'any.required': 'headmaster\'s phone number is required',
            'string.empty': 'headmaster\'s phone number cannot be empty'
          }),
    headFirstName: Joi.string()
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
    headLastName: Joi.string()
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
    headEmail: Joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .messages({
          'string.base': 'headmaster\'s email must be a string',
          'string.email': 'headmaster\'s email must be a valid email',
          'any.required': 'headmaster\'s email is required',
          'string.empty': 'headmaster\'s email is not allowed to be empty'
        }),
    schoolEmail: Joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .messages({
          'string.base': 'school\'s email must be a string',
          'string.email': 'school\'s email must be a valid email',
          'any.required': 'school\'s email is required',
          'string.empty': 'school\'s email is not allowed to be empty'
        }),
    
    schoolPhone: Joi.string()
        .lowercase()
        .trim()
        .min(3)
        .max(14)
        .required()
        .messages({
            'string.min': 'school\'s phone number length must be at least {{#limit}} characters long',
            'string.max': 'school\'s phone number length must be less than or equal to {{#limit}} characters long',
            'any.required': 'school\'s phone number is required',
            'string.empty': 'school\'s phone number cannot be empty'
          }),
          
    schoolName: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            'string.base': 'school name must be a string',
            'string.min': 'school name length must be at least {{#limit}} characters long',
            'string.max': 'school name length must be less than or equal to {{#limit}} characters long',
            'any.required': 'school name is required',
            'string.empty': 'school name is not allowed to be empty'
        }),
          
    schoolAddress: Joi.string()
        .messages({
            'string.base': 'school name must be a string'
        }),
          
    villageId: Joi.number()
        .required()
        .messages({
            'string.base': 'village id must be a number',
            'any.required': 'village id is required',
            'string.empty': 'village id is not allowed to be empty'
        }),
    }).options({abortEarly: false});

    return schema.validate(data);
  }
    /**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */
 
  static updateSchool(data) {
    const schema = Joi.object({
   
    schoolEmail: Joi.string()
        .email({ minDomainSegments: 2 })
        .required()
        .messages({
          'string.base': 'school\'s email must be a string',
          'string.email': 'school\'s email must be a valid email',
          'any.required': 'school\'s email is required',
          'string.empty': 'school\'s email is not allowed to be empty'
        }),
    
    schoolPhone: Joi.string()
        .lowercase()
        .trim()
        .min(3)
        .max(14)
        .required()
        .messages({
            'string.min': 'school\'s phone number length must be at least {{#limit}} characters long',
            'string.max': 'school\'s phone number length must be less than or equal to {{#limit}} characters long',
            'any.required': 'school\'s phone number is required',
            'string.empty': 'school\'s phone number cannot be empty'
          }),
          
    schoolName: Joi.string()
        .min(3)
        .max(50)
        .required()
        .messages({
            'string.base': 'school name must be a string',
            'string.min': 'school name length must be at least {{#limit}} characters long',
            'string.max': 'school name length must be less than or equal to {{#limit}} characters long',
            'any.required': 'school name is required',
            'string.empty': 'school name is not allowed to be empty'
        }),
          
    schoolAddress: Joi.string()
        .messages({
            'string.base': 'school name must be a string'
        }),
          
    villageId: Joi.number()
        .required()
        .messages({
            'string.base': 'village id must be a number',
            'any.required': 'village id is required',
            'string.empty': 'village id is not allowed to be empty'
        }),
    }).options({abortEarly: false});

    return schema.validate(data);
  }
}

export default Schema;
