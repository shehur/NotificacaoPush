var app = {
    initialize: function() {
        this.bindEvents();
    },

    bindEvents: function() {
        document.addEventListener('deviceready', this.onDeviceReady, false);
    },

    onDeviceReady: function() {
        app.receivedEvent('deviceready');
    },

    receivedEvent: function(id) {
        var acao = document.getElementById('acao');
        acao.addEventListener('click', function() {
            alert('ação executada.');
        });

        var notificationOpenedCallback = function(jsonData) {
            console.log('notificationOpenedCallback: ' + JSON.stringify(jsonData));
        };

        window.plugins.OneSignal
        .startInit("896e304b-34d9-45f2-8917-f5d5b861a314")
        .handleNotificationOpened(notificationOpenedCallback)
        .endInit();
    }
};
