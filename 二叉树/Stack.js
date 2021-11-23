function Stack() {
  this.dataSource = [];
  this.pos = 0;
  this.push = push;
  this.pop = pop;
  this.length = length;
  this.clear = clear;
  this.isEmpty = isEmpty;
}
function push(element) {
  this.dataSource[this.pos++] = element;
}
function pop() {
  return this.dataSource[--this.pos];
}
function length() {
  return this.pos;
}
function clear() {
  this.pos = 0;
  this.dataSource = [];
}
function isEmpty() {
  return this.pos == 0;
}
