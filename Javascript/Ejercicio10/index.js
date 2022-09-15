import {suma, multiplica} from "./controller.js";
import  Chalk  from "chalk";

const log = console.log;

const sumar = suma(1,2)
const multiplicar = multiplica(4,5)


log(sumar);
log(Chalk.green(multiplicar));

