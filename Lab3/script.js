import {
  get_items,
  add_item,
  update_item_title_by_id,
  delete_item_by_id,
  get_item_title_by_id
} from './data.js';

console.log(add_item({ id: 1, title: "First Item" }));  // true
console.log(add_item({ id: 1, title: "Duplicate ID" })); // false
console.log(update_item_title_by_id(1, "Updated Title")); // true
console.log(get_item_title_by_id(1)); // "Updated Title"
console.log(delete_item_by_id(1)); // true
console.log(get_items()); // []
