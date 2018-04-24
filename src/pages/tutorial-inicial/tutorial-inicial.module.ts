import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { TutorialInicialPage } from './tutorial-inicial';

@NgModule({
  declarations: [
    TutorialInicialPage,
  ],
  imports: [
    IonicPageModule.forChild(TutorialInicialPage),
  ],
})
export class TutorialInicialPageModule {}
