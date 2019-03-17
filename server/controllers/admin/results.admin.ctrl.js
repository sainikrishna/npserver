import db from '../../db';
import uniqid from 'uniqid'

exports.addResults = async (req, res, next) => {
	try {
		console.log('add results body', req.body)
		let data = req.body;
		data.id = uniqid();

		const sql = 'INSERT INTO results SET ?';

		db.query(sql, data, function (err, result) {
			if (err) throw err;
			console.log(result);
		});

		res.send(`Results Added Successfully.`);
	}catch (error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};

exports.updateResults = async (req, res, next) => {
	try {
		let data = req.body;
		const { id } = data;
		console.log('update Result body', data)
		const sql = `UPDATE results SET ? WHERE id = ?`;

		let updateData = [data, id];

		db.query(sql, updateData, function (err, result) {
			if (err) throw err;
			console.log(result);
		});

		res.send(`Results Updated Successfully`);
	}catch (error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};

exports.fetchResults = async (req, res, next) => {
	try {
		const { id } = req.query;
		console.log('Fetch Results Url', req.url)
		const tableName = 'results';
		if (id) {
			const sql = `SELECT * FROM ${tableName} WHERE id = ?`;
			db.query(sql, [id], function (err, result) {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
		} else {
			const sql = 'SELECT * FROM results';
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

exports.deleteResults = async (req, res, next) => {
	try{
		const { id } = req.body;
		const sql = 'DELETE FROM results WHERE id = ?';
		db.query(sql, [id], function (err, result) {
			if (err) throw err;
			console.log(result);
			res.send("Result Deleted Successfully.");
		});
	}catch(error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};

exports.fetchResultDetail = async (req, res, next) => {
	try {
		const { path } = req.query;
		console.log('Fetch Result Detail', req.url)

		if (path) {
			const sql = 'SELECT * FROM results WHERE path = ?';
			db.query(sql, [path], function (err, result) {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
		}else{
			return res.status(401).json({ "error": 'Path not valid.' });
		}
	}catch (error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};