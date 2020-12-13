import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  images = [
    {
      title: "At the beach",
      url: "https://images.unsplash.com/photo-1468413253725-0d5181091126?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjR8fGJlYWNofGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Fighting Bulls",
      url: "https://images.unsplash.com/photo-1595293842982-951cf26e7b6c?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=751&q=80"
    },
    {
      title: "Expensive Rings",
      url: "https://images.unsplash.com/photo-1558446757-426e7886ed28?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTN8fGV4cGVuc2l2ZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Some spilled coffee",
      url: "https://images.unsplash.com/photo-1459755486867-b55449bb39ff?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTZ8fGNvZmZlZXxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Isn't it best bird?",
      url: "https://images.unsplash.com/photo-1511876484235-b5246a4d6dd5?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fGJpcmRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Feel the adventure",
      url: "https://images.unsplash.com/photo-1515552726023-7125c8d07fb3?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NHx8YWR2ZW50dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "In search of perfect",
      url: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YWR2ZW50dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];
}
