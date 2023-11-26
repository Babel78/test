import { Item } from "./Item";

export class Conjured extends Item {
  constructor(public name: string, public sellIn: number, public quality: number) {
    super(name, sellIn, quality);
  }
  updateQuality() {
    this.sellIn--;
    this.quality = Math.max(this.quality - 2, 0);
    if (this.sellIn < 0) {
      this.quality = Math.max(this.quality - 2, 0);
    }
  }
}