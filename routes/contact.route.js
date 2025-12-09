import express, { Router } from "express"
import { HandleContactForm } from "../controller/contact.controller.js"

const ContactRouter=express.Router()

ContactRouter.post("/message",HandleContactForm)

export default ContactRouter