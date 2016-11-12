import { RequestService } from './request.service';
import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-list',
    template: `
        <div *ngFor="let user of data">
            <img [src]="user.avatar" />
            <p> {{ user.id }} {{ user.first_name }} {{ user.last_name }}</p>
        </div>
    `
})

export class ListComponent implements OnInit {
    constructor(private requestService: RequestService) { }
    data: Object[];
    ngOnInit() {
        this.requestService.listUser()
            .subscribe(res => {
                this.data = res.data;
            },
            errorMessage => {
                alert(errorMessage);
            });
    }
}

// let listUser = {
//     "page": "2",
//     "per_page": 3,
//     "total": 12,
//     "total_pages": 4,
//     "data": [
//         {
//             "id": 4,
//             "first_name": "eve",
//             "last_name": "holt",
//             "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/marcoramires/128.jpg"
//         },
//         {
//             "id": 5,
//             "first_name": "gob",
//             "last_name": "bluth",
//             "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/stephenmoon/128.jpg"
//         },
//         {
//             "id": 6,
//             "first_name": "tracey",
//             "last_name": "bluth",
//             "avatar": "https://s3.amazonaws.com/uifaces/faces/twitter/bigmancho/128.jpg"
//         }
//     ]
// }

