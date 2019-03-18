import db from '../../db';
import uniqid from 'uniqid'

exports.addAnswerKey = async (req, res, next) => {
	try {
		console.log('add answer key body', req.body)
		let data = req.body;
		data.id = uniqid();

		const sql = 'INSERT INTO answer_key SET ?';

		db.query(sql, data, function (err, result) {
			if (err) throw err;
			console.log(result);
		});

		res.send(`Answer key added successfully.`);
	}catch (error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};

exports.updateAnswerKey = async (req, res, next) => {
	try {
		let data = req.body;
		const { id } = data;
		console.log('update answer key body', data)
		const sql = `UPDATE answer_key SET ? WHERE id = ?`;

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

exports.fetchAnswerKey = async (req, res, next) => {
	try {
		const { id } = req.query;

		if (id) {
			const sql = 'SELECT * FROM answer_key WHERE id = ?';
			db.query(sql, [id], function (err, result) {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
		} else {
			const sql = 'SELECT * FROM answer_key';
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

exports.deleteAnswerKey = async (req, res, next) => {
	try{
		const { id } = req.body;
		const sql = 'DELETE FROM answer_key WHERE id = ?';
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

exports.fetchAnswerKeyDetail = async (req, res, next) => {
	try {
		const { path } = req.query;

		if (path) {
			const sql = 'SELECT * FROM answer_key WHERE path = ?';
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