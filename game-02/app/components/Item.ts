export class Item {
  constructor(public name: string, public sellIn: number, public quality: number) { }
  updateQuality() {
    this.sellIn--;
    this.quality = Math.max(this.quality - 1, 0);

    if (this.sellIn < 0) {
      this.quality = Math.max(this.quality - 1, 0);
    }
  }
}