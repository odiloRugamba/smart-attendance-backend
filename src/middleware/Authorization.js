import helpers from '../Utils';

const { Responses } = helpers;
/**
 *
 * @param {object} roleArray an array of roles
 * @returns {*} json or next
 */

const authorize = (allowed) => (req, res, next) => {
  const { user } = req;
  const { role } = user;
  if (allowed.includes(role)) {
    next();
  } else {
    return Responses.Error(res, 403, { error: 'You need permission' });
  }
};

export default authorize;
