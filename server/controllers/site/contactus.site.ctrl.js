import db from '../../db';
import uniqid from 'uniqid'

exports.addMessage = async (req, res, next) => {
	try {
		console.log('contact us control', req.body)
		let data = req.body;
        data.id = uniqid();
        data.created_at = new Date();

        console.log('addMessage', data)

		const sql = 'INSERT INTO contactus SET ?';

		db.query(sql, data, function (err, result) {
			if (err) throw err;
			console.log(result);
		});

		res.send(`Successfully send message`);
	}catch (error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg });
	}
};