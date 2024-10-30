import nodemailer from "nodemailer";

export const sendEmail = async(options)=>{
    const transporter = nodemailer.createTransport({
        service : "gmail",
        host: "smtp.gmail.com",
        port: 465,
        auth: {
          user: process.env.SMTP_MAIL,
          pass: process.env.SMTP_PASSWORD,
        },
      });

    const mailOptions = {
        from : process.env.SMTP_MAIL,
        to : options.email,
        subject : options.subject,
        text : `Name : ${options.name}\nMessage : ${options.message} \n\nEmail of user who sent the message : ${options.userEmail}`
    }
    await transporter.sendMail(mailOptions)
}
