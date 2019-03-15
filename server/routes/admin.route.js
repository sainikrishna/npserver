import express from "express";
import validate from 'express-validation';
import * as adminCtrl from '../controllers/admin.ctrl';
import { adminParamValidation } from '../../config/param-validation';

const router = express.Router();

/**
 * @apiDescription add new jobs data;
 */
router.route("/new_jobs")
    .post(validate(adminParamValidation.addNewJobs), adminCtrl.addNewJobs)
    .put(adminCtrl.updateJob)
    .get(adminCtrl.fetchNewJobs)
    .delete(adminCtrl.deleteNewJobs);

router.route("/new_jobs/validate-path")
    .post(validate(adminParamValidation.validatePath), adminCtrl.validatePath)

router.route("/new_jobs/detail")
    .get(adminCtrl.fetchJobDetail)


export default router;
