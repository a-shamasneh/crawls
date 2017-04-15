import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import  {GetTendersService} from  './get-tenders.service';
import { AppComponent } from './app.component';
import { TendersComponent } from './tenders/tenders.component';
import { CategoryPipe } from './category.pipe';

@NgModule({
  declarations: [
    AppComponent,
    TendersComponent,
    CategoryPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [GetTendersService],
  bootstrap: [AppComponent]
})
export class AppModule { }
