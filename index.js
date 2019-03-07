const app = new Vue({
  data: {
    message: "Loading...",
    items: [],
    selectedFirst: "",
    optionsFirst: []
  },

  methods: {
    search: function() {
      app.items = [];

      const fakeDelay = new Promise(function(resolve) {
        setTimeout(resolve, 1000);
      });

      fakeDelay.then(function() {
        fetch("/api/search.json")
          .then(function(resp) {
            return resp.json();
          })
          .then(function(data) {
            app.items = data.items;
          });
      });
    }
  },

  mounted: function() {
    const fakeDelay = new Promise(function(resolve) {
      setTimeout(resolve, 1000);
    });

    fakeDelay.then(function() {
      fetch("/api/init.json")
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          app.message = data.message;
        });

      fetch("/api/optionsFirst.json")
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          app.optionsFirst = data.optionsFirst;
        });
    });
  }
});

document.addEventListener(
  "DOMContentLoaded",
  function() {
    app.$mount("#app");
  },
  { once: true }
);
