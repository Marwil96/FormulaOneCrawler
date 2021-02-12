var express = require("express");
const axios = require("axios");
const fs = require("fs");
const getDrivers = require("./getDrivers")
const drivers = require('./drivers.json')
const cheerio = require("cheerio");
const crawler = express.Router();


const FormatDriverData = (data) => {
  return {
    name: data.columns[0],
    nation: data.columns[1],
    born: data.columns[2],
    drivers_championships: data.columns[3],
    race_entries: data.columns[4],
    race_starts: data.columns[5],
    pole_positions: data.columns[6],
    race_wins: data.columns[7],
    podiums: data.columns[8],
    fastest_laps: data.columns[9],
    points: data.columns[10],
  };
}

const FetchDrivers = (url) => {
  // const firstDriver = {
  //   name: drivers.tables[1].rows[1].columns[0],
  //   nation: drivers.tables[1].rows[1].columns[1],
  //   born: drivers.tables[1].rows[1].columns[2],
  //   drivers_championships: drivers.tables[1].rows[1].columns[3],
  //   race_entries: drivers.tables[1].rows[1].columns[4],
  //   race_starts: drivers.tables[1].rows[1].columns[5],
  //   pole_positions: drivers.tables[1].rows[1].columns[6],
  //   race_wins: drivers.tables[1].rows[1].columns[7],
  //   podiums: drivers.tables[1].rows[1].columns[8],
  //   fastest_laps: drivers.tables[1].rows[1].columns[9],
  //   points: drivers.tables[1].rows[1].columns[10]
  // };

  const formattedDrivers = Object.keys(drivers.tables[1].rows).map((key) => {
    return FormatDriverData(drivers.tables[1].rows[key]);
  })

  const storeData = (data, path) => {
    try {
      fs.writeFileSync('./formattedDrivers.json', JSON.stringify(formattedDrivers));
    } catch (err) {
      console.error(err);
    }
  };

  storeData()
  
  console.log(formattedDrivers);
  // fetchData('https://en.wikipedia.org/wiki/List_of_Formula_One_drivers').then( async (res) => { 
  //   const html = res.data;
  //   const $ = cheerio.load(html);

  //   // data = await getDrivers($);   


  // })
};

async function fetchData(url) {
  console.log("Crawling data...");
  // make http call to url
  let response = await axios(url).catch((err) => console.log(err));

  if (response.status !== 200) {
    console.log("Error occurred while fetching data");
    return;
  }
  return response;
}

FetchDrivers()


module.exports = crawler;
