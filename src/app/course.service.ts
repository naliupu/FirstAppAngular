import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ICourse} from './course';
import { catchError} from 'rxjs/operators'                        
import { throwError as ObservableTthrowError} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CourseService {

  url: string = "assets/data/coursess.json"

  constructor(private http: HttpClient) { }

  getCourses(): Observable<ICourse[]>{

    return this.http
               .get<ICourse[]>(this.url)
               .pipe(
                 catchError(this.errorHandler)
               )


    // return[
    //   {'id': 1, 'name': 'VueJS', 'time': '10'},
    //   {'id': 2, 'name': 'ReactJS', 'time': '10'},
    //   {'id': 3, 'name': 'Angular', 'time': '10'},
    // ]
  }

  errorHandler(error: HttpErrorResponse){
    return ObservableTthrowError(error.message)
  }
}
