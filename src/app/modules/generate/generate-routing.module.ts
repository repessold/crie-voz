import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { GenerateVoiceComponent } from './generate-voice/generate-voice.component';

const routes: Routes = [
  {
    path: '',
    component: GenerateVoiceComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]

})
export class GenerateRoutingModule { }
