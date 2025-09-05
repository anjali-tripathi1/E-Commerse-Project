import { Injectable } from "@angular/core";
import { User } from "../models/user";

@Injectable({
   providedIn: 'root'
})

export class UserService{
     user:User[] = [
        new User(1, 'John Smith', 'js', '12345'),
        new User(2, 'Martha Smith', 'ms', '12345'),
        new User(3, 'Steve Austrich', 'sa', '12345'),
     ]


}
