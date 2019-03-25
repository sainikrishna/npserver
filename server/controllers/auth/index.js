import db from '../../db';
import uniqid from 'uniqid';
import jwt from "jsonwebtoken";
import { config } from '../../constants';


exports.login = async (req, res, next) => {
	try {
		const { email, password } = req.body;
        console.log('auth login', email, password)
		if (email) {
			const sql = 'SELECT * FROM admins WHERE email = ? AND password = ?';
			db.query(sql, [email, password], function (err, user) {
                if (err) throw err;
                if(user.length){
                    let userData = user[0]
                    console.log('userData', user);
                    const token = setToken(userData);
                    userData.token = token
                    res.send(userData);
                }else{
                    return res.status(401).json("error");
                }
			});
		}else{
            return res.status(401).json("error");
        }
	}catch (error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};

const setToken = (user) => {
    const { id } = user;
    // const id = 'uejdyhehdhs23';
    const token = generateJWT(user);
    console.log('set Token', token, user, id)
    const sql = `UPDATE admins SET token = ? WHERE id = ?`;

		let updateData = [token, id];

		db.query(sql, updateData, function (err, result) {
            if (err) throw err;
            console.log('set Token results', result, err)
			console.log(result);
        });
    return token;
}

const generateJWT = (user) => {
    const expireDate = Math.floor(Date.now() / 1000) + (60 * 60 * 24 * 365 * 20);
    return jwt.sign(
        {
            id: user.id,
            name: user.name,
            email: user.email,
            exp: expireDate,
        },
        config.jwtSecret
    );
}