
export const ESP_GOT_STATUS = 'esp got status';
export const REQUEST_SERVER_DATA = 'REQUEST_SERVER_DATA'
export const ESP_EVENT_CHANGE_INPUT = 'ESP event change input'
export const ESP_EVENT_CHANGE_START_TIME = 'ESP event change start time'
export const ESP_EVENT_CHANGE_END_TIME = 'ESP event change end time'
export const ESP_EVENT_CHANGE_ACTIVE = 'ESP_EVENT_CHANGE_ACTIVE'


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

export function ESPChangeEvnetStartTime(eventId, time){
    return (dispatch) => {
      dispatch({
            type: ESP_EVENT_CHANGE_START_TIME,
            startTime: time,
            eventId: eventId
        });   
    }
}
export function ESPChangeEvnetEndTime(eventId, time){
    return (dispatch) => {
      dispatch({
            type: ESP_EVENT_CHANGE_END_TIME,
            startTime: time,
            eventId: eventId
        });   
    }
}




