// class itemCollection {
//   constructor() {
//     const addItem = name => {
//       const item = new item(name);
//       this.items.push(item);
//     };
//     const removeItem = name => {
//       this.items = this.items.filter(item => item.name !== name);
//     };
//     const getItem = () => {
//       return this.items;
//     };
//   }
// }

function itemCollection() {
  this.items = [];
  this.addItem = name => {
    const item = new item(name);
    this.items.push(item);
  };
  this.removeItem = name => {
    this.items = this.items.filter(item => item.name !== name);
  };
  this.getItem = () => {
    return this.items;
  };
}
