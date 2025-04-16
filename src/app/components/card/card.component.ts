import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: false,
  templateUrl: './card.component.html',
  styleUrl: './card.component.scss'
})
export class CardComponent {
  @Input({ required: true })
  planType: string = '';

  @Input({ required: true })
  planPrice: number = 0;

  @Input({ required: true })
  cardStyle: 'orange' | 'purple' | 'green' = 'orange';
}
