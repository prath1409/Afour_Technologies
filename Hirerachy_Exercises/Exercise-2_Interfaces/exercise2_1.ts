// ======== Exercise 2.1 ========
  // Instructions:
  // • Create an interface `CartItem` and replace the param's type with it
  // • Make variantId optional

  function addToCart(item: CartItem) {
    console.log('[Exercise 2.1]', `Adding "${item.title}" to cart.`);
  }
  interface CartItem{
      id: number;
      title: string;
      variantID?: number
  }
  addToCart({id: 1, title: 'Concrete shoes'});