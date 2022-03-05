
const users = require('../Models/userModel');

const bcrypt = require('bcryptjs')

const jwt = require('jsonwebtoken');

const Register = async (request, response) => {
    if (await users.exists({ email: request.body.email })) {
        return response.status(400).json({ massege: 'Email is allready exist' });
    }
    bcrypt.hash(request.body.password, 10, async (err, hashPassword) => {
        if (err) return response.status(500).send({ massege: 'Erorr' });
        request.body.password = hashPassword;

        await users.create(request.body)
            .then((result) => response.status(200).send({ message: 'user added successfuly', result }))
            .catch((err) => response.status(500).send(err))
    })
}


const LogIn = async (request, response) => {
    try {
        const user = await users.findOne({ email: request.body.email })

        if (user) {
            console.log(user.firstName);
            bcrypt.compare(request.body.password, user.password, (err, isMatch) => {
                if (err) return response.status(500).json({ message: 'Error' });

                console.log(isMatch);
                if (!isMatch) return response.status(400).json({ message: 'password is incorrest' });

                const token = jwt.sign({ user }, process.env.SECRET_KEY, { expiresIn: '1h' });

                return response.status(200).json({ message: 'Loggin successful', token })
            });
        }
        else {
            response.status(400).json({ message: 'Email is not exists' })
        }
    }
    catch (err) {
        return response.status(500).json(err);
    }
}




module.exports = { Register, LogIn };

