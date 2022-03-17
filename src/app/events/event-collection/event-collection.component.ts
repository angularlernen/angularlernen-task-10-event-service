import { Component, OnInit, OnDestroy } from '@angular/core';
import { EventResponse } from '../../api/event/event.response';
import { EventResource } from '../../api/event/event.resource';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-event-collection',
  templateUrl: './event-collection.component.html',
  styleUrls: ['./event-collection.component.css']
})
export class EventCollectionComponent implements OnInit, OnDestroy {

  events: EventResponse[] = [];

  private _eventsSub: Subscription;

  constructor(private _eventResource: EventResource) { }

  ngOnInit() {
    this._eventsSub = this._eventResource.findAll().subscribe((events: EventResponse[]) => {
      this.events = events;
    });
  }

  ngOnDestroy() {
    this._eventsSub.unsubscribe();
  }

}