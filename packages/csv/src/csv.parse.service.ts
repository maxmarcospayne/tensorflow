import {Injectable} from '@angular/core';
import * as fs from "fs";
import * as parse from "csv-parse";
const transformer = require('stream-transform');


@Injectable()
export class CsvParseService {
    public parse(fileName: string): void {
        const csvFile = fs.createReadStream(fileName);
        const parser = parse({delimiter: ','});
        const timeTag = `parse ${fileName}`;
        console.time(timeTag);
        csvFile.pipe(parser).pipe(transformer(function (chunk: any, callback: Function) {
            // console.log(chunk);
            callback(null, chunk.join(''));
        })).end(() => {
            console.timeEnd(timeTag);
        });
    }
}