import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Post } from 'src/app/shared/models/post';
import { UserInfo } from 'firebase';
import { AuthService } from 'src/app/core/services/auth.service';

@Component({
  selector: 'app-post-form',
  templateUrl: './post-form.component.html',
  styleUrls: ['./post-form.component.sass']
})

export class PostFormComponent implements OnInit {

  form : FormGroup;
  private userData : UserInfo;

  constructor(
    private formBuilder : FormBuilder, 
    private authService : AuthService) { }

  private buildForm() {
    this.form = this.formBuilder.group({
      title: ['', {validators: [Validators.required]}],
      content: ['', {validators: [Validators.required]}],
      author: this.userData.email,
      date: new Date,
    })
  }

  ngOnInit() {
    this.userData = this.authService.user;
    this.buildForm();
  }

  setPost(post : Post) {
    const {date, id, author, ...data} = post
    this.form.patchValue(data)
  }
}
