/**
 * Formatted response class
 */
class Responses {
  /**
     * handleSuccess Function
     * @param {object} res - Response
     * @param {int} statusCode - Status code
     * @param {string} message - Message
     * @param {object | null} data - Data
     * @return {object} - Returned Formatted Success response object
     */
  static Success(res, statusCode, message, data = null) {
    return res.status(statusCode)
      .json(data ? {
        status: statusCode,
        message,
        data
      } : {
        status: 'success',
        message
      });
  }

  /**
     * handleError Function
     * @param {object} res - Response\
     * @param {int} statusCode - Status code
     * @param {string} message - Message
     * @returns {object} - Returned Formatted Error response object
     */
  static Error(res, statusCode, message,) {
    return res.status(statusCode)
      .json({
        status: statusCode,
        message
      });
  }

  /**
   * validation error
   * @param {object} res  details.
   * @param {string} message  details.
   * @param {object} error  details.
   * @returns {object}.
   */
  static validationError(res, message) {
    return res.status(422).json({
      status: 422,
      message,
      error: 'Validation Error'
    });
  }

  /**
   * Retuns a authorization error response
   * @param {object} res  details.
   * @param {string} message  details.
   * @param {object} data  details.
   * @returns {object}.
   */
  static authenticationError(res, message) {
    return res.status(401).json({
      status: 401,
      message,
      error: 'Authentication Error'
    });
  }

  /**
   * Retuns a authorization error response
   * @param {object} res  details.
   * @param {string} message  details.
   * @param {object} data  details.
   * @returns {object}.
   */
  static authorizationError(res, message) {
    return res.status(403).json({
      status: 403,
      message,
      error: 'Authorization Error'
    });
  }

  /**
   * Retuns a not found error response
   * @param {object} res  details.
   * @param {string} message  details.
   * @param {object} data  details.
   * @returns {object}.
   */
  static notFoundError(res, message) {
    return res.status(404).json({
      status: 404,
      message,
      error: 'Not Found'
    });
  }

  /**
   * Retuns a conflict error response
   * @param {object} res  details.
   * @param {string} message  details.
   * @param {object} data  details.
   * @returns {object}.
   */
  static conflictError(res, message) {
    return res.status(409).json({
      status: 409,
      message,
      error: 'Conflict Error'
    });
  }

  /**
   * Retuns a bad error response
   * @param {object} res  details.
   * @param {string} message  details.
   * @param {object} data  details.
   * @returns {object}.
   */
  static badRequestError(res, message) {
    return res.status(400).json({
      status: 400,
      message,
      error: 'Bad Request'
    });
  }
}

export default Responses;
