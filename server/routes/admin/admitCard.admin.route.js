import express from "express";
import validate from 'express-validation';
import * as admitCard from '../../controllers/admin/admitCard.admin.ctrl';
import { adminParamValidation } from '../../../config/param-validation';

const router = express.Router();

/**
 * @apiDescription curd new jobs data;
 */
router.route("/")
    .post(validate(adminParamValidation.addAdmitCard), admitCard.addAdmitCard)
    .put(admitCard.updateAdmitCard)
    .get(admitCard.fetchAdmitCard)
    .delete(admitCard.deleteAdmitCard);

router.route("/detail")
    .get(admitCard.fetchAdmitCardDetail)


export default router;
