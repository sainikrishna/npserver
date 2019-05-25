import express from 'express';
import * as homeCtrl from '../../controllers/site/home.site.ctrl';
import * as contactusCtrl from '../../controllers/site/contactus.site.ctrl';
import newJobs from '../../controllers/admin/newJobs.admin.ctrl';
import results from '../../controllers/admin/results.admin.ctrl';
import admitCard from '../../controllers/admin/admitCard.admin.ctrl';
import answerKey from '../../controllers/admin/answerKey.admin.ctrl';
import * as controller from '../../controllers';

const router = express.Router();

router.route("/home").get(homeCtrl.home);
router.use('/new_jobs', newJobs.fetchNewJobs);
router.use('/results', results.fetchResults);
router.use('/admit_card', admitCard.fetchAdmitCard);
router.use('/answer_key', answerKey.fetchAnswerKey);
router.route("/contactus").post(contactusCtrl.addMessage);
router.route("/detail").post(controller.fetchPathDetail);

module.exports = router;
