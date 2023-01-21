import { Component, HostListener, OnInit } from '@angular/core';
import { fromEvent, ReplaySubject, takeUntil } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {

  destroy$ = new ReplaySubject<void>();
  windowScrolled!: boolean;
  ngOnInit(): void {
    fromEvent(document.body, 'scroll')
        .pipe(takeUntil(this.destroy$))
        .subscribe(({target}) => {
          this.windowScrolled = (target as HTMLElement).scrollTop > 100;
        });
  }

  @HostListener('window:scroll', ['$event'])
  onScroll(ev: any){
    console.dir(document.body.scrollTop)
    // this.windowScrolled = (target as HTMLElement).scrollTop > 100;
  }

  scrollToTop(): void {
    document.body?.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth'
    });
  }
}
