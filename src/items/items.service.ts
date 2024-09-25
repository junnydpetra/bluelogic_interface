import { Injectable } from '@nestjs/common';

export interface Item {
  id: number;
  name: string;
  description: string;
}

@Injectable()
export class ItemsService {
  private items: Item[] = [];
  private idCounter = 1;

  create(item: Omit<Item, 'id'>): Item {
    const newItem = { id: this.idCounter++, ...item };
    this.items.push(newItem);
    return newItem;
  }

  findAll(): Item[] {
    return this.items;
  }

  findOne(id: number): Item | undefined {
    return this.items.find(item => item.id === id);
  }

  update(id: number, updateItem: Partial<Item>): Item | undefined {
    const itemIndex = this.items.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      const updatedItem = { ...this.items[itemIndex], ...updateItem };
      this.items[itemIndex] = updatedItem;
      return updatedItem;
    }
    return undefined;
  }

  remove(id: number): boolean {
    const itemIndex = this.items.findIndex(item => item.id === id);
    if (itemIndex > -1) {
      this.items.splice(itemIndex, 1);
      return true;
    }
    return false;
  }
}