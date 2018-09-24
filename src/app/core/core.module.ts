import { AuthGuard } from './auth.guard';
import { NgModule } from '@angular/core';

import { AuthService } from './auth.service';
import { AngularFireAuthModule } from '@angular/fire/auth';
import { AngularFirestoreModule } from '@angular/fire/firestore';

@NgModule({
  imports: [
    AngularFireAuthModule,
    AngularFirestoreModule    
  ],
  providers: [AuthService, AuthGuard]
})
export class CoreModule { }