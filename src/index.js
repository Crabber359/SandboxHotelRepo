import { getElement } from "./dd";
import { EMPTY_ROOM } from "./lib/constants";
import { hotelImitation } from "./lib/imitation";
import { createButton } from "./ui/common/button";
import { createImitiationController } from "./ui/imitationController";

hotelImitation.stop();

createImitiationController();
