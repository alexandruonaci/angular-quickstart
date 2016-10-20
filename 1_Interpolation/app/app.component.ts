import { Component } from '@angular/core';

@Component({
    selector: 'my-app',
    templateUrl: 'app/app.component.html',
    styles: ['.blue-bg{background-color: blue;}']
})
export class AppComponent {
    private username:string = "Test"
    private currentUser:User = { username: "Test", email: "test@test.com" }

    private getUsername():string {
        return this.currentUser.username
    }
}
interface User {
    username: string,
    email: string
}