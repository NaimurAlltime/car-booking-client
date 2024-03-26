import { z } from "zod";

const addLocationValidation = z.object({
  name: z.string({
    required_error: "title is required",
  }),
  mapIframe: z.string({
    required_error: "map link is required",
  }),
});

export default addLocationValidation;