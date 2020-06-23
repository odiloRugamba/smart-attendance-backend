import Auth from './Auth';
import Responses from './response';
import passwordHash from './passwordHash';
import Mail from './mail/mail';


const { generateToken, verifyToken } = Auth;
const { hashPassword, comparePassword } = passwordHash;

export default {
  generateToken,
  hashPassword,
  comparePassword,
  Responses,
  verifyToken,
  Mail
};
