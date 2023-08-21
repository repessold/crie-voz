import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenerateVoiceComponent } from './generate-voice/generate-voice.component';


@NgModule({
  imports: [
    CommonModule,
    SharedModule
  ],
  declarations: [GenerateVoiceComponent]
})
export class GenerateModule { }
