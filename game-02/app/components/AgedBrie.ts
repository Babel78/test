import { Item } from "./Item";
import { ItemConstants } from "../constants/constant";

export class AgedBrie extends Item {
  constructor(public name: string, public sellIn: number, public quality: number) {
    super(name, sellIn, quality);
  }
  updateQuality() {
    this.sellIn--;
    this.quality = Math.min(this.quality + 1, ItemConstants.MAX_QUALITY);
    if (this.sellIn < 0) {
      this.quality = Math.min(this.quality + 1, ItemConstants.MAX_QUALITY);
    }
  }
}