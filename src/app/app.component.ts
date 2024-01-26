import { Component } from '@angular/core';
import {Router, RouterOutlet} from '@angular/router';
import {NavbarComponent} from "./component/navbar/navbar.component";
import {FooterComponent} from "./component/footer/footer.component";
import {Auth, onAuthStateChanged} from "@angular/fire/auth";

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, NavbarComponent, FooterComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss'
})
export class AppComponent {
  title = 'shopping-cart-working';

  constructor(private auth:Auth, private router:Router) {
    onAuthStateChanged(this.auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const uid = user.uid;
        console.log("user is sign in")
        this.router.navigate(["/layout"])
        // ...
      } else {
        // User is signed out
        // ...
        console.log("user is sign out")
        this.router.navigate(["/login"])
      }
    });
  }
}
