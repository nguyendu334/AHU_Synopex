// const res = jQuery.getJSON("http://10.100.203.78:3012/data/1");

var url = 'http://10.100.203.78:3011/data/1';
var db;

// var MQTT_CLIENT_ID = 'iot_web_temp' + Math.floor((1 + Math.random()) * 0x10000000000).toString(16);
// var reconnect = false;
// // Create a MQTT client instance
// var MQTT_CLIENT = new Paho.MQTT.Client('broker.hivemq.com', 8000, MQTT_CLIENT_ID);

// // Tell the client instance to connect to the MQTT broker
// MQTT_CLIENT.connect({ onSuccess: myClientConnected });
// // Tell MQTT_CLIENT to call myMessageArrived(message) each time a new message arrives

// MQTT_CLIENT.onMessageArrived = myMessageArrived;
// // set callback handlers
// MQTT_CLIENT.onConnectionLost = onConnectionLost;

// var mqtt_isconnected = false;

// // This is the function which handles subscribing to topics after a connection is made
// function myClientConnected() {
//     MQTT_CLIENT.subscribe('SYNOPEXVINA2/IIOT/MQTT/TempHumi');
//     mqtt_isconnected = true;
// }

// // called when the client loses its connection
// function onConnectionLost(responseObject) {
//     if (responseObject.errorCode !== 0) {
//         // console.log("onConnectionLost:"+responseObject.errorMessage);
//         mqtt_isconnected = false;
//     }
// }

// // This is the function which handles received messages
// function myMessageArrived(message) {
//     db = JSON.parse(message.payloadString);
// }

setInterval(() => {
    read();
}, 1000);

const read = async () => {
    try {
        const response = await axios.get('demo.json');
        db = response.data;
    } catch (error) {
        console.log(error);
    }
};

setInterval(rd, 1000);
function rd() {
    // Hiển thị nhiệt độ độ ẩm lên màn hình
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu1').textContent = db.ahu6.temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu2').textContent = db.ahu9.temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu3').textContent = db.ahu10.temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu4').textContent = db.final.temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu5').textContent = db.pba.temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu6').textContent = db.HVAC1.Temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu7').textContent = db.HVAC2.Temp.toFixed(1);

    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu1').textContent = db.ahu6.humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu2').textContent = db.ahu9.humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu3').textContent = db.ahu10.humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu4').textContent = db.final.humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu5').textContent = db.pba.humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu6').textContent = db.HVAC1.Humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu7').textContent = db.HVAC2.Humi.toFixed(1);

    // Check spec nhiệt độ
    for (var i = 0; i < 7; i++) {
        if (
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`temp_ahu${i + 1}`).textContent < 17 ||
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`temp_ahu${i + 1}`).textContent > 23
        ) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`fill_temp_ahu${i + 1}`).style.fill = 'red';
        } else {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`fill_temp_ahu${i + 1}`).style.fill = 'black';
        }

        if (
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`humi_ahu${i + 1}`).textContent < 40 ||
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`humi_ahu${i + 1}`).textContent > 60
        ) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`fill_humi_ahu${i + 1}`).style.fill = 'red';
        } else {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById(`fill_humi_ahu${i + 1}`).style.fill = 'black';
        }
    }

    // check fan ahu
    for (var i = 9; i < 11; i++) {
        if (db.ahu[i] == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('fan_ahu' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('fan_ahu' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('fan_ahu' + i).style.transformBox = 'fill-box';
        }

        if (db.ahu[i] == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('fan_ahu' + i).style.animation = '';
        }
    }

    if (db.ahu[6] == true) {
        document
            .getElementById('left-wapper')
            .getSVGDocument()
            .getElementById('fan_ahu6').style.animation = 'fanRotate 1s linear infinite';
        document
            .getElementById('left-wapper')
            .getSVGDocument()
            .getElementById('fan_ahu6').style.transformOrigin = 'center';
        document
            .getElementById('left-wapper')
            .getSVGDocument()
            .getElementById('fan_ahu6').style.transformBox = 'fill-box';
    }
    if (db.ahu[6] == false) {
        document
            .getElementById('left-wapper')
            .getSVGDocument()
            .getElementById('fan_ahu6').style.animation = '';
    }

    // check fan cdu
    for (var i = 1; i < 7; i++) {
        if (db.ahu6.cdu1 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu1_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu1_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu1_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu1_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu6.cdu1 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu1_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu1_fan' + i).style.animation = '';
        }

        if (db.ahu6.cdu2 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu2_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu2_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu2_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu2_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu6.cdu2 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu2_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu2_fan' + i).style.animation = '';
        }

        if (db.ahu6.cdu3 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu3_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu3_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu3_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu3_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu6.cdu3 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu3_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu3_fan' + i).style.animation = '';
        }

        if (db.ahu6.cdu4 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu4_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu4_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu4_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu4_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu6.cdu4 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu4_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu6_cdu4_fan' + i).style.animation = '';
        }

        if (db.ahu9.cdu1 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu1_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu1_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu1_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu1_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu9.cdu1 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu1_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu1_fan' + i).style.animation = '';
        }

        if (db.ahu9.cdu2 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu2_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu2_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu2_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu2_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu9.cdu2 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu2_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu2_fan' + i).style.animation = '';
        }

        if (db.ahu9.cdu3 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu3_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu3_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu3_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu3_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu9.cdu3 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu3_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu3_fan' + i).style.animation = '';
        }

        if (db.ahu9.cdu4 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu4_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu4_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu4_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu4_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu9.cdu4 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu4_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu9_cdu4_fan' + i).style.animation = '';
        }

        if (db.ahu10.cdu1 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu1_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu1_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu1_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu1_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu10.cdu1 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu1_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu1_fan' + i).style.animation = '';
        }

        if (db.ahu10.cdu2 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu2_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu2_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu2_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu2_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu10.cdu2 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu2_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu2_fan' + i).style.animation = '';
        }

        if (db.ahu10.cdu3 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu3_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu3_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu3_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu3_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu10.cdu3 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu3_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu3_fan' + i).style.animation = '';
        }

        if (db.ahu10.cdu4 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu4_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu4_fan' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu4_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu4_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu10.cdu4 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu4_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu10_cdu4_fan' + i).style.animation = '';
        }
    }
}
