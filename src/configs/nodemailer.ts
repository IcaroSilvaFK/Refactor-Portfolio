import nodemailer from "nodemailer";

export const transport = nodemailer.createTransport({
  host: "smtp.mailtrap.io",
  port: 2525,
  auth: {
    user: "2afbacbf4f74b1",
    pass: "c31ba0e8d6f7e8",
  },
});
