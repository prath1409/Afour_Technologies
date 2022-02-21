
class Cookie {
    constructor(flavor) {
      this.flavor = flavor;
    }
  
    showTitle() {
      console.log(`The flavor of this cookie is ${this.flavor}.`);
    }
  }
  
  class FavoriteCookie extends Cookie {
    showTitle() {
      super.showTitle();
      console.log(`${this.flavor} is amazing.`);
    }
  }
  
  let myCookie = new FavoriteCookie('chocolate');
  myCookie.showTitle();