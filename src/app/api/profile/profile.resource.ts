import { Injectable } from '@angular/core';
import { ProfileResponse } from './profile.response';
import { Observable } from 'rxjs';
import { of as observableOf } from 'rxjs';

const PROFILES: ProfileResponse[] = [
  {
    "id": 1,
    "gender": "male",
    "firstName": "Michael",
    "lastName": "Mustermann",
    "description": "I love to make musik.",
    "pictureUrl": "https://randomuser.me/api/portraits/men/57.jpg"
  },
  {
    "id": 2,
    "gender": "female",
    "firstName": "Lisa",
    "lastName": "Lewandowska",
    "description": "I'm new in town and love to make new friends.",
    "pictureUrl": "https://randomuser.me/api/portraits/women/68.jpg"
  },
  {
    "id": 3,
    "gender": "female",
    "firstName": "Gabi",
    "lastName": "Normann",
    "description": "Vegan. I love animals.",
    "pictureUrl": "https://randomuser.me/api/portraits/women/14.jpg"
  },
  {
    "id": 4,
    "gender": "male",
    "firstName": "Steffan",
    "lastName": "Steffanowski",
    "description": "Computer Scientist working on my own Start-Up",
    "pictureUrl": "https://randomuser.me/api/portraits/men/60.jpg"
  },
  {
    "id": 5,
    "gender": "male",
    "firstName": "Tobias",
    "lastName": "Mayer",
    "description": "Feel free to contact me. I'm here to find fellows.",
    "pictureUrl": "https://randomuser.me/api/portraits/men/31.jpg"
  },
  {
    "id": 6,
    "gender": "female",
    "firstName": "Sue",
    "lastName": "Lee",
    "description": "I love board games, music and meeting new people. Open for fun.",
    "pictureUrl": "https://randomuser.me/api/portraits/women/17.jpg"
  },
  {
    "id": 7,
    "gender": "male",
    "firstName": "Mike",
    "lastName": "Stevenson",
    "description": "Student from California on an intership",
    "pictureUrl": "https://randomuser.me/api/portraits/men/55.jpg"
  },
  {
    "id": 8,
    "gender": "female",
    "firstName": "Britta",
    "lastName": "Locke",
    "description": "Student in mathematics. Interested in science and literature.",
    "pictureUrl": "https://randomuser.me/api/portraits/women/28.jpg"
  },
  {
    "id": 9,
    "gender": "male",
    "firstName": "Lenardt",
    "lastName": "Gans",
    "description": "I'm working on my own App. Looking for co-founders.",
    "pictureUrl": "https://randomuser.me/api/portraits/men/51.jpg"
  },
  {
    "id": 10,
    "gender": "male",
    "firstName": "Arkadius",
    "lastName": "Mayer",
    "description": "Sports, Friends, Music and having fun in generall. Contact me ;-)",
    "pictureUrl": "https://randomuser.me/api/portraits/men/42.jpg"
  },
  {
    "id": 11,
    "gender": "female",
    "firstName": "Anja",
    "lastName": "Allecka",
    "description": "I love dancing. I'm looking for a dance partner or fellows to go out together.",
    "pictureUrl": "https://randomuser.me/api/portraits/women/57.jpg"
  },
  {
    "id": 12,
    "gender": "female",
    "firstName": "Katrin",
    "lastName": "Nachtigal",
    "description": "Always keen and open minded. Heyho :-D",
    "pictureUrl": "https://randomuser.me/api/portraits/women/29.jpg"
  }
];

@Injectable()
export class ProfileResource {

  constructor() { }

  findAll(): Observable<ProfileResponse[]> {
    return observableOf(PROFILES);
  }

}
