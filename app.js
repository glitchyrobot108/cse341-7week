const express = require("express")
const app = express()
const cors = require("cors")
const fs = require("fs")

img = fs.readFileSync("image.txt", "utf-8")

const professional_package = {
    professionalName: "Casey Owens",
    base64Image: img,
    primaryDescription: "I like to program sometimes.",
    workDescription1: "I like to make games aswell.",
    workDescription2: "And do IT stuff too.",
    linkTitleText: "Other Links",
    nameLink: {
        firstName: "",
        lastName: ""
    },
    linkedInLink: {
        text: "LinkedIn",
        link: "https://www.linkedin.com/in/casey-o-41730a271/"
    },
    githubLink: {
        text: "GitHub",
        link: "https://github.com/glitchyrobot108"
    }
}

app.use(cors())

app.get("/professional", (req, res)=>{
    res.send(professional_package)
})

app.listen(8080)