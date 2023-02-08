/*
File: app.js
Author: Székely Balázs Csaba
Copyright: 2023, Székely Balázs Csaba
Group: SZOFT I/1/E
Date: 2023-02-08
Github: https://github.com/BlaiseD91/
Licenc: GNU GPL
*/



//console.log("A kapcsolat működik")

const hosszIn = document.querySelector("#hossz");
const elotolasIn = document.querySelector("#elotolas");
const fordulatszamIn = document.querySelector("#fordulatszam");
const calcButton = document.querySelector("#calcButton");
const eredmenyOut = document.querySelector("#eredmeny");


calcButton.addEventListener('click', () => {
    //console.log("A gomb működik");

    var hossz = parseInt(hosszIn.value);
    var elotolas = parseInt(elotolasIn.value);
    var fordulatszam = parseInt(fordulatszamIn.value);
    var eredmeny = hossz/(elotolas*fordulatszam);

    //console.log(eredmeny);
    eredmenyOut.value = eredmeny;
    mezoTorles();
    
});

function mezoTorles(){
    hosszIn.value = '';
    elotolasIn.value = '';
    fordulatszamIn.value = '';
};


