import { Component, OnInit } from '@angular/core';
import { PostService } from 'src/app/post.service';


@Component({
  selector: 'app-posts',
  templateUrl: './posts.component.html',
  styleUrls: ['./posts.component.css'],
  providers: [PostService]
})
export class PostsComponent implements OnInit {
  posts=[];
  selectedPost;
  newPost;

  constructor(private PostService: PostService) { }

  ngOnInit(){
    this.newPost = {
      description:"",
      categories:"",
      post_image:""
    }   
    this.getPosts();
    this.selectedPost = {id: -1, description: '' , category: '', post_image:''}; 
  }

  getPosts() {
    this.PostService.getAllPosts().subscribe(
      data => {
        this.posts = data;
        console.log(data);
      },
      err => console.error(err),
      () => console.log('done loading posts')
    );
  }
  
  createPost(){
    console.log(this.newPost);
    this.PostService.AddPost(this.newPost).subscribe(
      response => {
        alert('Your post has been updated')
      },
      error => console.log('error', error)
    )
  }


}
