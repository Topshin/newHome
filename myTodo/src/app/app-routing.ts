import {RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./home/home.component";
import {NgModule} from "@angular/core";
import {BootstrapComponent} from "./bootstrap/bootstrap.component";
import {JqueryComponent} from "./jquery/jquery.component";
import {HttpComponent} from "./http/http.component";
import {AngularComponent} from "./angular/angular.component";
/**
 * Created by sindonghyeon on 2017. 6. 18..
 */

const routes: Routes = [
  {path: 'home', component: HomeComponent},
  {path: 'bootstrap', component: BootstrapComponent},
  {path: 'jquery', component: JqueryComponent},
  {path: 'http', component: HttpComponent},
  {path: 'angular', component: AngularComponent},

];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}

