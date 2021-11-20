import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatSelectModule} from '@angular/material/select';
import {MatProgressBarModule} from '@angular/material/progress-bar';
import {MatTabsModule} from '@angular/material/tabs';
import {MatInputModule} from '@angular/material/input';
import { UserDetailsComponent } from './user-details/user-details.component';
import { HeaderComponent } from './header/header.component';




@NgModule({
  declarations: [
    AppComponent,
    UserDetailsComponent,
    HeaderComponent,
    
    
    
    
  ],
  imports: [
    BrowserModule,
     FormsModule,
     BrowserAnimationsModule,
    
     MatButtonModule,
     MatIconModule,
     MatCardModule,
     MatFormFieldModule,
     MatSelectModule,
     MatTabsModule,
     MatProgressBarModule,
     MatInputModule,
     
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
