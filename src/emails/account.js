const postmark = require('postmark')
const client = new postmark.ServerClient(process.env.POSTMARK_API_KEY)

const sendWelcomeEmail = async (email, name) => {
    await client.sendEmail({
        "To": email,
        "From": '"ian@esuplai.com"',
        "Subject": "Hello there",
        "HtmlBody": "",
        "TextBody": `Welcome to the app, ${name}. Let me know how you get along with the app`
    })
}

const sendCanceledAccEmail = async (email, name) => {
    await client.sendEmail({
        "To": email,
        "From": '"ian@esuplai.com"',
        "Subject": "Sorry to see you go",
        "HtmlBody": "",
        "TextBody": `Hello, ${name}. I hope to see you back sometime soon.`
    })
}

module.exports = {
    sendWelcomeEmail,
    sendCanceledAccEmail
}
