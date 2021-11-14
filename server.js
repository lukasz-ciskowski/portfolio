const express = require("express")
const next = require("next")
const Joi = require("joi")
const Boom = require("@hapi/boom")

require("dotenv").config()
const sgMail = require("@sendgrid/mail")
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const dev = process.env.NODE_ENV !== "production"
const port = process.env.PORT || 3000
const app = next({ dev })
const handle = app.getRequestHandler()

const emailSenderBodySchema = Joi.object({
    email: Joi.string().email().required(),
    message: Joi.string().required().min(5).max(250),
}).required()

app.prepare()
    .then(() => {
        const server = express()
        server.use(express.json())

        server.post("/api/email", (req, res, next) => {
            const { body } = req
            console.log(body)
            const result = emailSenderBodySchema.validate(body)
            if (result.error) throw Boom.badRequest(result.error)

            const msg = {
                to: process.env.PERSONAL_EMAIL,
                from: { email: process.env.SENDER_EMAIL, name: "Portfolio" },
                templateId: process.env.TEMPLATE_ID,
                dynamic_template_data: {
                    email: body.email,
                    message: body.message,
                },
            }

            sgMail
                .send(msg)
                .then(() => res.status(200).json({ statusCode: 200 }))
                .catch((e) => {
                    next(e)
                })
        })
        server.all("*", (req, res) => {
            return handle(req, res)
        })

        server.use((error, req, res) => {
            const { message, isBoom, output } = error
            if (isBoom) {
                return res.status(output.statusCode).json(output.payload)
            }

            const internalErr = Boom.internal(message).output
            return res.status(internalErr.statusCode).json(internalErr.payload)
        })

        server.listen(port, (err) => {
            if (err) throw err
            console.log(`> Ready on port ${port}`)
        })
    })
    .catch((err) => {
        console.log("Error starting the next application", err)
    })
