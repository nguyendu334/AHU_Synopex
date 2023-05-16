// const res = jQuery.getJSON("http://10.100.203.78:3012/data/1");

var url = 'http://10.100.203.78:3011/data/1';
var db;

var MQTT_CLIENT_ID = 'iot_web_temp' + Math.floor((1 + Math.random()) * 0x10000000000).toString(16);
var reconnect = false;
// Create a MQTT client instance
var MQTT_CLIENT = new Paho.MQTT.Client('broker.hivemq.com', 8000, MQTT_CLIENT_ID);

// Tell the client instance to connect to the MQTT broker
MQTT_CLIENT.connect({ onSuccess: myClientConnected });
// Tell MQTT_CLIENT to call myMessageArrived(message) each time a new message arrives

MQTT_CLIENT.onMessageArrived = myMessageArrived;
// set callback handlers
MQTT_CLIENT.onConnectionLost = onConnectionLost;

var mqtt_isconnected = false;

// This is the function which handles subscribing to topics after a connection is made
function myClientConnected() {
    MQTT_CLIENT.subscribe('SYNOPEXVINA2/IIOT/MQTT/TempHumi');
    mqtt_isconnected = true;
}

// called when the client loses its connection
function onConnectionLost(responseObject) {
    if (responseObject.errorCode !== 0) {
        // console.log("onConnectionLost:"+responseObject.errorMessage);
        mqtt_isconnected = false;
    }
}

// This is the function which handles received messages
function myMessageArrived(message) {
    db = JSON.parse(message.payloadString);
}
setInterval(rd, 1000);
function rd() {
    // Hiển thị nhiệt độ độ ẩm lên màn hình
    document.getElementById('left-wapper').getSVGDocument().getElementById('temp1').textContent =
        db.nhiệt_độ.smt1.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('temp2').textContent =
        db.nhiệt_độ.smt2.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('temp3').textContent =
        db.nhiệt_độ.smt3.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('temp4').textContent =
        db.nhiệt_độ.smt4.toFixed(1);

    document.getElementById('left-wapper').getSVGDocument().getElementById('temp5').textContent =
        db.nhiệt_độ.lazer1.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('temp6').textContent =
        db.nhiệt_độ.lazer2.toFixed(1);

    document.getElementById('left-wapper').getSVGDocument().getElementById('temp7').textContent =
        db.nhiệt_độ.coverlay1.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('temp8').textContent =
        db.nhiệt_độ.coverlay2.toFixed(1);

    document.getElementById('left-wapper').getSVGDocument().getElementById('temp9').textContent =
        db.nhiệt_độ.exposure1.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('temp10').textContent =
        db.nhiệt_độ.exposure2.toFixed(1);

    // document.getElementById('left-wapper').getSVGDocument().getElementById('temp11').textContent =
    //     db.HVAC1.Temp.toFixed(1);
    // document.getElementById('left-wapper').getSVGDocument().getElementById('temp12').textContent =
    //     db.HVAC2.Temp.toFixed(1);

    document.getElementById('left-wapper').getSVGDocument().getElementById('hum1').textContent =
        db.độ_ẩm.smt1.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('hum2').textContent =
        db.độ_ẩm.smt2.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('hum3').textContent =
        db.độ_ẩm.smt3.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('hum4').textContent =
        db.độ_ẩm.smt4.toFixed(1);

    document.getElementById('left-wapper').getSVGDocument().getElementById('hum5').textContent =
        db.độ_ẩm.lazer1.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('hum6').textContent =
        db.độ_ẩm.lazer2.toFixed(1);

    document.getElementById('left-wapper').getSVGDocument().getElementById('hum7').textContent =
        db.độ_ẩm.coverlay1.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('hum8').textContent =
        db.độ_ẩm.coverlay2.toFixed(1);

    document.getElementById('left-wapper').getSVGDocument().getElementById('hum9').textContent =
        db.độ_ẩm.exposure1.toFixed(1);
    document.getElementById('left-wapper').getSVGDocument().getElementById('hum10').textContent =
        db.độ_ẩm.exposure2.toFixed(1);

    // document.getElementById('left-wapper').getSVGDocument().getElementById('hum11').textContent =
    //     db.HVAC1.Humi.toFixed(1);
    // document.getElementById('left-wapper').getSVGDocument().getElementById('hum12').textContent =
    //     db.HVAC2.Humi.toFixed(1);

    // Check spec nhiệt độ
    for (var i = 0; i < 4; i++) {
        if (
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`temp${i + 1}`).textContent < 20 ||
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`temp${i + 1}`).textContent > 26
        ) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`fill${i + 1}`).style.fill = 'red';
        } else {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`fill${i + 1}`).style.fill = 'black';
        }
    }

    for (var i = 4; i < 10; i++) {
        if (
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`temp${i + 1}`).textContent < 17 ||
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`temp${i + 1}`).textContent > 23
        ) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`fill${i + 1}`).style.fill = 'red';
        } else {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`fill${i + 1}`).style.fill = 'black';
        }
    }

    // check spec độ ẩm
    for (var i = 0; i < 10; i++) {
        if (
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`hum${i + 1}`).textContent < 40 ||
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`hum${i + 1}`).textContent > 60
        ) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`humi${i + 1}`).style.fill = 'red';
        } else {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`humi${i + 1}`).style.fill = 'black';
        }
    }
}
