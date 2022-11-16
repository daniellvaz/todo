import nodemailer from "nodemailer";

interface Data {
  to: string;
  subject: string;
  text: string;
}

export default async function mailProvider({ to, subject, text }: Data): Promise<string> {
  const transporter = nodemailer.createTransport({
    host: "smtp.mail.yahoo.com",
    port: 465,
    secure: true,
    
    auth: {
      user: process.env.MAIL_USER,
      pass: process.env.MAIL_PASS,
    },
    debug: false,
    logger: true
  });

  const sendedMail = await transporter.sendMail({
    from: process.env.MAIL_USER,
    to,
    subject,
    text
  });

  return sendedMail.messageId;
}