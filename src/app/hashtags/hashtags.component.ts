import { Component, OnInit } from '@angular/core';
import { HashtagsService } from '../hashtags.service';
@Component({
  selector: 'app-hashtags',
  templateUrl: './hashtags.component.html',
  styleUrls: ['./hashtags.component.css']
})
export class HashtagsComponent implements OnInit {
  hashtags: any = [];
  constructor(private hashtagsService: HashtagsService) { }

  ngOnInit() {
    this.hashtagsService.getAllHashtags().subscribe(hashtags => {
      this.hashtags = hashtags;
    });
  }

}
