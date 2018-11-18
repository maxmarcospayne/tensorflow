import {NgModule} from "@angular/core";
import {CsvParseService} from '@odin/csv';

@NgModule({imports: [], providers: [CsvParseService]})
class CliModule {
  public constructor(csv: CsvParseService){
    console.log('bootstraps');
    csv.parse('/home/francisco/Downloads/california_housing_train.csv');
  }
};
new CliModule(new CsvParseService());
