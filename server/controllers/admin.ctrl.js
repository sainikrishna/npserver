import db from '../db';
import uniqid from 'uniqid'

exports.addNewJobs = async (req, res, next) => {
        console.log('admin control', req.body)
        let data = req.body;
        data.id = uniqid();

        const sql = 'INSERT INTO new_jobs SET ?';

        db.query(sql, data, function (err, result) { 
		if (err) throw err;
		        console.log(result);
		});

                res.send(`This is Admin Api`);
        console.error(`Error: ${error.code}`);
        return res.status(401).json({"error": error.errmsg});
};

exports.fetchNewJobs = async (req, res, next) => {
        const sql = 'SELECT * FROM new_jobs';
        db.query(sql, function (err, result) { 
		if (err) throw err;
                        console.log(result);
                        res.send(result);
		});

        console.error(`Error: ${error.code}`);
        return res.status(401).json({"error": error.errmsg});
};