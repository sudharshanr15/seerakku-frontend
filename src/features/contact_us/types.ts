import { coerce, z } from "zod";

export const contact_schema = z.object({
    full_name: z
        .string()
        .min(3, { message: "Full Name must contain at least 3 character(s)" }),
    email: z.string().email(),
    mobile_no: z
        .string()
        .refine((value) =>
            /^[+]{1}(?:[0-9-()/.]\s?){6,15}[0-9]{1}$/.test(value)
        ),
    about: z.string().optional(),
});

export type ContactType = z.infer<typeof contact_schema>;
