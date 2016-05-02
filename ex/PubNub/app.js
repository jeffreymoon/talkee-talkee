// Initialize the instance
 
var pubnub = PUBNUB.init({
    publish_key: 'pub-c-0864a450-59ea-4b9e-9791-cbf6777ab642',
    subscribe_key: 'sub-c-6c0c73ba-1039-11e6-a5b5-0619f8945a4f',
    error: function (error) {
        console.log('Error:', error);
    }
})

pubnub.subscribe({
    channel: 'room-2',
    message: function(m){
        console.log(m)
    },
    error: function (error) {
        // Handle error here
        console.log(JSON.stringify(error));
    }
});


pubnub.publish({
    channel: 'room-2', 
    message: {
        avatar: '', 
        text: 'Hello, MoonSun  TEST'
    },
    callback: function(m) {
        console.log(m)
    }, // success callback
    error: function(e) {
        console.log(e)
    }  // error callback
});