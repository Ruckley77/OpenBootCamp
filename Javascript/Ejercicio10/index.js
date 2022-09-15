import {suma, multiplica} from "./controller.js";
import  Chalk  from "chalk";

const log = console.log;

const multiplicar = multiplica(suma(1,2),suma(4,5))

log(Chalk.green(multiplicar));