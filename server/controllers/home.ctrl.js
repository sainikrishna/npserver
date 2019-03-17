import db from '../db';

exports.home = async (req, res) => {
	try{
		const sql = 'SELECT * FROM new_jobs';
		let homeData = {new_jobs: [], results: [], admit_card: []}
		await db.query(sql, function (err, result) {
			if (err) throw err;
			homeData.new_jobs = result;
			console.log(homeData);
		})
		const sqlResults = 'SELECT * FROM results';
		db.query(sqlResults, function (err, result) {
			if (err) throw err;
			homeData.results = result;
			console.log(homeData);
		})
		const sqlAdmitCard = 'SELECT * FROM admit_card';
		db.query(sqlAdmitCard, function (err, result) {
			if (err) throw err;
			homeData.admit_card = result;
			console.log(homeData);
			res.send([homeData]);
		})
	}catch(error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg })
	}
};{}