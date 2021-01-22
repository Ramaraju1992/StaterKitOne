/**
 * User Actions
 *
 * React Native Starter App
 * https://github.com/mcnamee/react-native-starter-app
 */
import { AsyncStorage } from 'react-native';
import { ErrorMessages, Firebase, FirebaseRef } from '@constants/';
import * as RecipeActions from '../recipes/actions';
import { AppConfig } from '@constants/';

/**
  * Get Login Credentials from AsyncStorage
  */
async function getCredentialsFromStorage() {
	const values = await AsyncStorage.getItem('api/credentials');
	const jsonValues = JSON.parse(values);

	// Return credentials from storage, or an empty object
	if (jsonValues.email || jsonValues.password) return jsonValues;
	return {};
}

async function getTokenFromStorage() {
	const values = await AsyncStorage.getItem('userToken');
	// Return credentials from storage, or an empty object
	if (values) return values;
	return {};
}

//Get all the booking of a particular user
export function get_booking(skip) {
	return async (dispatch) => {
		try {
			var skip_limit = '0';
			if (skip)
				skip_limit = skip;

			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.bookings + '?filter={"limit":20,"skip":' + skip_limit + '}';
			console.log("redux_get_booking_url==> " + url);
			const response = await fetch(url, {
				method: 'GET',
				headers: header,
			});
			const responseJson = await response.json();
			console.log("redux_get_booking_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_get_booking_error==> " + error);
		}
	}
}

//Get the booking details of a particular ride
export function get_booking_details(booking_id) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.bookings + '/' + booking_id;
			console.log("redux_get_booking_details_url==> " + url);
			const response = await fetch(url, {
				method: 'GET',
				headers: header,
			});
			const responseJson = await response.json();
			console.log("redux_get_booking_details_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_get_booking_details_error==> " + error);
		}
	}
}

//User booking a car/driver
export function user_booking(postData) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.bookings;
			console.log("redux_book_a_car_url==> " + url);
			const response = await fetch(url, {
				method: 'POST',
				headers: header,
				body: JSON.stringify(postData),
			});
			const responseJson = await response.json();
			console.log("redux_book_a_car_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_book_a_car_error==> " + error);
		}
	}
}

//Update booking by its id
export function edit_user_booking(postData, booking_id) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.bookings + '/' + booking_id;
			console.log("redux_edit_user_booking_url==> " + url);
			const response = await fetch(url, {
				method: 'PUT',
				headers: header,
				body: JSON.stringify(postData),
			});
			const responseJson = await response.json();
			console.log("redux_edit_user_booking_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_edit_user_booking_error==> " + error);
		}
	}
}

//Deletes a single booking based on the ID supplied
export function delete_booking(booking_id) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.bookings + '/' + booking_id;
			console.log("redux_delete_booking_url==> " + url);
			const response = await fetch(url, {
				method: 'DELETE',
				headers: header,
			});
			const responseJson = await response.json();
			console.log("redux_delete_booking_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_delete_booking_error==> " + error);
		}
	}
}

//Get all the driver near by(User swipes driver)
export function get_driver(skip) {
	return async (dispatch) => {
		try {
			var skip_limit = '0';
			if (skip)
				skip_limit = skip;

			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.confirming_driver + '?filter={"limit":20,"skip":' + skip_limit + '}';
			console.log("redux_get_driver_url==> " + url);
			const response = await fetch(url, {
				method: 'GET',
				headers: header,
			});
			const responseJson = await response.json();
			console.log("redux_get_driver_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_get_driver_error==> " + error);
		}
	}
}

//Get the driver details of a particular driver
export function get_driver_details(driver_booking_id) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.confirming_driver + '/' + driver_booking_id;
			console.log("redux_get_driver_details_url==> " + url);
			const response = await fetch(url, {
				method: 'GET',
				headers: header,
			});
			const responseJson = await response.json();
			console.log("redux_get_driver_details_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_get_driver_details_error==> " + error);
		}
	}
}

//Conforming a car/driver
export function confirm_driver(postData) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.confirming_driver;
			console.log("redux_confirm_driver_url==> " + url);
			const response = await fetch(url, {
				method: 'POST',
				headers: header,
				body: JSON.stringify(postData),
			});
			const responseJson = await response.json();
			console.log("redux_confirm_driver_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_confirm_driver_error==> " + error);
		}
	}
}

//Update driver booking by its id
export function edit_driver_booking(postData, driver_booking_id) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.confirming_driver + '/' + driver_booking_id;
			console.log("redux_edit_driver_booking_url==> " + url);
			const response = await fetch(url, {
				method: 'PUT',
				headers: header,
				body: JSON.stringify(postData),
			});
			const responseJson = await response.json();
			console.log("redux_edit_driver_booking_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_edit_driver_booking_error==> " + error);
		}
	}
}

//Deletes a single driver booking based on the ID supplied
export function delete_driver_booking(booking_id) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.confirming_driver + '/' + booking_id;
			console.log("redux_delete_booking_url==> " + url);
			const response = await fetch(url, {
				method: 'DELETE',
				headers: header,
			});
			const responseJson = await response.json();
			console.log("redux_delete_booking_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_delete_booking_error==> " + error);
		}
	}
}

//Get all the chauffer bookings(driver swipes Recoverydrivers)
export function get_driver_booking(skip) {
	return async (dispatch) => {
		try {
			var skip_limit = '0';
			if (skip)
				skip_limit = skip;

			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.driver_booking + '?filter={"limit":20,"skip":' + skip_limit + '}';
			console.log("redux_get_driver_booking_url==> " + url);
			const response = await fetch(url, {
				method: 'GET',
				headers: header,
			});
			const responseJson = await response.json();
			console.log("redux_get_driver_booking_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_get_driver_booking_error==> " + error);
		}
	}
}

//Get the booking details of a particular ride
export function get_driver_booking_details(booking_id) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.driver_booking + '/' + booking_id;
			console.log("redux_get_driver_booking_details_url==> " + url);
			const response = await fetch(url, {
				method: 'GET',
				headers: header,
			});
			const responseJson = await response.json();
			console.log("redux_get_driver_booking_details_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_get_driver_booking_details_error==> " + error);
		}
	}
}

//Driver booking a recovery car/driver
export function driver_booking(postData) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.driver_booking;
			console.log("redux_driver_booking_url==> " + url);
			const response = await fetch(url, {
				method: 'POST',
				headers: header,
				body: JSON.stringify(postData),
			});
			const responseJson = await response.json();
			console.log("redux_driver_booking_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_driver_booking_error==> " + error);
		}
	}
}

//Update booking chauffer by its id
export function edit_chauffer_booking(postData, booking_id) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.driver_booking + '/' + booking_id;
			console.log("redux_edit_driver_booking_url==> " + url);
			const response = await fetch(url, {
				method: 'PUT',
				headers: header,
				body: JSON.stringify(postData),
			});
			const responseJson = await response.json();
			console.log("redux_edit_driver_booking_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_edit_driver_booking_error==> " + error);
		}
	}
}

//Deletes a single booking chauffer based on the ID supplied
export function delete_chauffer_booking(booking_id) {
	return async (dispatch) => {
		try {
			var header = AppConfig.headers;
			const credsFromStorage = await getTokenFromStorage();
			if (credsFromStorage)
				header['Authorization'] = 'Bearer ' + credsFromStorage;

			var url = AppConfig.urls.site + AppConfig.endpoints.driver_booking + '/' + booking_id;
			console.log("redux_delete_driver_booking_url==> " + url);
			const response = await fetch(url, {
				method: 'DELETE',
				headers: header,
			});
			const responseJson = await response.json();
			console.log("redux_delete_driver_booking_resp==> " + JSON.stringify(responseJson));
			return responseJson;
		} catch (error) {
			console.log("redux_delete_driver_booking_error==> " + error);
		}
	}
}
