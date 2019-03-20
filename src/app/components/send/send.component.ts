import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';

@Component({
  selector: 'app-send',
  templateUrl: './send.component.html',
  styleUrls: ['./send.component.scss']
})
export class SendComponent implements OnInit, OnDestroy {

  constructor(private _chatService: ChatService) { }

  ngOnInit() {

  }

  ngOnDestroy() {
  
  }

  editDoc() {

  }

}
