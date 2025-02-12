import jwt from 'jsonwebtoken';
import SchoolService from '../services/school';
import UserService from '../services/user.service';
import helpers from '../Utils';
import Mail from "../Utils/mail/mail"

const {
  Responses,
} = helpers;

class School {
  static async getAll(req, res) {
    const Schools = await SchoolService.getAll();
    return Responses.Success(res, 200, 'successfully retrieved all Schools requested', Schools);
  }

  static async getSchoolById(req, res) {
    const { id } = req.params;

    const School = await SchoolService.getSchoolById(id);
    return Responses.Success(res, 200, 'successfully retrieved school requested', School);
  }

  static async update(req, res, next) {
    try {
      const { schoolId } = req.params;
      const {
        schoolName,
        schoolEmail,
        schoolAddress,
        schoolPhone,
        villageId
      } = req.body;

      const school = await SchoolService.update(schoolId, {
        schoolName, schoolEmail, schoolAddress, schoolPhone, villageId
      });
      return Responses.Success(res, 200, 'School successfully Updated', school);
    } catch (error) {
      return next(error);
    }
  }

  static async create(req, res) {
    try {
        const {
          headEmail,
          headFirstName,
          headLastName,
          headPhone,
          schoolEmail,
          schoolPhone,
          schoolName,
          schoolAddress,
          villageId
        } = req.body;
        
        let head = await UserService.findByEmail(headEmail);

        if (!head) {
            const newUser = {
              firstName: headFirstName,
              lastName: headLastName,
              email: headEmail,
              phone: headPhone,
              role: "HEAD",
              password: null,
              verified: false
            };
            head = await UserService.create(newUser);
            console.log(head);
            const payload = {
                    id: head.id,
                    role: head.role,
                    phoneNumber: head.phoneNumber,
                    email: head.email
                  };
          const token = jwt.sign(payload, process.env.SECRET_KEY);
            const mail = new Mail({
                to: head.email,
                subject: 'Welcome to Smart Gate',
                messageHeader: `Hi, ${head.firstName}!`,
                messageBody: 'We are exicted to get you started. First, you have to verify your account. Just click on the link below',
                iButton: true
            });
            mail.InitButton({
                text: 'Verify Email',
                link: `${process.env.APP_URL}/welcome/api/auth/confirmEmail?email=${head.email}&token=${token}`,
            });
            await mail.sendMail();
        }
        
      const result = await SchoolService.create({schoolName, schoolEmail,schoolAddress, schoolPhone, villageId, userId: head.id});

      return res.status(201).json({ status: 201, message: "school created", result });
    } catch (err) {
      console.log(err);
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  }

  static async delete(req, res, next) {
    try {
      const { schoolId } = req.params;
      const school = await SchoolService.delete(schoolId);
      return Responses.Success(res, 200, 'School successfully deleted', school);
    } catch (error) {
      return next(error);
    }
  }
}

export default School;
