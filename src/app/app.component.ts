import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  currentpage = 0;
  mySlideshow: any;
  slideTime = 2000;
  play = false;

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
      title: "Keep me green or I won't be seen",
      url: "https://images.unsplash.com/photo-1498925008800-019c7d59d903?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8ZW52aXJvbm1lbnR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Happiness",
      url: "https://images.unsplash.com/photo-1533227268428-f9ed0900fb3b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHl8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Code Fast, Learn Mistakes",
      url: "https://images.unsplash.com/photo-1498050108023-c5249f4df085?ixlib=rb-1.2.1&ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8Y29kaW5nfGVufDB8fDB8&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Gold is ricketting rich",
      url: "https://images.unsplash.com/photo-1498721425774-488298864da7?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OHx8Z29sZHxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Dance like you are a knight",
      url: "https://images.unsplash.com/photo-1581417478175-a9ef18f210c2?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8Y2x1YnxlbnwwfHwwfA%3D%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Loyalty is the royalty",
      url: "https://images.unsplash.com/photo-1587300003388-59208cc962cb?ixid=MXwxMjA3fDB8MHxzZWFyY2h8NXx8ZG9nfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Yeah! I can fly",
      url: "https://images.unsplash.com/photo-1554234362-59a913f24b78?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MjV8fGtpdGVzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "In search of perfect",
      url: "https://images.unsplash.com/photo-1452421822248-d4c2b47f0c81?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8YWR2ZW50dXJlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Black, All day long",
      url: "https://images.unsplash.com/photo-1494698853255-d0fa521abc6c?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGFwcGxlfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Simply Berries",
      url: "https://images.unsplash.com/photo-1563746098251-d35aef196e83?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8ZnJ1aXRzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Yellow, yes the bees",
      url: "https://images.unsplash.com/photo-1441633980922-d18ca151ee64?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fGhvbmV5fGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Jarred, I am candy",
      url: "https://images.unsplash.com/photo-1519687079572-8a59631f3685?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTJ8fGNhbmRpZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Sleeplessness",
      url: "https://images.unsplash.com/photo-1561036269-89d6ffdee89b?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c2xlZXBsZXNzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "Believe in me, I won't control you",
      url: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTB8fHRlY2hub2xvZ3l8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    },
    {
      title: "The World",
      url: "https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?ixid=MXwxMjA3fDB8MHxzZWFyY2h8M3x8d29ybGR8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=500&q=60"
    }
  ];

  constructor() {
    this.slideshow();
  }

  stopSlider() {
    clearInterval(this.mySlideshow);
  }


  slideshowToggle(val: any = undefined) {
    if (!val) {
      this.play = !this.play;
    } else {
      this.play = val;
    }
    this.slideshow();
  }

  slideshow() {
    console.log("play", this.play);
    this.stopSlider();
    if (this.play) {
      this.playSlideShow();
    }
  }

  playSlideShow() {
    let self = this;
    this.mySlideshow = setInterval(function () {
      if (self.images && self.currentpage < self.images.length - 1) {
        self.currentpage += 1;
      } else {
        self.currentpage = 0;
      }
    }, self.slideTime);
  }


  checkWindowIndex(i: number) {
    var showPages = 4;
    if (this.currentpage == 0) {
      showPages = 6;
    }
    if (this.currentpage == 1) {
      showPages = 5;
    }

    if (this.currentpage == 2) {
      showPages = 4;
    }
    return Math.abs(this.currentpage - i) < showPages;
  }

  setSliderTime(time: number) {
    this.slideTime = time;
    this.slideshow();
  }


}
