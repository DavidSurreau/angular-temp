import { NgModule } from '@angular/core';
import { MapComponent } from './map.component';
import { AgmCoreModule } from '@agm/core';
import { MapService } from './map.service';

@NgModule({
  declarations: [  
      MapComponent
  ],
  exports: [
      MapComponent
  ],
  imports: [
    AgmCoreModule.forRoot({
        apiKey: 'AIzaSyB4NNKbnJ-uJv3DEuPMpbGoWGDq-myQOj8'
      })
  ],
  providers: [
      MapService
  ],
})
export class MapModule { }
