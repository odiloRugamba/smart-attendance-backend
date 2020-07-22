export default {
  up: async queryInterface => queryInterface.bulkInsert('Schools', [{
    schoolName: 'Kayonza Modern Secondary School',
    headLaststName: 'Karamaga',
    headLaststName: 'Charles',
    headEmail: 'karamaga.charles@gmail.com',
    headPhone: '0788890527',
    schoolProvince: 'Eastern Province',
    schoolDistrict: 'Kayonza',
    schoolSector: 'Mukarange',
    schoolCell: 'Nyamirama',
    schoolphone: '07888645634',
    schoolEmail: 'kayinzamodern@gmail.com',
    schoolLogo: ''
  },
  {
    schoolName: 'Groupe Scolaire saint Andre',
    headLaststName: 'Odilo',
    headLaststName: 'Rugamba',
    headEmail: 'Odilorugamba@gmail.com',
    headPhone: '0782677922',
    schoolProvince: 'Kigali City',
    schoolDistrict: 'Nyarugenge',
    schoolSector: 'Nyamijyosi',
    schoolCell: 'Ijyosi',
    schoolphone: '0786645430',
    schoolEmail: 'saintandre@gmail.com',
    schoolLogo: ''

  }], {}),

  down: queryInterface => queryInterface.bulkDelete('Schools', null, {})
};
