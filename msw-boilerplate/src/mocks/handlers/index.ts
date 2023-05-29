import * as fruitHandlers from "./fruit";
import * as jsonHandlers from "./json";

export const handlers = [...Object.values(fruitHandlers), ...Object.values(jsonHandlers)];
