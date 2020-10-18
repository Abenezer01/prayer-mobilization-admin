import { Component, OnInit } from '@angular/core';
import { IDropdownSettings } from 'ng-multiselect-dropdown/public_api';
import { GroupService } from './../../Services/group/group.service';
import { UserService } from './../../Services/users/user.service';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { MessageService } from './../../Services/messages/message.service';
import { AngularEditorConfig } from '@kolkov/angular-editor';

@Component({
  selector: 'app-compose-message',
  templateUrl: './compose-message.component.html',
  styleUrls: ['./compose-message.component.css']
})
export class ComposeMessageComponent implements OnInit {

  constructor(private userService: UserService, private messageService: MessageService) {

  }

  users = [];
  message = { 
    chat_id:null,
    title: null,
    user_id: null,
    content: null 
  };
  selectedUsers = [];
  dropdownSettings: IDropdownSettings;
  composeMessageForm: FormGroup;

  ngOnInit() {
    this.composeMessageForm = new FormGroup({
      users: new FormControl('', [Validators.required]),
      title: new FormControl('', [Validators.required]),
      content: new FormControl('', [Validators.required]),
    });
    this.userService.getAll().subscribe(response => {
      response.forEach(element => {
        element['full_name'] = element.first_name + ' ' + element.last_name;
      });
      this.users = response;
      console.log(response);
    });

    this.dropdownSettings = {
      singleSelection: false,
      idField: '_id',
      textField: 'full_name',
      selectAllText: 'Select All',
      unSelectAllText: 'UnSelect All',
      itemsShowLimit: 100,
      allowSearchFilter: true,
      noDataAvailablePlaceholderText: 'no user available'
    };
  }
  onItemSelect(item: any) {
    // console.log(item);
    this.selectedUsers.forEach(element => {
      console.log(element);
    });
  }
  sendMessages() {
    console.log('its working', this.composeMessageForm.value.users);
    this.users.forEach(user => {
    this.composeMessageForm.value.users.forEach(element => {
      if(user._id===element._id){
        this.message.title = this.composeMessageForm.value.title;
        this.message.content = this.composeMessageForm.value.content;
        this.message.user_id = element._id;
        this.message.chat_id = user.Chat_Id;
      }
      console.log(this.message);
      // this.messageService.create(this.message).subscribe(response=>{
      //   console.log(response);
      // });

    });
    });

  }
  onSelectAll(items: any) {
    // console.log('selectedItems:' + this.selectedUsers);
  }
  editorConfig: AngularEditorConfig = {
    editable: true,
    spellcheck: true,
    height: 'auto',
    minHeight: '0',
    maxHeight: 'auto',
    width: 'auto',
    minWidth: '0',
    translate: 'yes',
    enableToolbar: true,
    showToolbar: true,
    placeholder: 'Enter text here...',
    defaultParagraphSeparator: '',
    defaultFontName: '',
    defaultFontSize: '',
    fonts: [
      { class: 'arial', name: 'Arial' },
      { class: 'times-new-roman', name: 'Times New Roman' },
      { class: 'calibri', name: 'Calibri' },
      { class: 'comic-sans-ms', name: 'Comic Sans MS' }
    ],
    customClasses: [
      {
        name: 'quote',
        class: 'quote',
      },
      {
        name: 'redText',
        class: 'redText'
      },
      {
        name: 'titleText',
        class: 'titleText',
        tag: 'h1',
      },
    ],
    uploadUrl: 'v1/image',
    uploadWithCredentials: false,
    sanitize: true,
    toolbarPosition: 'top',
    toolbarHiddenButtons: [
      ['bold', 'italic'],
      ['fontSize']
    ]
  };
}
