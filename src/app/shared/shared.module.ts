import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import {MatToolbarModule} from '@angular/material/toolbar';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {A11yModule} from '@angular/cdk/a11y';
import {MatInputModule} from '@angular/material/input';
import {MatFormFieldModule} from '@angular/material/form-field';
import {FormsModule} from '@angular/forms';
import {MatSelectModule} from '@angular/material/select';

@NgModule({
  declarations:[],
  imports:[
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    A11yModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule


  ],
  exports:[
    CommonModule,
    MatToolbarModule,
    MatIconModule,
    MatButtonModule,
    A11yModule,
    MatInputModule,
    MatFormFieldModule,
    FormsModule,
    MatSelectModule

  ]

})
export class SharedModule {}
