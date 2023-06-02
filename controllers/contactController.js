const nodemailer = require("nodemailer");

exports.sendEmail = async (req, res) => {
  const { email, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "gmail",
    auth: {
      user: "seiffsameh00@gmail.com",
      pass: "kjjhbkkqjcdbeqiu",
    },
  });

  const mailOptions = {
    from: email,
    to: "seiffsameh00@gmail.com",
    subject: "Seif Eldin Sameh Form",
    text: `Email: ${email}`,
    html: `
    <img src="https://i.ibb.co/zJH7TND/poster.png" width="300" height="300" alt="logo"/><br/><p>From: ${email}</p><br/><p><b>${message}</b></p><br/><img src="https://i.ibb.co/M5RxRLH/signature.png" width="200" height="200" alt="signature"/>
    `,
  };

  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });
};
