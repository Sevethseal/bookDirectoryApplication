import { checkSchema } from "express-validator";
export default {
  validateCreateBookRequest: () => {
    return checkSchema({
      title: {
        in: ["body"],
        exists: {
          errorMessage: "title required",
        },
      },
      highlight: {
        in: ["body"],
        exists: {
          errorMessage: "highlight required",
        },
      },
      author: {
        in: ["body"],
        exists: {
          errorMessage: "author required",
        },
      },
    });
  },
};
