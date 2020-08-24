import { Injectable } from '@angular/core';
import { Mutation } from 'apollo-angular';
import gql from 'graphql-tag';

@Injectable({
    providedIn: 'root'
})
export class AddBadgeGQL extends Mutation {

    document = gql`
      mutation addBadge($userId: Int!, $name: String!, $image_b64: String!, $level: String!) {
        insert_badges(objects: {fk_user_id: $userId, image_b64: $image_b64, name: $name, level: $level}) {
            returning {
                id
            }
          }
      }
    `;
}
