import db from '../db';

exports.home = async (req, res) => {
	try{
		const sql = 'SELECT * FROM new_jobs';
		let homeData = {new_jobs: [], results: [], admit_card: []}
		db.query(sql, function (err, result) {
			if (err) throw err;
			homeData.new_jobs = result;
			console.log(homeData);
			res.send([homeData]);
		})
	}catch(error){
		console.error(`Error: ${error.code}`);
		return res.status(401).json({ "error": error.errmsg })
	}
};{}