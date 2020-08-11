/* eslint-disable import/prefer-default-export */

import Joi from '@hapi/joi';

class Schema {
  /**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */
  static createClass(data) {
    const schema = Joi.object({
    level: Joi.string()
        .min(1)
        .max(10)
        .required()
        .messages({
          'string.base': 'level must be a string',
          'string.min': 'level length must be at least {{#limit}} characters long',
          'string.max': 'level length must be less than or equal to {{#limit}} characters long',
          'any.required': 'level is required',
          'string.empty': 'level is not allowed to be empty'
        }),
    year: Joi.number()
        .min(1)
        .max(12)
        .required()
        .messages({
          'string.base': 'year must be a number',
          'string.min': 'year length must be at least {{#limit}} characters long',
          'string.max': 'year length must be less than or equal to {{#limit}} characters long',
          'any.required': 'year is required',
          'string.empty': 'year is not allowed to be empty'
        }),
    label: Joi.string()
      .allow(null)
        .min(1)
        .max(15)
        .messages({
          'string.base': 'label must be a string',
          'string.min': 'label length must be at least {{#limit}} characters long',
          'string.max': 'label length must be less than or equal to {{#limit}} characters long'
        }),
    combination: Joi.string()
        .allow(null)
        .allow("")
        .min(1)
        .max(50)
        .required()
        .messages({
          'string.base': 'combination must be a string',
          'string.min': 'combination length must be at least {{#limit}} characters long',
          'string.max': 'combination length must be less than or equal to {{#limit}} characters long'
        }),
    schoolId: Joi.number()
      .required()
      .messages({
        'string.base': 'school id must be a number',
        'any.required': 'school id is required',
        'string.empty': 'school id is not allowed to be empty'
      }),
    });

    return schema.validate(data);
  }
/**
   * @static
   * @param {obj} data
   * @returns {obj} returns schema object
  */
 static updateClass(data) {
    const schema = Joi.object({
    level: Joi.string()
        .min(1)
        .max(10)
        .required()
        .messages({
          'string.base': 'level must be a string',
          'string.min': 'level length must be at least {{#limit}} characters long',
          'string.max': 'level length must be less than or equal to {{#limit}} characters long',
          'any.required': 'level is required',
          'string.empty': 'level is not allowed to be empty'
        }),
    year: Joi.number()
        .min(1)
        .max(12)
        .required()
        .messages({
          'string.base': 'year must be a number',
          'string.min': 'year length must be at least {{#limit}} characters long',
          'string.max': 'year length must be less than or equal to {{#limit}} characters long',
          'any.required': 'year is required',
          'string.empty': 'year is not allowed to be empty'
        }),
    label: Joi.string()
      .allow(null)
        .min(1)
        .max(15)
        .messages({
          'string.base': 'label must be a string',
          'string.min': 'label length must be at least {{#limit}} characters long',
          'string.max': 'label length must be less than or equal to {{#limit}} characters long'
        }),
    combination: Joi.string()
      .allow(null)
        .min(1)
        .max(50)
        .required()
        .messages({
          'string.base': 'combination must be a string',
          'string.min': 'combination length must be at least {{#limit}} characters long',
          'string.max': 'combination length must be less than or equal to {{#limit}} characters long'
        })
    });

    return schema.validate(data);
  }
}

export default Schema;
