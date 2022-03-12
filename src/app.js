const  express  = require("express");
const  cors  = require("cors");
const  morgan  = require("morgan");

const  empleadoRouter  = require("./routes/empleado.routes");
const  jornadaRouter  = require("./routes/jornada.routes");
const  areaTrabajoRouter  = require("./routes/areatrabajo.routes");
const  trabajoRouter  = require("./routes/trabajo.routes");
const  nominaRouter  = require("./routes/platillas.routes");
const  actividadesRouter  = require("./routes/actividades.routes");
const  controlRouter  = require("./routes/controlhorario.routes");
const  pagosRouter  = require("./routes/pagos.routes");


const config = require('./config')

const app = express();

// settings
app.set("port", config.port);

// Middlewares
app.use(cors());
app.use(morgan("dev"));
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Routes
app.use("/api", empleadoRouter);
app.use("/api", jornadaRouter);
app.use("/api", areaTrabajoRouter);
app.use("/api", trabajoRouter);
app.use("/api", nominaRouter);
app.use("/api", actividadesRouter);
app.use("/api", controlRouter);
app.use("/api", pagosRouter);

module.exports = app