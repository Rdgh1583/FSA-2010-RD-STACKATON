const path = require("path");
const express = require("express");
const app = express();

const Sequelize = require("sequelize");
const { STRING, DECIMAL, BOOLEAN, INTEGER } = Sequelize;

const PORT = process.env.PORT || 3000;
const PUBLIC_PATH = path.join(__dirname, "../public");
const DIST_PATH = path.join(__dirname, "../dist");

app.use(express.json());
app.use(express.static(PUBLIC_PATH));
app.use(express.static(DIST_PATH));

// app.get("*", (req, res) => {
//   res.sendFile(path.join(__dirname, "../public/index.html"));
// });

// const MAP_API_KEY =
//   "pk.eyJ1IjoicmRlbWFubyIsImEiOiJja2xpOGxzcTgyZnRiMm9wY2JvaXVjeTN3In0.r38uSvzLc3pPEAztrwFJdA";

// mapboxgl.accessToken = MAP_API_KEY;

app.get("/", async (req, res, next) => {
  res.render(path.join(__dirname, "index.html"));
});

// Object.entries(require("../secrets.js")).forEach(
//   ([key, value]  {process.env[key] = value})
// );

// console.log(MAP_API_KEY);

app.get("/api/places", async (req, res, next) => {
  try {
    res.send(
      await Place.findAll({
        order: [["longitude", "desc"]],
      })
      // await Place.findAll()
    );
  } catch (ex) {
    next(ex);
  }
});

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

app.get("/api/places/:id", async (req, res, next) => {
  try {
    const place = await Place.findByPk(req.params.id);
    res.send(place);
  } catch (ex) {
    next(ex);
  }
});

app.put("/api/places/:id", async (req, res, next) => {
  try {
    const place = await Place.findByPk(req.params.id);
    await place.update(req.body);
    res.send(place);
    // console.log(place);
  } catch (ex) {
    next(ex);
  }
});

// app.listen(PORT, () => {
//   console.log(`Server listening on PORT: ${PORT}`);
// });

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/sample"
);

const Place = db.define("place", {
  name: STRING,
  latitude: DECIMAL,
  longitude: DECIMAL,
  stock: INTEGER,
  time: STRING,
  price: STRING,
  isFavorite: {
    type: BOOLEAN,
    defaultValue: false,
  },
});

const syncAndSeed = async () => {
  await db.sync({ force: true });
  // const places = await Promise.all([
  //   Place.create({
  //     name: "KATZ",
  //     lat: 40.722195,
  //     lng: -73.98748,
  //     isFavorite: "false",
  //   }),
  //   Place.create({
  //     name: "MET",
  //     lat: 40.778965,
  //     lng: -73.962311,
  //     isFavorite: "true",
  //   }),
  // ]);
  await Promise.all(
    require("./db/Place").map(
      ({
        stock,
        time,
        isFavorite,
        name,
        location: [longitude, latitude],
        price,
      }) => {
        return Place.create({
          name,
          latitude,
          longitude,
          isFavorite,
          stock,
          time,
          price,
        });
      }
    )
  );
};

const setUp = async () => {
  try {
    await db.authenticate();
    await syncAndSeed();
  } catch (ex) {
    console.log(ex);
  }
};

setUp();

module.exports = {
  db,
  syncAndSeed,
  Place,
};
