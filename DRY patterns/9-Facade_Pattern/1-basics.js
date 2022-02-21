const _private = {
    i: 5,
    get() {
      console.log(`current value:${this.i}`);
    },
    set(val) {
      this.i = val;
    },
    run() {
      console.log('running');
    },
    jump() {
      console.log('jumping');
    },
  };
  
  // We used the destructuring assignment syntax that makes it possible to unpack values from data structures into distinct variables.
  const modulle = {
    facade({ val, run }) {
      _private.set(val);
      _private.get();
      if (run) {
        _private.run();
      }
    },
  };
 
  modulle.facade({
    run: true,
    val: 10,
  });
