import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { GroupedteacherComponent } from './groupedteacher/groupedteacher.component';
import { UngroupedteacherComponent } from './ungroupedteacher/ungroupedteacher.component';
import { GroupedstudentComponent } from './groupedstudent/groupedstudent.component';
import { UngroupedstudentComponent } from './ungroupedstudent/ungroupedstudent.component';

@NgModule({
  declarations: [
    AppComponent,
    GroupedteacherComponent,
    UngroupedteacherComponent,
    GroupedstudentComponent,
    UngroupedstudentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
