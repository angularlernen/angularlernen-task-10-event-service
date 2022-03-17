import { Injectable } from '@angular/core';
import { EventResponse } from './event.response';
import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';

const EVENTS: EventResponse[] = [
  {
    "id": 1,
    "title": "Beer together",
    "shortDescription": "Let's have a cool beer together in my favourite bar.",
    "eventDate": "2019-09-23T20:30:00.000Z",
    "pictureUrl": "https://d2d5f3568fvb9s.cloudfront.net/wp-content/uploads/2018/02/01150035/Trafalgar-Beer.jpg",
    "organizerId": 1,
    "participantIds": [
      1,
      2,
      3,
      6,
      8,
      9,
      11
    ]
  },
  {
    "id": 2,
    "title": "Star Treck",
    "shortDescription": "We'd like to watch the new Star Treck movie in Big Cinema at City Center",
    "eventDate": "2019-05-02T10:30:00.000Z",
    "pictureUrl": "https://media-cdn.tripadvisor.com/media/photo-s/0e/22/45/01/the-arc-cinema-screen.jpg",
    "organizerId": 4,
    "participantIds": [
      4,
      9
    ]
  },
  {
    "id": 3,
    "title": "Snooker together",
    "shortDescription": "Let's meet new snooker enthusiasts",
    "eventDate": "2019-06-02T18:30:00.000Z",
    "pictureUrl": "http://www.paderbowling.de/wp-content/uploads/2017/04/Paderbowling_Billiard_Snooker.jpg",
    "organizerId": 3,
    "participantIds": [
      3,
      2,
      1,
      11,
      9
    ]
  },
  {
    "id": 4,
    "title": "Ladies night",
    "shortDescription": "Make new friends - party together",
    "eventDate": "2019-06-013T22:30:00.000Z",
    "pictureUrl": "http://landyachtlimos.com/limoservice/wp-content/uploads/go-out-dancing-in-limo-on-ladies-nights-and-get-great-drink-specials1.jpg",
    "organizerId": 8,
    "participantIds": [
      8,
      2,
      6,
      12
    ]
  },
  {
    "id": 5,
    "title": "Board game evening",
    "shortDescription": "Play popular board games and make new friends",
    "eventDate": "2019-07-013T18:00:00.000Z",
    "pictureUrl": "http://www.campdeinformatii.ro/wp-content/uploads/2018/08/2.jpg",
    "organizerId": 11,
    "participantIds": [
      11,
      2,
      12
    ]
  },
  {
    "id": 6,
    "title": "Semesterabschlussparty",
    "shortDescription": "In the famous Fritz Club - Students only",
    "eventDate": "2019-05-013T22:00:00.000Z",
    "pictureUrl": "https://assets3.thrillist.com/v1/image/1884462/size/tmg-slideshow_l.jpg",
    "organizerId": 4,
    "participantIds": [
      4,
      5,
      12,
      9,
      3
    ]
  }
];

@Injectable()
export class EventResource {

  constructor() { }

  findAll(): Observable<EventResponse[]> {
    return observableOf(EVENTS);
  }
  
}
