
export const ESP_GOT_STATUS = 'esp got status';
export const REQUEST_SERVER_DATA = 'REQUEST_SERVER_DATA'
export const ESP_EVENT_CHANGE_INPUT = 'ESP event change input'
export const ESP_EVENT_CHANGE_ACTIVE = 'ESP_EVENT_CHANGE_ACTIVE'


export function getESPStatus(ip) {
    return (dispatch) => {

        dispatch({
            type: REQUEST_SERVER_DATA
        });

        let p = fetch(ip+"/status").then((data) => {            
            dispatch({
                type: ESP_GOT_STATUS,
                data
            })
        })
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