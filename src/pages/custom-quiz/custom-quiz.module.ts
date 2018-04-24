import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { CustomQuizPage } from './custom-quiz';

@NgModule({
  declarations: [
    CustomQuizPage,
  ],
  imports: [
    IonicPageModule.forChild(CustomQuizPage),
  ],
})
export class CustomQuizPageModule {}
