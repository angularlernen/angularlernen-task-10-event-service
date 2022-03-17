import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EventResource } from './event/event.resource';
import { ProfileResource } from './profile/profile.resource';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [],
  providers: [
    EventResource, 
    ProfileResource
  ]
})
export class ApiModule { }
