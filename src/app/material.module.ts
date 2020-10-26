import { NgModule } from '@angular/core';

import {MatSliderModule} from '@angular/material/slider'
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';

var materialModuleList = [
  MatSliderModule,
  MatButtonModule,
  MatIconModule,
  MatFormFieldModule,
  MatInputModule
]

@NgModule({
    imports: materialModuleList,
    exports: materialModuleList
  })

export default  class MaterialModule { }