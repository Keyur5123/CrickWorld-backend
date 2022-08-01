'use strict';

import express from "express"
import cors from "cors"
import bodyParser from "body-parser"
import fetch from "node-fetch"
import conn from "./db/db.js"
import Users_Suggestions from "./model/suggestions.js"
import { getCricketApiKey } from "./Utils/getCricketApiKey.js"
import dotenv from "dotenv"

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
dotenv.config();

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

app.post('/contactUs', async (req, res) => {
    try {
        const suggestion = await new Users_Suggestions(req.body)
        await suggestion.save((err) => {
            if (err) {
                return res.status(400).json({ error: "Error occure while saving suggestion!.." })
            }
        })
        res.status(201).json({ message: "suggestion accepted!..." })

        if (!req.body) {
            res.status(204).json({ message: "No data received!...." })
        }

    } catch (error) {
        res.status(400).send(error?.message);
    }

})


app.post('/matches/get-images/:TeamAImage/:TeamBImage', async (req, res) => {
    try {
        let TeamAImage = await fetch(`http://cricnet.co.in/ManagePlaying/TeamImages/${req.params.TeamAImage}`)
        let imageTeamABuffer = Buffer.from(await TeamAImage.arrayBuffer())

        let TeamBImage = await fetch(`http://cricnet.co.in/ManagePlaying/TeamImages/${req.params.TeamBImage}`)
        let imageTeamBBuffer = Buffer.from(await TeamBImage.arrayBuffer())

        res.status(200).json({ TeamAImage: imageTeamABuffer, TeamBImage: imageTeamBBuffer })

    } catch (error) {
        res.status(400).send(error);
    }
})

// app.get('/newsApi',async(req,res)=> {
//     await fetch('https://newsapi.org/v2/everything?q=cricket&apiKey=6b7ec074a4504f248afc6be98c4881d0')
//     .then(res => res.json())
//     .then(res1 => {
//         console.log("res :- ",res1);
//         const arr = res1.articles.splice(2)
//         res.status(200).send(arr)
//     })
//     .catch(err => console.log(err))
// })

app.get('/crick__currentMatches', async (req, res) => {

    const apiKey = getCricketApiKey();
    await fetch(`https://api.cricapi.com/v1/currentMatches?apikey=${apiKey}&offset=0`)
        .then((response) => response.json())
        .then((data) => {
            if (data.status == 'failure') {
                res.status(200).json({ status: data?.status })
                return;
            }
            res.status(200).send({ data: data?.data, status: data?.status })
        })
        .catch((err) => console.log(err));
})

app.post('/crick__ScoreBoard', async (req, res) => {
    const apiKey = getCricketApiKey();
    await fetch(`https://api.cricapi.com/v1/match_scorecard?apikey=${apiKey}&id=${req.body.id}`)
        .then(res => res.json())
        .then(data => {
            if (data?.status == 'failure') {
                res.status(401).json({ status: data?.status })
                return;
            }
            res.status(200).send(data?.data)
        })
        .catch(err => console.log(err))
})

app.post('/crick__matchSquad', async (req, res) => {
    const apiKey = getCricketApiKey();

    await fetch(`https://api.cricapi.com/v1/match_squad?apikey=${apiKey}&id=${req.body.id}`)
        .then(res => res.json())
        .then(data => {
            if (data.status == 'failure') {
                res.status(500).json({ warn: "hits today exceeded hits limit" })
                return ; 
            }
            res.status(200).send(data)
        })
        .catch(err => console.log(err))
})

app.post('/player-info', async (req, res) => {

    const apiKey = getCricketApiKey();

    await fetch(`https://api.cricapi.com/v1/players_info?apikey=${apiKey}&id=${req.body.id}`)
        .then(res => res.json())
        .then(data => {
            if (data.status == 'failure') {
                res.status(500).json({ warn: "hits today exceeded hits limit" });
                return;
            }
            res.status(200).json({ data: data?.data })
        })
        .catch(err => console.log(err))
})

app.listen(process.env.PORT || 5000, () => {
    console.log(`server is running on https://apicricketlivescore.herokuapp.com`);
})