import { Injectable } from '@angular/core';
import { Query } from 'apollo-angular';
import gql from 'graphql-tag';


export interface User {
    id: string;
    username: string,
    badges: Badge[]
};

export interface Badge {
    name: string,
    image_b64: string
}

export interface Response {
    users: User[];
}


@Injectable({
    providedIn: 'root'
})
export class AllUsersWithBadgesService extends Query<Response> {

    document = gql`query UserList {
        users {
            id
            username
            badges {
                name
                image_b64
                level
            }
        }
      }
    `;
}

@Injectable({
    providedIn: 'root'
})
export class AllUsers extends Query<Response> {

    document = gql`query UserList {
        users {
            id
            username
        }
      }
    `;
}