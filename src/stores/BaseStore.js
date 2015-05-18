import { EventEmitter } from 'events';
import AppDispatcher from '../dispatchers/AppDispatcher';

export default class BaseStore extends EventEmitter {

  constructor(actionSubscribe) {
    super()
    this._dispatchToken = AppDispatcher.register(actionSubscribe(this));
  }

  get dispatchToken() {
    return this._dispatchToken;
  }

  emitChange() {
    this.emit('CHANGE');
  }

  addChangeListener(cb) {
    this.on('CHANGE', cb)
  }

  removeChangeListener(cb) {
    this.removeListener('CHANGE', cb);
  }
}
