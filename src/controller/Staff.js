import StaffService from '../services/staff';
import UserService from '../services/user.service';
import helpers from '../Utils';
import { upload } from '../Utils/ImageUploader';


const {
  Responses,
} = helpers;

class Staff {
  static async getAll(req, res) {
    const staffs = await StaffService.getAll();
    return Responses.Success(res, 200, 'successfully retrieved all Staffs requested', staffs);
  }

  static async getStaffBySchoolId(req, res) {
    const { schoolId } = req.params;
    console.log(schoolId);
    const staff = await StaffService.getAll({ schoolId });
    return Responses.Success(res, 200, 'successfully retrieved Staff requested', staff);
  }

  static async update(req, res, next) {
    try {
      const { staffId } = req.params;
      const { role } = req.body;
      const staff = await StaffService.update(staffId, { role });
      return Responses.Success(res, 200, 'Staff successfully Updated', staff);
    } catch (error) {
      return next(error);
    }
  }

  static async create(req, res) {
    try {
      console.log(req.body);
      const {
        firstName,
        lastName,
        email,
        phone,
        role,
        schoolId
      } = req.body;

      let staff = await UserService.findByEmail(email);

      if (!staff) {
        const newUser = {
          firstName,
          lastName,
          email,
          phone,
          role,
          password: null,
          verified: false
        };

        staff = await UserService.create(newUser);

        const payload = {
          id: head.id,
          role: head.role,
          phoneNumber: head.phoneNumber,
          email: head.email
        };

        const token = jwt.sign(payload, process.env.SECRET_KEY);


        const mail = new Mail({
          to: head.email,
          subject: 'Welcome to Smart Gate ',
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

      const data = await StaffService.create({ schoolId, userId: staff.id, role });

      staff = {
        firstName,
        lastName,
        email,
        phone,
        role,
        schoolId,
        userId: staff.id,
        staffId: data.id
      };
      return res.status(201).json({ status: 201, message: 'Staff created', staff });
    } catch (err) {
      console.log(err);
      return Responses.Error(res, 500, 'Internal Server Error');
    }
  }


  static async delete(req, res, next) {
    try {
      const { id } = req.user;
      const Staff = await StaffService.delete(id);
      return Responses.Success(res, 200, 'Staff successfully deleted', Staff);
    } catch (error) {
      return next(error);
    }
  }
}

export default Staff;
