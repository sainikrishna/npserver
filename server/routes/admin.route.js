import express from "express";
import validate from 'express-validation';
import * as adminCtrl from '../controllers/admin.ctrl';
import { adminParamValidation } from '../../config/param-validation';

const router = express.Router();

/**
 * @apiDescription add new jobs data;
 */
router.route("/new_jobs")
    .post(adminCtrl.admin);


export default router;
