import express from 'express';
import * as authCtrl from '../../controllers/auth';

const router = express.Router();

router.route("/login").post(authCtrl.login);

module.exports = router;