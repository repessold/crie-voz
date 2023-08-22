import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SharedModule } from 'src/app/shared/shared.module';
import { GenerateVoiceComponent } from './generate-voice/generate-voice.component';
import { GenerateRoutingModule } from './generate-routing.module';


@NgModule({
  imports: [
    CommonModule,
    SharedModule,
    GenerateRoutingModule
  ],
  declarations: [
    GenerateVoiceComponent
    ]
})
export class GenerateModule { }
