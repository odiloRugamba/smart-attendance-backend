import hash from '../../Utils/passwordHash';

const { hashPassword } = hash;

export default {
  up: async queryInterface => queryInterface.bulkInsert('Users', [{
    email: 'karangwa@gmail.com',
    firstName: 'Emmy',
    lastName: 'Karangwa',
    role: 'super-administrator',
    rememberMe: true,
    password: await hashPassword('Justpass123'),
    isVerified: true
  },
  {
    email: 'odilorugamba@gmail.com',
    firstName: 'Rugamba',
    lastName: 'Odilo',
    role: 'super-administrator',
    rememberMe: true,
    password: await hashPassword('Justpass123'),
    isVerified: true
  },
  {
    email: 'brianrubimbura@gmail.com',
    firstName: 'Brian',
    lastName: 'Rubimbura',
    role: 'headmaster',
    rememberMe: true,
    password: await hashPassword('Justpass123'),
    isVerified: true
  },
  {
    email: 'kwizeraelie@gmail.com',
    firstName: 'Elie',
    lastName: 'Kwizera',
    role: 'local-governmant',
    rememberMe: true,
    password: await hashPassword('Justpass123'),
    isVerified: true
  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Users', null, {})
};
