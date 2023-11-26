import { Item } from "./components/Item";
import { AgedBrie } from "./components/AgedBrie";
import { BackstagePass } from "./components/BackStagePass";
import { Conjured } from "./components/Conjured";
import { Sulfuras } from "./components/Sulfuras";
import { ItemConstants } from "./constants/constant";

export class GildedRose {
  items: Array<Item>;

  constructor(items = [] as Array<Item>) {
    this.items = items;
  }

  /**
* Function to create item
* @param name 
* @param sellIn 
* @param quality 
* @returns 
*/
  static createItem(name: string, sellIn: number, quality: number): Item {
    switch (name) {
      case ItemConstants.AGED_BRIE:
        return new AgedBrie(name, sellIn, quality);
      case ItemConstants.BACKSTAGE:
        return new BackstagePass(name, sellIn, quality);
      case ItemConstants.SULFURAS:
        return new Sulfuras(name, sellIn, quality);
      case ItemConstants.CONJURED:
        return new Conjured(name, sellIn, quality);
      default:
        return new Item(name, sellIn, quality);
    }
  }

  updateQuality() {
    for (const item of this.items) {
      item.updateQuality();
    }
    return this.items;
  }
}
