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

const db = new Sequelize(
  process.env.DATABASE_URL || "postgres://localhost:5432/sample"
);

const Place = db.define("place", {
  name: STRING,
  address: {
    type: STRING,
    allowNull: true,
  },
  latitude: DECIMAL,
  longitude: DECIMAL,
  isFavorite: {
    type: STRING,
    defaultValue: false,
    allowNull: true,
  },
  stock: INTEGER,
  time: STRING,
  price: STRING,
  amount: INTEGER,
  order: INTEGER,
  phone: STRING,
  email: STRING,
});

const syncAndSeed = async () => {
  await db.sync({ force: true });
  await Promise.all(
    require("./Place").map(
      ({
        name,
        address,
        location: [longitude, latitude],
        isFavorite,
        stock,
        time,
        price,
        amount,
        order,
        phone,
        email,
      }) => {
        return Place.create({
          name,
          address,
          longitude,
          latitude,
          isFavorite,
          stock,
          time,
          price,
          amount,
          order,
          phone,
          email,
        });
      }
    )
  );
};

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

app.post("/api/places", async (req, res, next) => {
  try {
    res.send(await Place.create(req.body));
    // await Place.findAll()
  } catch (ex) {
    next(ex);
  }
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

// router.put('/:orderId', async (req, res, next) => {
//   try {
//     const orderId = req.params.orderId;
//     const plantId = req.body.plantId;
//     const amount = req.body.amount < 1 ? 0 : req.body.amount;

//     const order = await Order.findByPk(orderId);
//     if (amount === 0) {
//       const plant = await Plant.findByPk(plantId);
//       await order.removePlant(plant);
//     } else {
//       const lineItem = await LineItem.findOne({
//         where: {
//           orderId: orderId,
//           plantId: plantId,
//         },
//       });

//       lineItem.amount = amount;
//       await lineItem.save();
//     }
//     const plants = await order.getPlants();
//     const cart = {
//       id: order.id,
//       plants,
//     };
//     res.status(201).send(cart);
//   } catch (err) {
//     next(err);
//   }
// });

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "../public/index.html"));
});

const setUp = async () => {
  try {
    await db.authenticate();
    await syncAndSeed();
  } catch (ex) {
    console.log(ex);
  }
};

setUp();

app.listen(PORT, () => {
  console.log(`Server listening on PORT: ${PORT}`);
});

module.exports = {
  db,
  syncAndSeed,
  Place,
};

// const MAP_API_KEY =
//   "pk.eyJ1IjoicmRlbWFubyIsImEiOiJja2xpOGxzcTgyZnRiMm9wY2JvaXVjeTN3In0.r38uSvzLc3pPEAztrwFJdA";

// mapboxgl.accessToken = MAP_API_KEY;

// app.get("/", async (req, res, next) => {
//   res.render(path.join(__dirname, "index.html"));
// });

// Object.entries(require("../secrets.js")).forEach(
//   ([key, value]  {process.env[key] = value})
// );

// console.log(MAP_API_KEY);
