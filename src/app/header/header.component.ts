import { Component, OnInit } from "@angular/core";
declare let $: any;
@Component({
  selector: "app-header",
  templateUrl: "./header.component.html",
  styleUrls: ["./header.component.css"]
})
export class HeaderComponent implements OnInit {
  constructor() {}

  ngOnInit() {
    // Header scroll class
    $(window).scroll(function() {
      if ($(this).scrollTop() > 0 ) {
        $("nav").toggleClass("scrolled", $(this).scrollTop() > 100);
        $("#navbar").css({ opacity: "1" });
        $("#navbar").css({ visibility: "visible" });
      }
    });
  }
}
