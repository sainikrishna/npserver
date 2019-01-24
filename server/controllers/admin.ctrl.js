import db from '../db';

exports.admin = async (req, res) => {
        // const { dbname } = req.query;
        console.log('admin control', req.body)
        // const { username } = req.body;
        res.send(`This is Admin Api`);
        console.error(`Error: ${error.code}`);
        return res.status(401).json({"error": error.errmsg});
};