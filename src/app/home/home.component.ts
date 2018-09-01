import { Component, OnInit, OnDestroy} from "@angular/core";
import { GotHttpService } from "../got-http.service";
import { NgxSpinnerService } from "ngx-spinner";
import * as AOS from "aos";
declare var $ :any;
@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.css"]
})
export class HomeComponent implements OnInit, OnDestroy {
  public allBooks = [];
  public allCharacters = [];
  public allHouses = [];
  public allItems: any = [];
  public search:string;
  public view:string;
  errorMessage: any;
 
  constructor(
    private GotHttpService: GotHttpService,
    private spinner: NgxSpinnerService
  ) {}

  ngOnInit() {
      /** spinner starts on init */
      this.spinner.show();

      setTimeout(() => {
        /** spinner ends after 1.4 seconds */
        this.spinner.hide();
      }, 1400);

    AOS.init(); 
    
    //for books
    this.allBooks = this.GotHttpService.getAllBooks().subscribe(
      data => {
        this.allBooks = data;
        this.allBooks.sort((a, b) => a.name.localeCompare(b.name)); //to sort books alphabetically
        this.allItems = this.allItems.concat(this.allBooks);
        console.log(this.allItems);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    // for characters
    this.allCharacters = this.GotHttpService.getAllCharacters().subscribe(
      data => {
        this.allCharacters = data;
        this.allCharacters.sort((a, b) => a.name.localeCompare(b.name)); //to sort characters alphabetically
        this.allItems = this.allItems.concat(this.allCharacters);
        for (let item of this.allItems) {
          if (item.name == "") {
            item.name = "N/A";
          }
        }
        console.log(this.allItems);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );

    // for houses
    this.allHouses = this.GotHttpService.getAllHouses().subscribe(
      data => {
        this.allHouses = data;
        this.allHouses.sort((a, b) => a.name.localeCompare(b.name)); //to sort houses alphabetically
        this.allItems = this.allItems.concat(this.allHouses);
        for (let item of this.allItems) {
          if (item.coatOfArms == "") {
            item.coatOfArms = "N/A";
          }
        }
        console.log(this.allItems);
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
    $(document).ready(function(){
      $('.selectpicker').selectpicker();
      });
  }

  ngOnDestroy() {}

  

}
