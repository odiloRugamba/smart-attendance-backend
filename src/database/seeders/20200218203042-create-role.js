
module.exports = {
  up: (queryInterface) => Promise.all([
    queryInterface.bulkInsert('Roles', [
      {
        roleName: 'super-administrator',
        roleValue: '1',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'mineduc-staff',
        roleValue: '2',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'district-staff',
        roleValue: '3',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'sector-staff',
        roleValue: '4',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'cell-staff',
        roleValue: '5',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'head-master',
        roleValue: '6',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'dos',
        roleValue: '7',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'teacher',
        roleValue: '8',
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        roleName: 'parent',
        roleValue: '9',
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ])
  ]),
  down: (queryInterface) => Promise.all([
    queryInterface.bulkDelete('Roles', null, {})
  ])
};
