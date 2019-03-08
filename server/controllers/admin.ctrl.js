import db from '../db';
import uniqid from 'uniqid'

exports.addNewJobs = async (req, res, next) => {
	try {
		console.log('admin control', req.body)
		let data = req.body;
		data.id = uniqid();

		const sql = 'INSERT INTO new_jobs SET ?';

		db.query(sql, data, function (err, result) {
			if (err) throw err;
			console.log(result);
		});

		res.send(`This is Admin Api`);
	}catch (error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};

exports.updateJob = async (req, res, next) => {
	try {
		console.log('update Job body', req.body)
		let data = req.body;
		const { id } = data;

		const sql = `UPDATE new_jobs SET ? WHERE id = ?`;

		let updateData = [data, id];

		db.query(sql, updateData, function (err, result) {
			if (err) throw err;
			console.log(result);
		});

		res.send(`Updated Successfully`);
	}catch (error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};

exports.fetchNewJobs = async (req, res, next) => {
	try {
		const { id } = req.query;
		console.log('fetchNewJObs', req.url)

		if (id) {
			const sql = 'SELECT * FROM new_jobs WHERE id = ?';
			db.query(sql, [id], function (err, result) {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
		} else {
			const sql = 'SELECT * FROM new_jobs';
			db.query(sql, function (err, result) {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
		}
	}catch (error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
	
};

exports.deleteNewJobs = async (req, res, next) => {
	try{
		const { id } = req.body;
		const sql = 'DELETE FROM new_jobs WHERE id = ?';
		db.query(sql, [id], function (err, result) {
			if (err) throw err;
			console.log(result);
			res.send("Deleted Success");
		});
	}catch(error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};

exports.validatePath = async (req, res, next) => {
	try{
		const { path } = req.body;
		console.log('validate path', path)
		const sql = 'SELECT * FROM new_jobs WHERE path = ?';
			db.query(sql, [path], function (err, result) {
				if (err) throw err;
				console.log(result);
				const isValid = result.length ? false : true;
				res.send(isValid);
			});
	}catch(error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};