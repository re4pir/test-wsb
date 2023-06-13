import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.scss'],
})
export class MainComponent implements OnInit {

  tabsBtn = document.querySelectorAll('.header__nav-link');
  tabBtn = document.querySelector('.header__nav-link')
  toggle() {
    this.tabsBtn.forEach(function(btn){
      btn.classList.remove('active')
    });
    this.tabBtn?.classList.add('active')
  }

  constructor(private router: Router, private http: HttpClient) {}
  ngOnInit(): void {
    this.http.get('');
  }

  goToUrl(url: string) {
    this.router.navigate([url]);
  }
}
