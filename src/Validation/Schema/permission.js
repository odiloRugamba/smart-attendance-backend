/* eslint-disable import/prefer-default-export */

import Joi from '@hapi/joi';

class Schema {
  /**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */
  static createPermission(data) {
    const schema = Joi.object({
    leavingTime: Joi.date()
        .required()
        .messages({
            'string.base': 'leaving time must be a a date and time',
            'any.required': 'leaving time is required',
            'string.empty': 'leaving time is not allowed to be empty'
        }),
    expectedBackTime: Joi.date()
        .required()
        .messages({
            'string.base': 'expected return time must be a a date and time',
            'any.required': 'expected return time is required',
            'string.empty': 'expected return time is not allowed to be empty'
        }),
    reason: Joi.string()
        .min(2)
        .max(200)
        .required()
        .messages({
          'string.base': 'reason must be a string',
          'string.min': 'reason length must be at least {{#limit}} characters long',
          'string.max': 'reason length must be less than or equal to {{#limit}} characters long',
          'any.required': 'reason is required',
        }),

    requesterName: Joi.string()
        .allow("")
        .min(2)
        .max(200)
        .messages({
        'string.base': 'requester name must be a string',
        'string.min': 'requester name length must be at least {{#limit}} characters long',
        'string.max': 'requester name length must be less than or equal to {{#limit}} characters long'
        }),

    requesterPhone: Joi.string()
        .allow("")
        .min(2)
        .max(200)
        .messages({
          'string.base': 'request phone number must be a digits',
          'string.min': 'request phone number length must be at least {{#limit}} characters long',
          'string.max': 'request phone number length must be less than or equal to {{#limit}} characters long'
        }),

    requesterRelationship: Joi.string()
        .allow("")
        .min(2)
        .max(50)
        .messages({
        'string.base': 'requester relationship with the student must be a string',
        'string.min': 'requester relationship with the student length must be at least {{#limit}} characters long',
        'string.max': 'requester relationship with the student length must be less than or equal to {{#limit}} characters long'
        }),
    
    schoolId: Joi.number()
        .required()
        .messages({
            'string.base': 'school id must be a number',
            'any.required': 'school id is required',
            'string.empty': 'school id is not allowed to be empty'
        }),
    studentId: Joi.number()
        .required()
        .messages({
        'string.base': 'student id must be a number',
        'any.required': 'student id is required',
        'string.empty': 'student id is not allowed to be empty'
        })

    });

    return schema.validate(data);
  }
/**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */
 static updatePermission(data) {
    const schema = Joi.object({
    
    leavingTime: Joi.date()
        .required()
        .messages({
            'string.base': 'leaving time must be a a date and time',
            'any.required': 'leaving time is required',
            'string.empty': 'leaving time is not allowed to be empty'
        }),
    expectedBackTime: Joi.date()
        .required()
        .messages({
            'string.base': 'expected return time must be a a date and time',
            'any.required': 'expected return time is required',
            'string.empty': 'expected return time is not allowed to be empty'
        }),
    reason: Joi.string()
        .min(2)
        .max(200)
        .required()
        .messages({
          'string.base': 'reason must be a string',
          'string.min': 'reason length must be at least {{#limit}} characters long',
          'string.max': 'reason length must be less than or equal to {{#limit}} characters long',
          'any.required': 'reason is required',
        }),

    requesterName: Joi.string()
        .allow("")
        .min(2)
        .max(200)
        .messages({
        'string.base': 'requester name must be a string',
        'string.min': 'requester name length must be at least {{#limit}} characters long',
        'string.max': 'requester name length must be less than or equal to {{#limit}} characters long'
        }),

    requesterPhone: Joi.string()
        .allow("")
        .min(2)
        .max(200)
        .messages({
          'string.base': 'request phone number must be a digits',
          'string.min': 'request phone number length must be at least {{#limit}} characters long',
          'string.max': 'request phone number length must be less than or equal to {{#limit}} characters long'
        }),

    requesterRelationship: Joi.string()
        .allow("")
        .min(2)
        .max(50)
        .messages({
        'string.base': 'requester relationship with the student must be a string',
        'string.min': 'requester relationship with the student length must be at least {{#limit}} characters long',
        'string.max': 'requester relationship with the student length must be less than or equal to {{#limit}} characters long'
        }),
    
    permissionId: Joi.number()
        .required()
        .messages({
            'string.base': 'permission id must be a number',
            'any.required': 'permission id is required',
            'string.empty': 'permission id is not allowed to be empty'
        }),
   
    });

    return schema.validate(data);
  }
}

export default Schema;
