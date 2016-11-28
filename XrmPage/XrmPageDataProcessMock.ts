import { Stage } from "./../Stage/Stage";
import { Process } from "./../Process/Process";

export class XrmPageDataProcessMock{
    getActiveProcess(): Process{}
    setActiveProcess(processId, callbackFunction){}
    getProcessInstance(callbackFunction){}
    setActiveProcessInstance(processInstanceId, callbackFunction){}
    getActiveStage(): Stage{}
    setActiveStage(stageId, callbackFunction){}
    getActivePath(){}
    getEnabledProcess(callbackFunction){}
    getSelectedStage(): Stage{}
    addOnStageChange(handler){}
    removeOnStageChange(handler){}
    addOnStageSelected(handler){}
    removeOnStageSelected(handler){}
    addOnProcessStageChange(handler){}
    removeOnProcessStageChange(handler){}
    moveNext(callbackFunction){}
    movePrevious(callbackFunction){}
    
    getInstanceId(){}
    getInstanceName(){}
    getStatus(){}
    setStatus(status, callbackFunction){}
}