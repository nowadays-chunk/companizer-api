const { query } = require('./src/db');
async function checkUsers() {
    try {
        const users = await query('SELECT * FROM users LIMIT 1');
        console.log(JSON.stringify(users, null, 2));
        process.exit(0);
    } catch (err) {
        console.error(err);
        process.exit(1);
    }
}
checkUsers();
