
process.env.NODE_ENV = 'test';
process.env.PORT = 5001
var server = require('../dist/server');
var chai = require('chai');
const chaiHttp = require('chai-http');


chai.use(chaiHttp);
let token = null;
before((done) => { //Before signup and sign in
    const user = {
      "firstName": "testerFN",
      "lastName": "testerLN",
      "phoneNumber":"0786638560",
      "email": "karangwae10@gmail.com",
      "password": "Justpass123",
      "role": "parent"
      }
    chai.request(server)
      .post('/api/auth/signup')
      .send(user)
      .end((err, res) => {
        console.log(res.body.data.token);
       // console.log(err);
        
       // res.should.have.status(200);
      // done();
      });
});



const school = {
  "schoolName": "camp kanombe",
  "schoolEmail": "camp@gmail.com",
  "schoolPhone": "2222",
  "villageId": "1",
  "schoolAddress": "KK39 Kigali-Rwanda"
}

const user = {
  "headFirstName": "John",
  "headLastName": "Doe",
  "headEmail": "johndoe@gmail.com",
  "headPhone": "+250781111111",
}

describe('school', () => {

  console.log({...user, ...school});
  
  it("should create a school", done => {
    chai.request(server)
        .post('/api/schools')
        .send({...user, school})
        .end((err, res) => {
          console.log(res.body);

        // console.log(err);
          
        // res.should.have.status(200);
       // done();
        });
    
  })
})