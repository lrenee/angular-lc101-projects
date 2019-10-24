import { Component, OnInit } from '@angular/core';

@Component({
   selector: 'movie-list',
   templateUrl: './movie-list.component.html',
   styleUrls: ['./movie-list.component.css']
})
export class MovieListComponent implements OnInit {
   movies = ['Toy Story', 'The Shining', 'Sleepless in Seattle', 'The Martian'];
   error = Boolean(false);

   constructor() { }

   ngOnInit() {
   }

   addMovie (newTitle: string) {
      if(newTitle !== '' && !this.movies.includes(newTitle)){
         this.movies.push(newTitle);
         this.error = false;
      } else {
         this.error = true;
      }
   }
}
