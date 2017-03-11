import * as Collections from '/lib/collections';
import {Meteor} from 'meteor/meteor';
import {createStore} from 'redux';
import {Tracker} from 'meteor/tracker';

export default function ({reducer}) {
  return {
    Meteor,
    Collections,
    Redux: createStore(reducer),
    Tracker
  };
}
