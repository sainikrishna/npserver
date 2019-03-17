import express from "express";
import validate from 'express-validation';
import * as results from '../../controllers/admin/results.admin.ctrl';
import { adminParamValidation } from '../../../config/param-validation';

const router = express.Router();
/**
 * @apiDescription curd results data;
 */
router.route("/")
    .post(validate(adminParamValidation.addResults), results.addResults)
    .put(results.updateResults)
    .get(results.fetchResults)
    .delete(results.deleteResults);

router.route("/validate-path")
    .post(validate(adminParamValidation.validatePath), results.validatePath)

router.route("/detail")
    .get(results.fetchResultDetail)


export default router;
