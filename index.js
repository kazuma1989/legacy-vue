const app = new Vue({
  data: {
    message: "Loading...",
    items: []
  },

  methods: {
    search: function() {
      fetch("/search.json")
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          app.items = data.items;
        });
    }
  },

  mounted: function() {
    const fakeDelay = new Promise(function(resolve) {
      setTimeout(resolve, 1000);
    });

    fakeDelay.then(function() {
      fetch("/init.json")
        .then(function(resp) {
          return resp.json();
        })
        .then(function(data) {
          app.message = data.message;
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
