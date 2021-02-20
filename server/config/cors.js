const ALLOW_LIST = [
  "http://localhost:3000",
  "http://localhost:3001/",
  "http://localhost:3001/event",
  "http://localhost:3000/event",
  "http://localhost:3001/api/eventtable",
  "http://localhost:3000/api/eventtable",
];

exports.corsOptions = {
  origin: (origin, callback) => {
    console.log("Origin: ", origin); // eslint-disable-line no-console
    if (ALLOW_LIST.includes(origin) || !origin) {
      return callback(null, true);
    }
    return callback(new Error("Not allowed by CORS"));
  },
};
