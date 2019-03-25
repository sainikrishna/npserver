import jwt from "jsonwebtoken";
import { config } from '../constants';

export default async (req, res, next) => {
    const header = req.headers.authorization;
    let token;
    if (header)
        token = header.split(" ")[1];

    if (token) {
        jwt.verify(token, config.jwtSecret, async (err, decoded) =>  {
            if (err) {
                return res.status(401).json({errors: {global: "Invalid token"}});
            } else {
                const id = decoded.id; 
                // const sql = `SELECT * FROM admins WHERE id = ?`;
                // db.query(sql, [id], function (err, result) {
                //     if (err) throw err;
                //     console.log(result);
                //     req.currentUser = result;
                //     next();
                // });
                next();
            }
        });
    } else {
        return res.status(401).json({errors: {global: "No token"}});
    }
};
