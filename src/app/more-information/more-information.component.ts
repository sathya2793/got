import { Component, OnInit } from "@angular/core";

import { Router, ActivatedRoute } from "../../../node_modules/@angular/router";
import { GotHttpService } from "../got-http.service";
import { NgbAccordionConfig } from "@ng-bootstrap/ng-bootstrap";
import { ToastrService } from 'ngx-toastr';
import { NgxSpinnerService } from "ngx-spinner";
import { Location } from '@angular/common';
@Component({
  selector: "app-more-information",
  templateUrl: "./more-information.component.html",
  styleUrls: ["./more-information.component.css"],
  providers: [Location]
})
export class MoreInformationComponent implements OnInit{
  public isCollapsed = false;
  public currentBook;
  public currentCharacter;
  public currentHouse;

  constructor(
    private _route: ActivatedRoute,
    private router: Router,
    private GotHttpService: GotHttpService,
    config: NgbAccordionConfig,
    private toastr: ToastrService,
    private spinner: NgxSpinnerService,
    private location: Location
  ) {
    console.log("Details constructor is called.");
    // customize default values of accordions used by this component tree
    config.closeOthers = true;
    config.type = "info";
  }

  goBackToPreviousPage(): any{

    this.location.back();

  }

  ngOnInit() {
  
    console.log("Details onInit is called.");
    /** spinner starts on init */
    this.spinner.show();

    setTimeout(() => {
      /** spinner ends after 1.4 seconds */
      this.spinner.hide();
    }, 1000);

    
    //for books
    let bookId = this._route.snapshot.paramMap.get("bookId");
    console.log(bookId);
    if(bookId != null){
    this.GotHttpService.getSingleBookInfo(bookId).subscribe(
      data => {
        console.log("Books data");
        console.log(data);
        this.currentBook = data;
        for (let item in this.currentBook) {
          if (this.currentBook[item] == "") {
            this.currentBook[item] = "N/A";
          }
        }
        this.toastr.success('successfully loaded');
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
  }

    //for characters
    let characterId = this._route.snapshot.paramMap.get("characterId");
    console.log(characterId);
    if(characterId != null){
    this.GotHttpService.getSingleCharacterInfo(characterId).subscribe(
      data => {
        console.log("Characters data");
        console.log(data);
        this.currentCharacter = data;
        for (let item in this.currentCharacter) {
          if (this.currentCharacter[item] == "") {
            this.currentCharacter[item] = "N/A";
          }
        }
        this.toastr.success('successfully loaded');
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
  }

    //for houses
    let houseId = this._route.snapshot.paramMap.get("houseId");
    console.log(houseId);
    if(houseId != null){
    this.GotHttpService.getSingleHouseInfo(houseId).subscribe(
      data => {
        console.log("Houses data");
        console.log(data);
        this.currentHouse = data;
        for (let item in this.currentHouse) {
          if (this.currentHouse[item] == "") {
            this.currentHouse[item] = "N/A";
          }
        }
        this.toastr.success('successfully loaded');
      },
      error => {
        console.log("some error occured");
        console.log(error.errorMessage);
      }
    );
  }
  }

}
