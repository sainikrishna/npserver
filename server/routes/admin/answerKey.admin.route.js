import express from "express";
import validate from 'express-validation';
import * as answerKey from '../../controllers/admin/answerKey.admin.ctrl';
import { adminParamValidation } from '../../../config/param-validation';

const router = express.Router();

/**
 * @apiDescription curd answer key data;
 */
router.route("/")
    .post(validate(adminParamValidation.addAnswerKey), answerKey.addAnswerKey)
    .put(answerKey.updateAnswerKey)
    .get(answerKey.fetchAnswerKey)
    .delete(answerKey.deleteAnswerKey);

router.route("/detail")
    .get(answerKey.fetchAnswerKeyDetail)


export default router;
