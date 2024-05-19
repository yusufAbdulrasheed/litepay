const nodemailer = require('nodemailer')
const promisify = require('es6-promisify')


const transport = nodemailer.createTransport({
  service:process.env.MAIL_SERVICE,
  auth: {
    user: process.env.MAIL_USER,
    pass: process.env.MAIL_PASSWORD
  }
})

const mailOptions = {
  from: `Abdulrasheed <noreply@litepay.com>`,
  to: options.user.email,
  subject: options.subject,
  text:`Hello. You have requested a password reset. Please click the following link to reset your password. Note this link is only valid for the next hour ${resetURL}
  if you didn't request this email please ignore it.
  ` 
}

const sendMail = promisify(transport.sendMail, transport)
return sendMail(mailOptions)
