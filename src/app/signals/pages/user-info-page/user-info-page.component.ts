import { Component, OnInit, inject, signal } from '@angular/core';
import { UserServiceService } from '../../services/user-service.service';
import { User } from '../../interfaces/user-request.interface';

@Component({
  selector: 'app-user-info-page',
  templateUrl: './user-info-page.component.html',
  styleUrl: './user-info-page.component.css'
})
export class UserInfoPageComponent implements OnInit {
  
  private userService = inject(UserServiceService);
  public userId = signal(1);
  
  public currentUser = signal<User|undefined>(undefined);
  public userWasFound = signal(true);
  
  loadUser(id: number){
    if( id <= 0) return;
    this.userId.set(id);

    this.userService.getUserById(id)
      .subscribe( user => {
        this.currentUser.set( user );
      })
  }

  ngOnInit(): void {
    this.loadUser(this.userId())
  }

}
