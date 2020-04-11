//import { response } from "express";

function userData() {
    const url = "http://localhost:3000/api/details";
    const res = document.getElementById('results')
    fetch(url)
    .then(response => response.json())
    .then(data => {
        console.log(data);
        res.innerHTML = JSON.stringify(data);
    })
}