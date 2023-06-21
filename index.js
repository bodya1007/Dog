const sequelize = require('./db/database')
const app = require('./app')

async function start() {
    try {
        await sequelize.sync();

        app.listen(3000, () => {
            console.log('Server is running on port 3000');
        });
    } catch (error) {
        console.error(error);
    }
}
start()