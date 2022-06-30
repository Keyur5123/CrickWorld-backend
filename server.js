import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import fetch from "node-fetch"
import conn from "./db/db.js"
import Users_Suggestions from "./model/suggestions.js"

const app = express()

app.use(
    cors({
        origin: "*",
        credentials: true
    })
);
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: true }));
app.use(express.json());


app.get('/match-score/', async (req, res) => {
    await fetch('http://cricpro.cricnet.co.in/api/values/LiveLine/')
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));
})

app.get('/matches/upcomming-matches', async (req, res) => {
    await fetch('http://cricpro.cricnet.co.in/api/values/upcomingMatches')
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));
})


app.get('/Info', async (req, res) => {
    await fetch('http://cricpro.cricnet.co.in/api/values/LiveLine/')
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));
})

app.get('/matches/current-matches', async (req, res) => {
    await fetch('http://cricpro.cricnet.co.in/api/values/LiveLine/')
        .then((response) => response.json())
        .then((data) => res.send(data))
        .catch((err) => console.log(err));
})

app.post('/contactUs',async (req, res) => {
    try {
        const suggestion = await new Users_Suggestions(req.body)
        console.log("aaaaaaaaaaaaaaaaa",suggestion);
        
        await suggestion.save((err) => {
            if (err) {
                return res.status(400).json({ error : "Error occure while saving suggestion!.."})
            }
        })
        res.status(201).json({ message : "suggestion accepted!..." })

        if(!req.body){
            res.status(204).json({ message : "No data received!...." })
        }

    } catch (error) {
        res.status(400).send(error.message);
    }

})


// app.get('/matches/get-images/:TeamName', async(req,res)=>{
//     try {
//         const url = `http://cricnet.co.in/ManagePlaying/TeamImages/${req.params.TeamName}`
//         console.log("Aaaaaa",url);  

//         let a = await fetch(`http://cricnet.co.in/ManagePlaying/TeamImages/${req.params.TeamName}`)
//         let fimgb = Buffer.from(await a.arrayBuffer())
//         console.log("fimgb :- ",fimgb.toString("base64"));
//         let b = String.fromCharCode(fimgb)
//         console.log("b :- ",b);
//         return fimgb;

//         // .then((response) => response.json())
//         // .then((data) => {
//         //     const buffer = Buffer.alloc(10)
//         //     buffer.write(data.toString(),"utf-8")
//         //     console.log("data :- ",buffer[0])
//         // })
//         // .catch((err) => console.log(err));
//     } catch (error) {
//         res.status(400).send(error);    
//     }
// })

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on https://apicricketlivescore.herokuapp.com`);
})