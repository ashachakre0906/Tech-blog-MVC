const sequelize = require('../config/connection');
const seedP = require('./postData');
const seedU = require('./userData');

const seedAll = async () => {

    await sequelize.sync({ force: true});

    console.log('\n----- DATABASE SYNCED ------\n');
    await seedU();
    console.log();('\n----- USERS SEEDED ------\n')
    await seedP();
    console.log('\n---- POSTS SEEDED -----\n');


    process.exit(0);

};
seedAll();