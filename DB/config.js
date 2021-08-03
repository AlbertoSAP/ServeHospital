const mongoose = require('mongoose');
// require('dotenv').config();
const DBconexion = async() => {

    try {
        await mongoose.connect(process.env.BDCNN, {
            useNewUrlParser: true,
            useUnifiedTopology: true,
            useCreateIndex: true
        });
        console.log('DB Online', process.env.BDCNN);
    } catch (error) {
        console.log(error);

        throw new Error('Error a la hora de iniciar la Base de Datos');
    }
}

module.exports = {
    DBconexion
}