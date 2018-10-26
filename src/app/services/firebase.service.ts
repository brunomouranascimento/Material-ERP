import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';

import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { Menu } from '../models/menu';
import { Notification } from '../models/notification';
import { User } from '../models/user';

@Injectable({
  providedIn: 'root'
})
export class FirebaseService {

  menusCollection: AngularFirestoreCollection<Menu>;
  notificationsCollection: AngularFirestoreCollection<Notification>;
  usersCollection: AngularFirestoreCollection<User>;

  menus: Observable<Menu[]>;
  notifications: Observable<Notification[]>;
  users: Observable<User[]>;

  constructor(public afs: AngularFirestore) {
    this.menus = this.afs.collection('menus', ref => ref.orderBy('order', 'asc')).snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Menu;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    this.notifications = this.afs.collection('notifications').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as Notification;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
    // this.users = this.afs.collection('users', ref => ref.where('order', '==', 1)).snapshotChanges().pipe(map(changes => {
    this.users = this.afs.collection('users').snapshotChanges().pipe(map(changes => {
      return changes.map(a => {
        const data = a.payload.doc.data() as User;
        data.id = a.payload.doc.id;
        return data;
      });
    }));
  }

  getMenus() {
    return this.menus;
  }
  getNotifications() {
    return this.notifications;
  }
  getUsers() {
    return this.users;
  }
}
