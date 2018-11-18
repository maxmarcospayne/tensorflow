import * as parse from 'csv-parse';
import * as fs from 'fs';

//TODO: create types for stream-transform
const transformer = require('stream-transform');

const fileName = '/home/francisco/Downloads/california_housing_train.csv';
const csvFile = fs.createReadStream(fileName);
// const columns = ["longitude", "latitude", "housing_median_age", "total_rooms", "total_bedrooms", "population", "households", "median_income", "median_house_value"];

const parser = parse({delimiter: ','});
// Stream.from(fileName).pipe();
// file

const timeTag = `parse ${fileName}`;
console.time(timeTag);
csvFile.pipe(parser).pipe(transformer(function (chunk: any, callback: Function) {
    // console.log(chunk);
    callback(null, chunk.join(''));
})).end(()=>{
    console.timeEnd(timeTag);
});
