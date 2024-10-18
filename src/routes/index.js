const { AuthRouter } = require("./auth.route");
const { PelamarRouter } = require("./pelamar.route");

const _routes = [
  ["/api/auth", AuthRouter],
  ["/api", PelamarRouter],
];

const routes = (app) => {
  _routes.forEach((route) => {
    const [url, router] = route;
    app.use(url, router);
  });
};

module.exports = { routes };
