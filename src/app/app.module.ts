import { BoostrapModule } from './bootstrap/bootstrap.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';

/**Firebase/firestore modules */
import { AngularFireModule } from '@angular/fire';
import { environment } from '../environments/environment';

import { CoreModule } from './core/core.module';
import { CoreRoutingModule } from './core/core-routing.module';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { UserComponent } from './user/user.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    UserComponent
  ],
  imports: [
    BrowserModule,
    CoreRoutingModule,
    AngularFireModule.initializeApp(environment.firebase),
    CoreModule,
    BoostrapModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
