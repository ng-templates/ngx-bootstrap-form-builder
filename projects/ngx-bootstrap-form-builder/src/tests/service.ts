// import { BehaviorSubject, Observable, of, Subject } from 'rxjs';
// import { IWeatherObject } from 'src/app/models/weather';
// import { COUNTIES } from './counties';
// import { WEATHER_INFO } from './data';

// export class MockNgxBootstrapFormBuilderService {

//   private modal$ = new Subject<boolean>();
//   private watchlist: string[] = ['Aberdeen City', 'London', 'Cambridge'];
//   private selectedCounty!: string;
//   private click$ = new Subject<void>();
//   private pause$ = new BehaviorSubject<boolean>(true);

//   getCounties(): Observable<string[]> {
//     return of(COUNTIES);
//   }

//   getWeatherByLocation(location: string): Observable<IWeatherObject> {
//     WEATHER_INFO.name = location;
//     return of(WEATHER_INFO)
//   }

//   getWatchList() {
//     return this.watchlist;
//   }

//   setWatchList(item: string[]) {
//     if (!Array.isArray(this.watchlist)) {
//       this.watchlist = [];
//     }
//     this.watchlist = this.watchlist.concat(item).filter((value, index, self) => self.indexOf(value) === index);
//   }

//   removeFromWatchlist(item: string) {
//     this.watchlist = this.watchlist.filter(x => x !== item);
//   }

//   getSelectedCounty() {
//     return this.selectedCounty;
//   }

//   setSelectedCounty(county: string) {
//     return this.selectedCounty = county;
//   }

//   getModalState() {
//     return this.modal$.asObservable();
//   }

//   toggleModal(bool: boolean) {
//     this.modal$.next(bool);
//   }

//   getManualEvent() {
//     return this.click$.asObservable();
//   }

//   triggerManualEvent() {
//     this.click$.next();
//   }

//   getAutoUpdateStatus() {
//     return this.pause$;
//   }

//   toggleAutoUpdate() {
//     this.pause$.next(this.pause$.value ? false : true);
//   }

// }
