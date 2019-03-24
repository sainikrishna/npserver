import express from 'express';
import * as homeCtrl from '../../controllers/site/home.site.ctrl';
import * as contactusCtrl from '../../controllers/site/contactus.site.ctrl';

const router = express.Router();

router.route("/home").get(homeCtrl.home);
router.route("/contactus").post(contactusCtrl.addMessage)

module.exports = router;
