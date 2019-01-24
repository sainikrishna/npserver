import db from '../db';

exports.home = async (req, res) => {
	const { dbname } = req.query
	db.query(``, function (err, result) {
		if (err) throw err;
			console.log("Database created");
		});
	res.send(`Db Created ${dbname}`);
	console.error(`Error: ${error.code}`);
	return res.status(401).json({"error": error.errmsg});
};