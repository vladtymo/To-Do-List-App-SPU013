import { IPost } from './../post';
import { UsersService } from './../../users/users.service';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-add-post',
  templateUrl: './add-post.component.html',
  styleUrls: ['./add-post.component.css']
})
export class AddPostComponent implements OnInit {

  // postForm: FormGroup = new FormGroup({
  //   title: new FormControl('example title'),
  //   body: new FormControl(''),
  //   userId: new FormControl(0)
  // });
  postForm = this.fb.group({
    title: ['example title', Validators.required],
    body: ['', Validators.required],
    userId: [0, Validators.required]
  });

  constructor(private fb: FormBuilder, private userService: UsersService) { }

  ngOnInit(): void {
  }

  createPost(): void {

    // if (this.postForm.get('title')?.value == '' || this.postForm.get('body')?.value == '') {
    //   alert("Invalid data!");
    //   return;
    // }

    if (this.postForm.invalid) {
      alert("Invalid data!");
      return;
    }

    const post: IPost = this.postForm.value;

    this.userService.createPost(post).subscribe(result => {
      console.log(result);
      alert("Operation completed!");
    },
      error => console.log(error));
  }
}
