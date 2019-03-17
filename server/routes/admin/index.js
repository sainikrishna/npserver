import express from 'express';
import newJobs from './newJobs.admin.route';
import results from './results.admin.route';
import admitCard from './admitCard.admin.route';
import validate from 'express-validation';
import { adminParamValidation } from '../../../config/param-validation';
import * as newJobsCtrl from '../../controllers/admin/newJobs.admin.ctrl';

const router = express.Router();

router.use('/new_jobs', newJobs);
router.use('/results', results);
router.use('/admit_card', admitCard);
router.post('/validate-path', validate(adminParamValidation.validatePath), newJobsCtrl.validatePath);

module.exports = router;
