import { BrowserModule } from "@angular/platform-browser";
import { NgModule } from "@angular/core";
import { RouterModule } from "@angular/router";
import { HttpClientModule } from "@angular/common/http";
import { FormsModule } from "@angular/forms";
import { AppComponent } from "./app.component";
import { HomeComponent } from "./home/home.component";
import { HeaderComponent } from "./header/header.component";
import { FooterComponent } from "./footer/footer.component";
import { PagenotfoundComponent } from "./pagenotfound/pagenotfound.component";
import { MoreInformationComponent } from "./more-information/more-information.component";
import { GotHttpService } from "./got-http.service";
import { NgxSpinnerModule } from "ngx-spinner";
import { NgbModule } from "@ng-bootstrap/ng-bootstrap";
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import {AngularFittextModule} from 'angular-fittext';
import { FilterPipe } from './filter.pipe';
import { SelectPipe } from './select.pipe';
import { SortPipe } from './sort.pipe';
import {GoTopButtonModule} from 'ng2-go-top-button';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    HeaderComponent,
    FooterComponent,
    PagenotfoundComponent,
    MoreInformationComponent,
    SortPipe,
    FilterPipe,
    SelectPipe
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgbModule,
    FormsModule,
    NgxSpinnerModule,
    BrowserAnimationsModule,
    AngularFittextModule,
    GoTopButtonModule,
    ToastrModule.forRoot(),
    RouterModule.forRoot([
      {
        path: "",
        redirectTo: "home",
        pathMatch: "full"
      },
      {
        path: "home",
        component: HomeComponent
      },
      {
        path: "books/:bookId",
        component: MoreInformationComponent
      },
      {
        path: "characters/:characterId",
        component: MoreInformationComponent
      },
      {
        path: "houses/:houseId",
        component: MoreInformationComponent
      },
      {
        path: "**",
        component: PagenotfoundComponent
      }
    ])
  ], 
  providers: [GotHttpService],
  bootstrap: [AppComponent]
})
export class AppModule {}
