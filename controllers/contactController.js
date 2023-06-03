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
    <div style="background-image: url('https://i.ibb.co/Yh4DNN8/mesh-gradient.png'); background-repeat: no-repeat; background-size: cover;">
      <img src="https://i.ibb.co/zJH7TND/poster.png" width="300" height="300" alt="logo"/><br/>
      <p>From: ${email}</p><br/>
      <p><b>${message}</b></p>
    </div>
    `,
  };

  // Send email to admin
  transporter.sendMail(mailOptions, (error, info) => {
    if (error) {
      console.log(error);
      res.status(500).send("Error sending email");
    } else {
      console.log("Email sent: " + info.response);
      res.status(200).send("Email sent successfully");
    }
  });

  // Send confirmation email to user
  const confirmMailOptions = {
    from: "seiffsameh00@gmail.com",
    to: email,
    subject: "Seif Eldin Sameh Form Confirmation",
    text: `Thank you for contacting me! I will get back to you shortly.`,
    html: `
    <div style="background-image: url('https://i.ibb.co/Yh4DNN8/mesh-gradient.png'); background-repeat: no-repeat; background-size: cover;">
      <img src="https://i.ibb.co/zJH7TND/poster.png" width="300" height="300" alt="logo"/><br/>
      <p>Thank you for contacting me! I will get back to you shortly.</p></br>
      <p>شكرا لاتصالك بي! سوف أعود اليك قريبا</p>
    </div>
    `,
  };

  transporter.sendMail(confirmMailOptions, (error, info) => {
    if (error) {
      console.log(error);
    } else {
      console.log("Confirmation email sent: " + info.response);
    }
  });
};
