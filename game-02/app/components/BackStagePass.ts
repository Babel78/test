import { Item } from "./Item";

export class BackstagePass extends Item {
  constructor(public name: string, public sellIn: number, public quality: number) {
    super(name, sellIn, quality);
  }
  updateQuality() {
    this.sellIn--;
    if (this.sellIn < 0) {
      this.quality = 0;
    } else if (this.sellIn <= 5) {
      this.quality = Math.min(this.quality + 3, 50);
    } else if (this.sellIn <= 10) {
      this.quality = Math.min(this.quality + 2, 50);
    } else {
      this.quality = Math.min(this.quality + 1, 50);
    }
  }
}