const json = require("jsonwebtoken");
const express = require("express");
const app = express();
const bcrypt = require("bcrypt")





app.use(express.json())

let data = ""


app.post("/password", async (req, res) => {
    let { psd } = req.body;


    if (!psd) {
        return res.status(400).json("enter the Password")
    }
    else {
        let hash = await bcrypt.hash(psd, 10);

        if (!hash) {
            return res.status(500).json("Failed to hash the password");
        }
        else {
            let cmpare = await bcrypt.compare(psd, hash)
            if (cmpare) {
                let token = await json.sign({ name: "rupali" }, "secretkey", { expiresIn: "1hr" })
                data = token
                res.status(200).json({ msg: "Successfully token generated", token: data });
            }
        }

    }
})

app.get("/data/:id", async (req, res) => {

    let token = req.params.id;
    try {

        let verify = await json.verify(token, "secretkey");
        console.log(verify);

        
          res.status(200).json({ msg: "user is verified" })
    }
   catch(e){
    res.status(401).send("user is not verified")
   }
})
app.get("/", (req, res) => {
    res.send("hello")
})

app.listen(3000, () => {
    console.log("Listening on 3000 port");
})