import Joi from 'joi';

const authParamValidation = {

  addNewJobs: {
    body: {
      title: Joi.string().required(),
      name: Joi.string().required(),
      start_date: Joi.string().required(),
      last_date:  Joi.string().required(),
      apply_link: Joi.string().required(),
      notification_link: Joi.string().required(),
      official_site: Joi.string().required(),
      short_info: Joi.string().required(),
      selection_board: Joi.string().required(),
      advertise_no: Joi.string(),
      important_dates: Joi.string().required(),
      application_fee: Joi.string().required(),
      application_fee: Joi.string().required(),
      useful_links: Joi.string().required(),
      post_details: Joi.string().required(),
      created_at: Joi.string().required(),
      updated_at: Joi.string().required(),
      total_posts: Joi.number(),
      path: Joi.string()
    }
  },

  validatePath: {
    path: Joi.string().required()
  },

  addResults: {
    body: {
      title: Joi.string().required(),
      name: Joi.string().required(),
      start_date: Joi.string().required(),
      last_date:  Joi.string().required(),
      apply_link: Joi.string().required(),
      notification_link: Joi.string().required(),
      official_site: Joi.string().required(),
      short_info: Joi.string().required(),
      selection_board: Joi.string().required(),
      advertise_no: Joi.string(),
      important_dates: Joi.string().required(),
      application_fee: Joi.string().required(),
      application_fee: Joi.string().required(),
      useful_links: Joi.string().required(),
      post_details: Joi.string().required(),
      created_at: Joi.string().required(),
      updated_at: Joi.string().required(),
      total_posts: Joi.number(),
      path: Joi.string().required(),
      result_link: Joi.string().required(),
      result_date: Joi.string().required(),
    }
  },

  addAdmitCard: {
    body: {
      title: Joi.string().required(),
      name: Joi.string().required(),
      start_date: Joi.string().required(),
      last_date:  Joi.string().required(),
      apply_link: Joi.string().required(),
      notification_link: Joi.string().required(),
      official_site: Joi.string().required(),
      short_info: Joi.string().required(),
      selection_board: Joi.string().required(),
      advertise_no: Joi.string(),
      important_dates: Joi.string().required(),
      application_fee: Joi.string().required(),
      application_fee: Joi.string().required(),
      useful_links: Joi.string().required(),
      post_details: Joi.string().required(),
      created_at: Joi.string().required(),
      updated_at: Joi.string().required(),
      total_posts: Joi.number(),
      path: Joi.string(),
      admitcard_link: Joi.string(),
    }
  },

  addAnswerKey: {
    body: {
      title: Joi.string().required(),
      name: Joi.string().required(),
      start_date: Joi.string().required(),
      last_date:  Joi.string().required(),
      apply_link: Joi.string().required(),
      notification_link: Joi.string().required(),
      official_site: Joi.string().required(),
      short_info: Joi.string().required(),
      selection_board: Joi.string().required(),
      advertise_no: Joi.string(),
      important_dates: Joi.string().required(),
      application_fee: Joi.string().required(),
      application_fee: Joi.string().required(),
      useful_links: Joi.string().required(),
      post_details: Joi.string().required(),
      created_at: Joi.string().required(),
      updated_at: Joi.string().required(),
      total_posts: Joi.number(),
      path: Joi.string(),
      answerkey_link: Joi.string().required(),
    }
  },
}

export default authParamValidation;
