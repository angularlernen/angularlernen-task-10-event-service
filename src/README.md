EventService
============

### Introduction

Take another look into the data as returned by `eventResource.findAll(): Observable<EventResponse[]>`.

As you can see, each _EventResponse_ is kind of a _Data Transfer Object (DTO)_, with a relation to another resource type _ProfileResponse_, given by an _ID_.

Take a closer look on the _eventDate_ attribute of the _EventResponse_ DTO: it's of type _string_. Wouldn't it be nice to have a `Date` here?

Instead of dealing with _API DTOs_ (Responses) throughout our application, let's introduce a _Domain Driven_ approach into our app. Let's introduce _Entity_ types and _Services_ managing them.

There is a small challange here: Sometimes _Entity_ types are build out of multiple _API DTOs_ which have to be combined in order to create a final _Entity_.

### Task

1. Create a folder _domain_ in the _shared_ folder.
2. Create an entity _Profile_ given as interface: `ng g i shared/domain/profile`. 
In this case, _Profile_ is almost the same as _ProfileResource_ - this is coincidence.
3. Create an entity _MicroEvent_ given as interface: `ng g i shared/domain/micro-event`.

```ts
import { Profile } from './profile';

export interface MicroEvent {
  id: number;
  title: string;
  shortDescription: string;
  eventDate: Date;
  pictureUrl: string;
  organizerId: number;
  participants: Profile[];
}

```
4. In the _shared_ module: Make use of the _ApiModule_, import it.
5. Create a `MicroEventService`: `ng g s shared/domain/micro-event`.
6. Inject an instance of the `EventResource` and `ProfileResource` 
7. Provide a method `findAll(): Observable<MicroEvent[]>`
8. Implement `findAll` using the `zip` function and the `map` operator.

- https://rxjs.dev/api/index/function/zip
- https://www.learnrxjs.io/operators/combination/zip.html
- https://rxjs.dev/api/operators/map
- https://www.learnrxjs.io/operators/transformation/map.html

9. Use the `MicroEventService` instead of `EventResource` in the `EventCollectionComponent`.
10. Pay attention: We're dealing with `MicroEvent` instances now.

### HOWTOs

#### micro-event.service.ts
```ts
// ...
import { EventResponse } from '../../api/event/event.response';
import { EventResource } from '../../api/event/event.resource';

import { ProfileResponse } from '../../api/profile/profile.response';
import { ProfileResource } from '../../api/profile/profile.resource';

import { Profile } from './profile';
import { MicroEvent } from './micro-event';

import { Observable, zip } from 'rxjs';
import { map } from 'rxjs/operators';
```

```ts
  constructor(
    private _eventResource: EventResource,
    private _profileResource: ProfileResource) { }
```

```ts
  findAll(): Observable<MicroEvent[]> {

    return zip(
      this._eventResource.findAll(),
      this._profileResource.findAll(),
    ).pipe(
      map(([eventResponses, profileResponses]) => {
        // TODO
        return // MicroEvent[]
      })
    );
  }
```

```ts
  private static parseIsoDatetime(dtstr: string): Date {
    const dt = dtstr.split(/[: T-]/).map(parseFloat);
    return new Date(dt[0], dt[1] - 1, dt[2], dt[3] || 0, dt[4] || 0, dt[5] || 0, 0);
  }
```

#### event-collection.component.ts
```ts
// ...
import { MicroEvent } from '../../shared/domain/micro-event';
import { MicroEventService } from '../../shared/domain/micro-event.service';
// ...
```