import { ItemConstants } from "../constants/constant";
import { Item } from "./Item";

export class Sulfuras extends Item {
  constructor(public name: string = ItemConstants.SULFURAS, public sellIn: number = 0, public quality: number = 80) {
    super(name, sellIn, quality);
  }

  updateQuality() { }
}