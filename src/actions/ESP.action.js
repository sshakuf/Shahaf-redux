
export const ESP_GOT_STATUS = 'esp got status';
export const REQUEST_SERVER_DATA = 'REQUEST_SERVER_DATA';
export const ESP_EVENT_CHANGE_INPUT = 'ESP event change input';
export const ESP_EVENT_CHANGE_START_TIME = 'ESP event change start time';
export const ESP_EVENT_CHANGE_END_TIME = 'ESP event change end time';
export const ESP_EVENT_CHANGE_ACTIVE = 'ESP_EVENT_CHANGE_ACTIVE';
export const ESP_SEND_EVENTS_TO_ESP = 'ESP_SEND_EVENTS_TO_ESP';
export const ESP_SET_IP = 'ESP_SET_IP';
export const ESP_SET_OUTPUT_PORT_VALUE = 'ESP_SET_OUTPUT_PORT_VALUE';

export function getESPStatus(ip) {
    return (dispatch) => {

        dispatch({
            type: REQUEST_SERVER_DATA
        });

        // let p = fetch(ip+"/events").then( function (data) {       
        let p = fetch(ip+"/status").then(function (response) {
            return response.json();
        })
        .then(function (result) {
                dispatch({
                type: ESP_GOT_STATUS,
                data : result
            })

        })
        .catch (function (error) {
            console.log('Request failed', error);
        });      
    }
}


export function ESPChangeEvnetInput(eventId, inputNum){
    return (dispatch) => {
      dispatch({
            type: ESP_EVENT_CHANGE_INPUT,
            inputNum: inputNum,
            eventId: eventId
        });   
    }
}

export function ESPChangeEvnetActive(eventId, isOn){
    return (dispatch) => {
      dispatch({
            type: ESP_EVENT_CHANGE_ACTIVE,
            isOn: isOn,
            eventId: eventId
        });   
    }
}

export function ESPChangeEventStartTime(eventId, time){
    return (dispatch) => {
      dispatch({
            type: ESP_EVENT_CHANGE_START_TIME,
            time: time,
            eventId: eventId
        });   
    }
}

export function ESPChangeEventEndTime(eventId, time){ 
    return (dispatch) => {
      dispatch({
            type: ESP_EVENT_CHANGE_END_TIME,
            time: time,
            eventId: eventId
        });   
    }
}

export function ESPSendEventsToESP(ip, events){
    return (dispatch) => {
        events.forEach((item, index) => {
            let eventurl = "/event/" + item.id + "/" + item.Active + "/" + item.input + "/" + item.Start + "/" + item.End +"/" + item.Interval;  
            let p = fetch(ip+eventurl).then(function (response) {
                return response.json();
            })
            .then(function (result) {
                    dispatch({
                    type: ESP_GOT_STATUS,
                    data : result
                })

            })
            .catch (function (error) {
                console.log('Request failed', error);
            });      

        });

        return (dispatch) => {
            dispatch({
                type: ESP_SEND_EVENTS_TO_ESP,
            });   
        }
        }
}


export function ESPSetIp(ip){ 
    return (dispatch) => {
        if (!ip.startsWith('http'))
        {
            ip = 'http://' + ip;
        }

      dispatch({
            type: ESP_SET_IP,
            ip: ip
        });   
    }
}

export function ESPSetOutputPortData(ip, port, value){
    return (dispatch) => {
        let eventurl = "/setpin/" + port+ "/" + value;  
        let p = fetch(ip+eventurl).then(function (response) {
            return response.json();
        })
        .then(function (result) {
                dispatch({
                type: ESP_GOT_STATUS,
                data : result
            })

        })
        .catch (function (error) {
            console.log('Request failed', error);
        });      
    }
}
