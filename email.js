import emailjs from "@emailjs/browser";
import { log } from "console";

async function send() {
    emailjs.init("INgZdgf0aKP01cRR9");
    let response = await emailjs.send("service_8b7pspp", "template_xis1p7l", {
        email: "theonlyaceassassin@gmail.com",
        message: "Hello",
    });
    log("jelel");
}

send();
