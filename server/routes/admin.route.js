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
    .put(validate(adminParamValidation.addNewJobs), adminCtrl.updateJob)
    .get(adminCtrl.fetchNewJobs)
    .delete(adminCtrl.deleteNewJobs);

router.route("/new_jobs/validate-path")
    .post(validate(adminParamValidation.validatePath), adminCtrl.validatePath)


export default router;
