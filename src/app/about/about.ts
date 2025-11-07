import { Component } from '@angular/core';
import { MatCard, MatCardContent } from "@angular/material/card";
import { TeamMembers } from './data-access/models/team-member.model';

@Component({
  selector: 'app-about',
  imports: [MatCard, MatCardContent],
  templateUrl: './about.html',
  styleUrl: './about.scss'
})
export default class About { 
  members: TeamMembers = TeamMembers;
}
