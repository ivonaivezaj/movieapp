import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======

>>>>>>> c64862abcc4ec2d0a2bdc3ec3f17de2dcc7dce98
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SearchCriteriaComponent } from './search-criteria/search-criteria.component';
import { MovieListComponent } from './movie-list/movie-list.component';
import { HttpClientModule } from '@angular/common/http';
import { WatchlistPageComponent } from './watchlist-page/watchlist-page.component';
<<<<<<< HEAD
import { NavComponent } from './nav/nav.component';
import { RouterModule } from '@angular/router';
import { StorageServiceModule } from 'ngx-webstorage-service';
import { LocalStorageService } from './local-storage.service';

=======
>>>>>>> c64862abcc4ec2d0a2bdc3ec3f17de2dcc7dce98

@NgModule({
  declarations: [
    AppComponent,
    SearchCriteriaComponent,
    MovieListComponent,
    WatchlistPageComponent,
<<<<<<< HEAD
    NavComponent,

=======
>>>>>>> c64862abcc4ec2d0a2bdc3ec3f17de2dcc7dce98
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
<<<<<<< HEAD
    HttpClientModule,
    FormsModule,
    StorageServiceModule,
    RouterModule
  ],
  providers: [HttpClientModule, LocalStorageService],
=======
    HttpClientModule
  ],
  providers: [],
>>>>>>> c64862abcc4ec2d0a2bdc3ec3f17de2dcc7dce98
  bootstrap: [AppComponent]
})
export class AppModule { }
