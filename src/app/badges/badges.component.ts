import { Component, OnInit, AfterViewChecked, AfterViewInit } from '@angular/core';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { User, AllUsersWithBadgesService } from '../graphql/all-users-with-badges.service';


@Component({
    selector: 'app-badges',
    templateUrl: './badges.component.html',
    styleUrls: ['./badges.component.scss']
})
export class BadgesComponent implements OnInit {

    users: Observable<User[]>;

    constructor(private allUsersWithBadges: AllUsersWithBadgesService) { }

    ngOnInit() {
        this.users = this.allUsersWithBadges.watch().valueChanges.pipe(map((result) => result.data.users));
    }

    onWheel(event: WheelEvent): void {
        (<Element>event.target).parentElement.scrollLeft += event.deltaY;
        event.preventDefault();
    }

    onWheelp(event: WheelEvent): void {
        (<Element>event.target).parentElement.parentElement.scrollLeft += event.deltaY;
        event.preventDefault();
    }
}
