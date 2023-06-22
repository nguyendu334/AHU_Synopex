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

    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_chiller1').textContent = db.chiller1.temp.toFixed(1);

    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_chiller2').textContent = db.chiller2.temp.toFixed(1);

    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_chiller3').textContent = db.chiller3.temp.toFixed(1);

    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu1').textContent = db.ahu1.temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu2').textContent = db.ahu2.temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu3').textContent = db.ahu3.temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu4').textContent = db.ahu4.temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu5').textContent = db.ahu5.temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu6').textContent = db.ahu7.temp.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('temp_ahu7').textContent = db.ahu8.temp.toFixed(1);

    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu1').textContent = db.ahu1.humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu2').textContent = db.ahu2.humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu3').textContent = db.ahu3.humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu4').textContent = db.ahu4.humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu5').textContent = db.ahu5.humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu6').textContent = db.ahu7.humi.toFixed(1);
    document
        .getElementById('left-wapper')
        .getSVGDocument()
        .getElementById('humi_ahu7').textContent = db.ahu8.humi.toFixed(1);

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

    // check spec ahu
    // for (var i = 0; i < 7; i++) {
    //     if (
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`temp_ahu${i + 1}`).textContent < 21 ||
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`temp_ahu${i + 1}`).textContent > 23
    //     ) {
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`fill_temp_ahu${i + 1}`).style.fill = 'red';
    //     } else {
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`fill_temp_ahu${i + 1}`).style.fill = 'black';
    //     }

    //     if (
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`humi_ahu${i + 1}`).textContent < 42 ||
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`humi_ahu${i + 1}`).textContent > 60
    //     ) {
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`fill_humi_ahu${i + 1}`).style.fill = 'red';
    //     } else {
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`fill_humi_ahu${i + 1}`).style.fill = 'black';
    //     }
    // }

    // for (var i = 0; i < 3; i++) {
    //     if (
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`temp_chiller${i + 1}`).textContent < 21 ||
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`temp_chiller${i + 1}`).textContent > 23
    //     ) {
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`fill_temp_chiller${i + 1}`).style.fill = 'red';
    //     } else {
    //         document
    //             .getElementById('left-wapper')
    //             .getSVGDocument()
    //             .getElementById(`fill_temp_chiller${i + 1}`).style.fill = 'black';
    //     }
    // }

    // check fan ahu
    for (var i = 1; i < 6; i++) {
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

    for (var i = 7; i < 9; i++) {
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

    // check fan chiller
    for (var i = 1; i < 5; i++) {
        if (db.chiller1.fan[i] == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller1_comp' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller1_comp' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller1_comp' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller1_comp' + i).style.transformBox = 'fill-box';
        }
        if (db.chiller1.fan[i] == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller1_comp' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller1_comp' + i).style.animation = '';
        }

        if (db.chiller2.fan[i] == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller2_comp' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller2_comp' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller2_comp' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller2_comp' + i).style.transformBox = 'fill-box';
        }
        if (db.chiller2.fan[i] == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller2_comp' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller2_comp' + i).style.animation = '';
        }

        if (db.chiller3.fan[i] == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller3_comp' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller3_comp' + i).style.animation =
                'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller3_comp' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller3_comp' + i).style.transformBox = 'fill-box';
        }
        if (db.chiller3.fan[i] == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller3_comp' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('chiller3_comp' + i).style.animation = '';
        }

        if (db.pump[i] == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('pump' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('pump' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('pump' + i).style.transformBox = 'fill-box';
        }
        if (db.pump[i] == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('pump' + i).style.animation = '';
        }
    }

    // check fan cdu
    for (var i = 1; i < 7; i++) {
        if (db.ahu1.cdu1 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu1_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu1_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu1_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu1_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu1.cdu1 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu1_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu1_fan' + i).style.animation = '';
        }

        if (db.ahu1.cdu2 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu2_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu2_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu2_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu2_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu1.cdu2 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu2_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu2_fan' + i).style.animation = '';
        }

        if (db.ahu1.cdu3 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu3_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu3_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu3_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu3_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu1.cdu3 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu3_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu3_fan' + i).style.animation = '';
        }

        if (db.ahu1.cdu4 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu4_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu4_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu4_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu4_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu1.cdu4 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu4_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu4_fan' + i).style.animation = '';
        }

        if (db.ahu1.cdu5 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu5_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu5_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu5_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu5_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu1.cdu5 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu5_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu1_cdu5_fan' + i).style.animation = '';
        }

        if (db.ahu2.cdu1 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu1_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu1_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu1_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu1_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu2.cdu1 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu1_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu1_fan' + i).style.animation = '';
        }

        if (db.ahu2.cdu2 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu2_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu2_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu2_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu2_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu2.cdu2 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu2_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu2_fan' + i).style.animation = '';
        }

        if (db.ahu2.cdu3 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu3_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu3_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu3_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu3_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu2.cdu3 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu3_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu3_fan' + i).style.animation = '';
        }

        if (db.ahu2.cdu4 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu4_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu4_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu4_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu4_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu2.cdu4 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu4_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu4_fan' + i).style.animation = '';
        }

        if (db.ahu2.cdu5 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu5_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu5_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu5_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu5_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu2.cdu5 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu5_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu2_cdu5_fan' + i).style.animation = '';
        }

        if (db.ahu5.cdu1 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu1_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu1_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu1_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu1_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu5.cdu1 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu1_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu1_fan' + i).style.animation = '';
        }

        if (db.ahu5.cdu2 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu2_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu2_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu2_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu2_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu5.cdu2 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu2_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu2_fan' + i).style.animation = '';
        }

        if (db.ahu5.cdu3 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu3_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu3_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu3_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu3_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu5.cdu3 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu3_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu3_fan' + i).style.animation = '';
        }

        if (db.ahu5.cdu4 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu4_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu4_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu4_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu4_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu5.cdu4 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu4_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu4_fan' + i).style.animation = '';
        }

        if (db.ahu5.cdu5 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu5_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu5_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu5_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu5_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu5.cdu5 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu5_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu5_fan' + i).style.animation = '';
        }

        if (db.ahu5.cdu6 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu6_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu6_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu6_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu6_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu5.cdu6 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu6_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu5_cdu6_fan' + i).style.animation = '';
        }

        if (db.ahu7.cdu1 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu1_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu1_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu1_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu1_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu7.cdu1 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu1_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu1_fan' + i).style.animation = '';
        }

        if (db.ahu7.cdu2 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu2_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu2_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu2_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu2_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu7.cdu2 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu2_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu2_fan' + i).style.animation = '';
        }

        if (db.ahu7.cdu3 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu3_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu3_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu3_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu3_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu7.cdu3 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu3_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu3_fan' + i).style.animation = '';
        }

        if (db.ahu7.cdu4 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu4_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu4_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu4_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu4_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu7.cdu4 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu4_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu4_fan' + i).style.animation = '';
        }

        if (db.ahu7.cdu5 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu5_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu5_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu5_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu5_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu7.cdu5 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu5_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu5_fan' + i).style.animation = '';
        }

        if (db.ahu7.cdu6 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu6_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu6_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu6_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu6_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu7.cdu6 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu6_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu6_fan' + i).style.animation = '';
        }

        if (db.ahu7.cdu7 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu7_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu7_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu7_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu7_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu7.cdu7 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu7_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu7_cdu7_fan' + i).style.animation = '';
        }

        if (db.ahu8.cdu1 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu1_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu1_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu1_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu1_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu8.cdu1 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu1_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu1_fan' + i).style.animation = '';
        }

        if (db.ahu8.cdu2 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu2_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu2_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu2_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu2_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu8.cdu2 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu2_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu2_fan' + i).style.animation = '';
        }

        if (db.ahu8.cdu3 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu3_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu3_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu3_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu3_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu8.cdu3 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu3_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu3_fan' + i).style.animation = '';
        }

        if (db.ahu8.cdu4 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu4_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu4_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu4_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu4_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu8.cdu4 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu4_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu4_fan' + i).style.animation = '';
        }

        if (db.ahu8.cdu5 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu5_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu5_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu5_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu5_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu8.cdu5 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu5_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu5_fan' + i).style.animation = '';
        }

        if (db.ahu8.cdu6 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu6_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu6_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu6_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu6_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu8.cdu6 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu6_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu6_fan' + i).style.animation = '';
        }

        if (db.ahu8.cdu7 == true) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu7_fan' + i).style.fill = '#00CD00';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu7_fan' + i).style.animation = 'fanRotate 1s linear infinite';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu7_fan' + i).style.transformOrigin = 'center';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu7_fan' + i).style.transformBox = 'fill-box';
        }
        if (db.ahu8.cdu7 == false) {
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu7_fan' + i).style.fill = '#323cff';
            document
                .getElementById('left-wapper')
                .getSVGDocument()
                .getElementById('ahu8_cdu7_fan' + i).style.animation = '';
        }
    }
}
