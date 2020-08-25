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
    username: string;
    name: string;
    level: string = 'bronze';
    userId: number;
    base64textString: string = "";
    error: string[] = [];

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

        this.error = []
        if (!this.userId) this.error.push(' user');
        if (!this.name) this.error.push(' alt');
        if (!this.level) this.error.push(' level');
        if (!this.base64textString) this.error.push(' image');

        if (this.error.length == 0) {
            this.addBadge
                .mutate({
                    userId: this.userId,
                    name: this.name,
                    image_b64: this.base64textString,
                    level: this.level,
                })
                .subscribe((res) => {
                    if (!!res['data']['insert_badges']['returning'][0].id){
                        this.base64textString = '';
                        this.name = undefined;
                        this.error = [];
                    }
                    
                });
        } 

    }

    addUser() {
        
        if (!!this.username) {
           console.log(this.username);
           
        } else {
            console.log("one is empty");
            
        }

    }

}
