import { Component, OnInit, OnDestroy } from '@angular/core';
import { ChatService } from '../../services/chat.service';

declare var $: any;

@Component({
  selector: 'app-chat',
  templateUrl: './chat.component.html',
  styleUrls: ['./chat.component.scss']
})
export class ChatComponent implements OnInit, OnDestroy {

  constructor(private _chatService: ChatService) {
  }

  public next(value: any) {
    console.log('next: ', value);
  }

  ngOnInit() {
    $(document).ready(function () {
      $('#action_menu_btn').click(function () {
        $('.action_menu').toggle();
      });
    });
  }

  ngOnDestroy() {
    
  }

}
