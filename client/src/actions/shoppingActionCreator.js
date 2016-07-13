'use strict';

var Dispatcher = require('../dispatcher/Dispatcher');
var ActionTypes = require('../constants/actionTypes');
var  API = require('../helpers/api');

var ShoppingActionCreator = {
	createStore: function (store) {
		var newStorePromise = API.createStore(store);
    
    newStorePromise.
			then( function(newStore) {
				Dispatcher.dispatch({
				actionType: ActionTypes.CREATE_STORE,
				store: newStore				
			});

		})

		.fail(function(xhr, status, err) {
			console.log("failed to create a store");
		})
	},

	deleteStore: function (store) {

	},

	changeSelected: function(item) {

	},
};

module.exports = ShoppingActionCreator;
