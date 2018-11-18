import {NgModule} from "@angular/core";

@NgModule({imports: []})
class CliModule {
  public constructor(){
    console.log('bootstraps');
  }
};
new CliModule();
