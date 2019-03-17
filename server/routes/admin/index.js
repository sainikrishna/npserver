import express from 'express';
import newJobs from './newJobs.admin.route';
import results from './results.admin.route';

const router = express.Router();

router.use('/new_jobs', newJobs);
router.use('/results', results);

module.exports = router;
