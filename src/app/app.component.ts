import { Component } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';
import { AuthenticationService } from './authentication.service';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent {
  public appPages = [
    {
      title: 'Home',
      url: '/home',
      icon: 'home'
    },
    {
      title: 'Forum',
      url: '/forum',
      icon: 'people',
      notifications: 6,
      color: 'primary'
    },
    {
      title: 'Messaging',
      url: '/messaging',
      icon: 'text',
      notifications: 14,
      color: 'danger'
    },
    {
      title: 'Calendar',
      url: '/calendar',
      icon: 'calendar',
      notifications: 3,
      color: 'warnings'
    },
    {
      title: 'Events',
      url: '/events',
      icon: 'easel',
      notifications: 1,
      color: 'secondary'
    },
    {
      title: 'Help',
      url: '/help',
      icon: 'help'
    },
    {
      title: 'Login',
      url: '/login',
      icon: 'key'
    }

  ];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar,
    private authenticationService: AuthenticationService
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }
}
