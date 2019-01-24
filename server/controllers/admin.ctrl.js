import db from '../db';
import uniqid from 'uniqid'

exports.admin = async (req, res, next) => {
        console.log('admin control', req.body)
        let data = req.body;
        data.id = uniqid();

        const sql = 'INSERT INTO new_jobs SET ?';

        db.query(sql, data, function (err, result) {
		if (err) throw err;
		        console.log(`Row Added created ${result}`);
		});

        res.send(`This is Admin Api ${username}`);
        console.error(`Error: ${error.code}`);
        return res.status(401).json({"error": error.errmsg});
};