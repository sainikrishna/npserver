import express from "express";
import * as homeCtrl from '../controllers/home.ctrl';

const router = express.Router();

/**
 * @apiDescription Get Home data;
 */
router.route("/")
    .get(homeCtrl.home);


export default router;
