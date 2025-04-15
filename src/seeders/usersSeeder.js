// seed/usersSeeder.js
const mongoose = require('mongoose');
const User = require('../models/user');
require('dotenv').config();

const seedUsers = async () => {
  await mongoose.connect(process.env.MONGO_URI);

  await User.deleteMany({}); // clear existing users

  const users = [
    {
      name: 'Karthick',
      email: 'karthickmohan11799@gmail.com',
      phone: '9876543210',
      password: 'Admin@123',
      role: 'admin'
    },
    {
      name: 'Nethaji Agency',
      email: 'agency@example.com',
      phone: '9123456789',
      password: 'Agency@123',
      role: 'agency'
    },
    {
      name: 'Graphic Designer',
      email: 'employee@example.com',
      phone: '9012345678',
      password: 'Employee@123',
      role: 'employee'
    }
  ];

//   for (let user of users) {
//     const newUser = new User(user);
//     await newUser.save();
//   }
  await User.insertMany(users)

  console.log('Users seeded successfully!');
  process.exit();
};

module.exports = seedUsers;
