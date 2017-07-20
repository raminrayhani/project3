// not sure what else we need here. maybe something to connect with the deal component

import axios from "axios";

const API = {
	// Retrieves all items from the db
	getItems: function() {
		return axios.get("/api/items");
	},

	// Saves a new item to the db
	saveItem: function(newItem) {
		return axios.post("/api/items", newItem);
	},

	// Toggles an item's Like property in the db
	likeItem: function(item) {
		item.liked = !item.liked;
		const { _id, liked } = item;
		return axios.patch(`/api/items/${_id}`, { liked });
	},

	// Toggles an item's Dislike property in the db
	dislikeItem: function(item) {
		item.disliked = !item.disliked;
		const { _id, disliked } = item;
		return axios.patch(`/api/items/${_id}`, { disliked });
	}
};

export default API;
