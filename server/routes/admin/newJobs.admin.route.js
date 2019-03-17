import express from "express";
import validate from 'express-validation';
import * as newJobs from '../../controllers/admin/newJobs.admin.ctrl';
import { adminParamValidation } from '../../../config/param-validation';

const router = express.Router();

/**
 * @apiDescription curd new jobs data;
 */
router.route("/")
    .post(validate(adminParamValidation.addNewJobs), newJobs.addNewJobs)
    .put(newJobs.updateJob)
    .get(newJobs.fetchNewJobs)
    .delete(newJobs.deleteNewJobs);

router.route("/detail")
    .get(newJobs.fetchJobDetail)


export default router;
