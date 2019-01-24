import Joi from 'joi';

const authParamValidation = {

  // POST /api/admin/addNewJobs
  addNewJobs: {
    body: {
      username: Joi.string()
    }
}
}

export default authParamValidation;
