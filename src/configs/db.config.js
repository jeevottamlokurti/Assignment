module.exports = {
    HOST: "db4free.net",
    USER: "restapitest123",
    PASSWORD: "restapitest123",
    DB: "restapitest123",
    dialect: "mysql",
    pool: {
      max: 5,
      min: 0,
      acquire: 30000,
      idle: 10000
    }
  };