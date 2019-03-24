import express from 'express';
import newJobs from './newJobs.admin.route';
import results from './results.admin.route';
import admitCard from './admitCard.admin.route';
import answerKey from './answerKey.admin.route';
import validate from 'express-validation';
import { adminParamValidation } from '../../../config/param-validation';
import * as newJobsCtrl from '../../controllers/admin/newJobs.admin.ctrl';
import * as controller from '../../controllers';

const router = express.Router();

router.use('/new_jobs', newJobs);
router.use('/results', results);
router.use('/admit_card', admitCard);
router.use('/answer_key', answerKey);
router.post('/validate-path', validate(adminParamValidation.validatePath), controller.validatePath);
router.get('/contactus', controller.getMessages);

module.exports = router;
