import { Component } from '@angular/core';
import { ActivatedRoute, RouterLink } from '@angular/router';

@Component({
  selector: 'app-static-page',
  imports: [RouterLink],
  templateUrl: './static-page.html',
  styleUrl: './static-page.css'
})
export class StaticPage {
  protected title = '';

  constructor(private readonly route: ActivatedRoute) {
    this.route.data.subscribe((data) => {
      this.title = data['title'] as string;
    });
  }
}
