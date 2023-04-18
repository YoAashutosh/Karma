const nodeMailer = require("nodemailer");

const sendMail = async (options) => {
  const transporter = nodeMailer.createTransport({
    service: "hotmail",
    auth: {
      user: "karmaconstruction1@outlook.com",
      pass: "Itachiuchiha@11",
    },
  });

  const mailOptions = {
    from: ' "Karma Construction"<karmaconstruction1@outlook.com>',
    to: options.email,
    subject: options.subject,
    text: options.message,
  };
  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
    } else {
      console.log("Email sent: " + info.response);
    }
  });

  await transporter.sendMail(mailOptions);
};

module.exports = sendMail;
