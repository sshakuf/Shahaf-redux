var update = require('react/lib/update')


import {
    ESP_GOT_STATUS,
    ESP_EVENT_CHANGE_INPUT,
    ESP_EVENT_CHANGE_ACTIVE,
    ESP_EVENT_CHANGE_START_TIME,
    ESP_EVENT_CHANGE_END_TIME,
    REQUEST_SERVER_DATA,
    ESP_SEND_EVENTS_TO_ESP,
    ESP_SET_IP
} from '../actions/ESP.action.js';

// import default_state from '../store/configureStore.js'
export const default_state = {
        ip:'http://10.0.0.22', 
        hasChanges: false,
        espDevice: {"ports":{"Output0":"0","Output1":"0","Output2":"0","Output3":"0","Output4":"0"}, "ePort":"00000000", "Events":[{"id":"0","Active":"1","input":"6","Interval":"-1","Start":"21:19","End":"21:21"},{"id":"1","Active":"1","input":"6","Interval":"-1","Start":"21:24","End":"21:25"},{"id":"2","Active":"0","input":"1","Interval":"-1","Start":" 1: 0","End":" 1:30"},{"id":"3","Active":"0","input":"0","Interval":"-1","Start":" 1: 0","End":" 1:30"},{"id":"4","Active":"0","input":"0","Interval":"-1","Start":" 1: 0","End":" 1:30"},{"id":"5","Active":"0","input":"0","Interval":"-1","Start":" 1: 0","End":" 1:30"},{"id":"6","Active":"0","input":"0","Interval":"-1","Start":" 1: 0","End":" 1:30"},{"id":"7","Active":"0","input":"0","Interval":"-1","Start":" 1: 0","End":" 1:30"},{"id":"8","Active":"0","input":"0","Interval":"-1","Start":" 1: 0","End":" 1:30"},{"id":"9","Active":"0","input":"0","Interval":"-1","Start":" 1: 0","End":" 1:30"}] ,
    "PortsInfo":[{"Name":"Output0", "Type":"1", "PinNum":"0", "value":"1"},{"Name":"Output1", "Type":"1", "PinNum":"1", "value":"0"},{"Name":"Output2", "Type":"1", "PinNum":"15", "value":"0"},{"Name":"Output3", "Type":"1", "PinNum":"16", "value":"0"},{"Name":"Output4", "Type":"1", "PinNum":"7", "value":"0"},{"Name":"eOutput0", "Type":"3", "PinNum":"0", "value":"0"},{"Name":"eOutput1", "Type":"3", "PinNum":"1", "value":"0"},{"Name":"eOutput2", "Type":"3", "PinNum":"2", "value":"0"},{"Name":"eOutput3", "Type":"3", "PinNum":"3", "value":"0"},{"Name":"eOutput4", "Type":"3", "PinNum":"4", "value":"0"},{"Name":"eOutput5", "Type":"3", "PinNum":"5", "value":"0"},{"Name":"eOutput6", "Type":"3", "PinNum":"6", "value":"0"},{"Name":"eOutput7", "Type":"3", "PinNum":"7", "value":"0"}]}
}

export function espReducer(state = default_state, action) {

    switch (action.type) {
        case ESP_GOT_STATUS : {
            var x = {
                ...state,
                espDevice : action.data
            };

            return {
                ...state,
                hasChanges : false,
                espDevice : action.data
            }
        }
        case ESP_EVENT_CHANGE_INPUT:
        {
            let new_events = [...state.espDevice.Events];
            new_events[action.eventId].input = action.inputNum;
            return {
                ...state,
                hasChanges : true,
                espDevice : { ...state.espDevice,
                    Events : new_events
                }
            } 
        }
        case ESP_EVENT_CHANGE_ACTIVE:
        {
            let new_events = [...state.espDevice.Events];
            new_events[action.eventId].Active = action.isOn;
            return {
                ...state,
                hasChanges : true,
                espDevice : { ...state.espDevice,
                    Events : new_events
                }
            } 
        }
        case ESP_EVENT_CHANGE_START_TIME:
        {
            let new_events = [...state.espDevice.Events];
            new_events[action.eventId].Start = action.time;
            return {
                ...state,
                hasChanges : true,
                espDevice : { ...state.espDevice,
                    Events : new_events
                }
            } 
        }
        case ESP_EVENT_CHANGE_END_TIME:
        {
            let new_events = [...state.espDevice.Events];
            new_events[action.eventId].End = action.time;
            return {
                ...state,
                hasChanges : true,
                espDevice : { ...state.espDevice,
                    Events : new_events
                }
            } 
        }
        case ESP_SEND_EVENTS_TO_ESP:
        {
            return {
                ...state,
                hasChanges : false
                
                }
        
        }
        case ESP_SET_IP:
        {
            return {
                ...state,
                ip : action.ip
                
                }
        
        }

        // case REQUEST_SERVER_DATA:
        // {

        // }
    }

    return state;
}