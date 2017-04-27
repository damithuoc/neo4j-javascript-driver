/**
 * Copyright (c) 2002-2017 "Neo Technology,","
 * Network Engine for Objects in Lund AB [http://neotechnology.com]
 *
 * This file is part of Neo4j.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * An array that lets you hop through the elements endlessly.
 */
export default class RoundRobinArray {

  constructor(items) {
    this._items = items || [];
    this._offset = 0;
  }

  next() {
    if (this.isEmpty()) {
      return null;
    }
    const index = this._offset % this.size();
    this._offset++;
    return this._items[index];
  }

  pushAll(elems) {
    if (!Array.isArray(elems)) {
      throw new TypeError('Array expected but got: ' + elems);
    }

    Array.prototype.push.apply(this._items, elems);
  }

  isEmpty() {
    return this._items.length === 0;
  }

  size() {
    return this._items.length;
  }

  toArray() {
    return this._items;
  }

  remove(item) {
    this._items = this._items.filter(element => element !== item);
  }

  toString() {
    return JSON.stringify(this._items);
  }
}
