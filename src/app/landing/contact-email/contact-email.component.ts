import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators} from '@angular/forms';
import { SharedService } from 'src/app/shared/Shared.service';
import { ContactService } from './contact.service';

@Component({
  selector: 'app-contact-email',
  templateUrl: './contact-email.component.html',
  styleUrls: ['./contact-email.component.css']
})
export class ContactEmailComponent implements OnInit {
  focus: any;
  focus1: any;

  alertmsg = undefined;
  alertType = undefined;

  FormData: FormGroup;
  private api = "https://formspree.io/f/mknkaork";

  constructor(private builder: FormBuilder, private contact: ContactService,private sharedService: SharedService) { }

  ngOnInit() {
    this.reset();
  }

  reset(){
    this.FormData = this.builder.group({
      Fullname: new FormControl('', [Validators.required]),
      Email: new FormControl('', [Validators.compose([Validators.required, Validators.email])]),
      Comment: new FormControl('', [Validators.required])
      })
  }

  onSubmit(FormData) {
    this.sharedService.toggleLoading.next(true);

    console.log(FormData)
    this.contact.postMessage(FormData,this.api)
    .subscribe(response => {
    console.log(response)
    this.sharedService.toggleLoading.next(false);
    this.reset();
    this.alertmsg = "Email Sent Successfully";
    this.alertType = "success";

    }, error => { 
    console.warn(error.responseText)
    this.alertmsg = "Email Service not working! Please email to: hello@damith.dev";
    this.alertType = "success";
    console.log({ error })
    this.sharedService.toggleLoading.next(false);

    })
  }
}
