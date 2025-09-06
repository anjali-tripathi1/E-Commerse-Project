import { Component, EventEmitter, Output } from '@angular/core';
import { RouterLink } from '@angular/router';


@Component({
  selector: 'app-forget',
  imports: [RouterLink],
  templateUrl: './forget.html',
  styleUrl: './forget.css'
})
export class Forget {
    @Output() backToLogin:EventEmitter<any> = new EventEmitter<any>()
}
