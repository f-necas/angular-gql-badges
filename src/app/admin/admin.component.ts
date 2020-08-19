import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

import { User, AllUsers } from '../graphql/all-users-with-badges.service';
import { map } from 'rxjs/operators';
import { AddBadgeGQL } from '../graphql/admin-gql.service';

@Component({
    selector: 'app-admin',
    templateUrl: './admin.component.html',
    styleUrls: ['./admin.component.scss']
})
export class AdminComponent implements OnInit {

    users: Observable<User[]>;
    name: string;
    userId: number;
    base64textString: string = "";

    constructor(private allUsers: AllUsers, private addBadge: AddBadgeGQL) { }

    ngOnInit(): void {
        this.users = this.allUsers.watch().valueChanges.pipe(map((result) => result.data.users));
    }



    handleFileSelect(evt) {
        var files = evt.target.files;
        var file = files[0];

        if (files && file) {
            var reader = new FileReader();
            reader.onload = this._handleReaderLoaded.bind(this);
            reader.readAsBinaryString(file);
        }
    }

    _handleReaderLoaded(readerEvt) {
        var binaryString = readerEvt.target.result;

        this.base64textString = 'data:image/png;base64,' + btoa(binaryString);
    }

    addBadgeToUser() {
        console.log('this.userId ' + this.userId);
        console.log('this.name ' + this.name);
        console.log('this.base64textString ' + this.base64textString);

        if (!!this.userId && !!this.name && !!this.base64textString) {
            this.addBadge
                .mutate({
                    userId: this.userId,
                    name: this.name,
                    image_b64: this.base64textString,
                })
                .subscribe();
        } else {
            console.log("one is empty");
            
        }

    }

}
