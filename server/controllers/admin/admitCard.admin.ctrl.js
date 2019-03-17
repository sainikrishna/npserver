import db from '../../db';
import uniqid from 'uniqid'

exports.addAdmitCard = async (req, res, next) => {
	try {
		console.log('add admit card body', req.body)
		let data = req.body;
		data.id = uniqid();

		const sql = 'INSERT INTO admit_card SET ?';

		db.query(sql, data, function (err, result) {
			if (err) throw err;
			console.log(result);
		});

		res.send(`Admit card added successfully.`);
	}catch (error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};

exports.updateAdmitCard = async (req, res, next) => {
	try {
		let data = req.body;
		const { id } = data;
		console.log('update admit card body', data)
		const sql = `UPDATE admit_card SET ? WHERE id = ?`;

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

exports.fetchAdmitCard = async (req, res, next) => {
	try {
		const { id } = req.query;

		if (id) {
			const sql = 'SELECT * FROM admit_card WHERE id = ?';
			db.query(sql, [id], function (err, result) {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
		} else {
			const sql = 'SELECT * FROM admit_card';
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

exports.deleteAdmitCard = async (req, res, next) => {
	try{
		const { id } = req.body;
		const sql = 'DELETE FROM admit_card WHERE id = ?';
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

exports.fetchAdmitCardDetail = async (req, res, next) => {
	try {
		const { path } = req.query;

		if (path) {
			const sql = 'SELECT * FROM admit_card WHERE path = ?';
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