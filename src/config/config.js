import { config } from 'dotenv';

config();

export default {
  development: {
    use_env_variable: 'DATABASE_URL_DEV',
    dialect: 'postgres'
  },
  test: {
    "dialect": "sqlite",
    "storage": ".memory",
    "logging": false
  },
  production: {
    use_env_variable: 'DATABASE_URL_PROD',
    dialect: 'postgres',
    dialectOptions: {
      ssl: { require: true, rejectUnauthorized: false },
    }
  }
};
