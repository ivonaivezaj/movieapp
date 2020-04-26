import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
<<<<<<< HEAD
import { MovieListComponent } from './movie-list/movie-list.component';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';


const routes: Routes = [
  { path: 'detail/:id', component: MovieListComponent },
  { path: '', component: SearchCriteriaComponent },
  { path: 'favorites', component: WatchlistPageComponent },
  { path: 'popular', component: SearchCriteriaComponent },
  { path: 'upcoming', component: SearchCriteriaComponent },
];
=======


const routes: Routes = [];
>>>>>>> c64862abcc4ec2d0a2bdc3ec3f17de2dcc7dce98

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
