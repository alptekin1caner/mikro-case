import { Component, OnInit, Input } from '@angular/core';
import { Member } from '../../models/Member';

@Component({
  selector: 'app-card-member',
  templateUrl: './card-member.component.html',
  styleUrls: ['./card-member.component.scss']
})
export class CardMemberComponent implements OnInit {

  constructor() { }

  @Input() memberData:any;

  ngOnInit(): void {
  }

}
