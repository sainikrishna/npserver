import db from '../db';
import uniqid from 'uniqid'


exports.validatePath = async (req, res, next) => {
	try{
		const { path, tableName } = req.body;
		console.log('validate path', path, tableName);

		const sql = `SELECT * FROM ${tableName} WHERE path = ?`;
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

exports.getMessages = async (req, res, next) => {
	try {
		const { id } = req.query;
		console.log('get contact us messages', req.url)

		if (id) {
			const sql = 'SELECT * FROM contactus WHERE id = ?';
			db.query(sql, [id], function (err, result) {
				if (err) throw err;
				console.log(result);
				res.send(result);
			});
		} else {
			const sql = 'SELECT * FROM contactus';
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
	
}