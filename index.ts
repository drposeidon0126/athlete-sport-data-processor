import { processData } from "./src/dataProcessor";
import summary from "./data/summary.json";
import laps from "./data/labs.json";
import samples from "./data/samples.json";

const result = processData(summary, laps, samples);

//output
console.log(JSON.stringify(result, null, 2));
