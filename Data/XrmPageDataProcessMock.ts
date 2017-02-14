import { XrmStage } from "../Stage/XrmPageDataStage";
import { XrmProcess } from "../Process/XrmPageDataProcess";

export class XrmPageDataProcessMock {
    getActiveProcess(): XrmProcess {
        return;
    }
    setActiveProcess(processId, callbackFunction) {}
    getProcessInstance(callbackFunction) {}
    setActiveProcessInstance(processInstanceId, callbackFunction) {}
    getActiveStage(): XrmStage {
        return;
    }
    setActiveStage(stageId, callbackFunction) {}
    getActivePath() {}
    getEnabledProcess(callbackFunction) {}
    getSelectedStage(): XrmStage {
        return;
    }
    addOnStageChange(handler) {}
    removeOnStageChange(handler) {}
    addOnStageSelected(handler) {}
    removeOnStageSelected(handler) {}
    addOnProcessStageChange(handler){ }
    removeOnProcessStageChange(handler) {}
    moveNext(callbackFunction) {}
    movePrevious(callbackFunction) {}

    getInstanceId() {}
    getInstanceName() {}
    getStatus() {}
    setStatus(status, callbackFunction) {}
}