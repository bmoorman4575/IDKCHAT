gdjs.chatCode = {};
gdjs.chatCode.forEachIndex2 = 0;

gdjs.chatCode.forEachObjects2 = [];

gdjs.chatCode.forEachTemporary2 = null;

gdjs.chatCode.forEachTotalCount2 = 0;

gdjs.chatCode.GDbluebottomObjects1= [];
gdjs.chatCode.GDbluebottomObjects2= [];
gdjs.chatCode.GDbluebottomObjects3= [];
gdjs.chatCode.GDtextinputObjects1= [];
gdjs.chatCode.GDtextinputObjects2= [];
gdjs.chatCode.GDtextinputObjects3= [];
gdjs.chatCode.GDNewBBTextObjects1= [];
gdjs.chatCode.GDNewBBTextObjects2= [];
gdjs.chatCode.GDNewBBTextObjects3= [];
gdjs.chatCode.GDmessagesObjects1= [];
gdjs.chatCode.GDmessagesObjects2= [];
gdjs.chatCode.GDmessagesObjects3= [];
gdjs.chatCode.GDsendbuttonObjects1= [];
gdjs.chatCode.GDsendbuttonObjects2= [];
gdjs.chatCode.GDsendbuttonObjects3= [];


gdjs.chatCode.mapOfGDgdjs_9546chatCode_9546GDmessagesObjects1Objects = Hashtable.newFrom({"messages": gdjs.chatCode.GDmessagesObjects1});
gdjs.chatCode.eventsList0 = function(runtimeScene) {

};gdjs.chatCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
{
}

}


{

/* Reuse gdjs.chatCode.GDmessagesObjects1 */

for (gdjs.chatCode.forEachIndex2 = 0;gdjs.chatCode.forEachIndex2 < gdjs.chatCode.GDmessagesObjects1.length;++gdjs.chatCode.forEachIndex2) {
gdjs.chatCode.GDmessagesObjects2.length = 0;


gdjs.chatCode.forEachTemporary2 = gdjs.chatCode.GDmessagesObjects1[gdjs.chatCode.forEachIndex2];
gdjs.chatCode.GDmessagesObjects2.push(gdjs.chatCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chatCode.GDmessagesObjects2.length;i<l;++i) {
    if ( gdjs.chatCode.GDmessagesObjects2[i].getVariableBoolean(gdjs.chatCode.GDmessagesObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.chatCode.GDmessagesObjects2[k] = gdjs.chatCode.GDmessagesObjects2[i];
        ++k;
    }
}
gdjs.chatCode.GDmessagesObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.chatCode.GDmessagesObjects2.length ;i < len;++i) {
    gdjs.chatCode.GDmessagesObjects2[i].setVariableBoolean(gdjs.chatCode.GDmessagesObjects2[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.chatCode.GDmessagesObjects2.length ;i < len;++i) {
    gdjs.chatCode.GDmessagesObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)));
}
}}
}

}


};gdjs.chatCode.mapOfGDgdjs_9546chatCode_9546GDsendbuttonObjects1Objects = Hashtable.newFrom({"sendbutton": gdjs.chatCode.GDsendbuttonObjects1});
gdjs.chatCode.mapOfGDgdjs_9546chatCode_9546GDmessagesObjects1Objects = Hashtable.newFrom({"messages": gdjs.chatCode.GDmessagesObjects1});
gdjs.chatCode.eventsList2 = function(runtimeScene) {

};gdjs.chatCode.eventsList3 = function(runtimeScene) {

{

/* Reuse gdjs.chatCode.GDmessagesObjects1 */

for (gdjs.chatCode.forEachIndex2 = 0;gdjs.chatCode.forEachIndex2 < gdjs.chatCode.GDmessagesObjects1.length;++gdjs.chatCode.forEachIndex2) {
gdjs.copyArray(gdjs.chatCode.GDtextinputObjects1, gdjs.chatCode.GDtextinputObjects2);

gdjs.chatCode.GDmessagesObjects2.length = 0;


gdjs.chatCode.forEachTemporary2 = gdjs.chatCode.GDmessagesObjects1[gdjs.chatCode.forEachIndex2];
gdjs.chatCode.GDmessagesObjects2.push(gdjs.chatCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
for (var i = 0, k = 0, l = gdjs.chatCode.GDmessagesObjects2.length;i<l;++i) {
    if ( gdjs.chatCode.GDmessagesObjects2[i].getVariableBoolean(gdjs.chatCode.GDmessagesObjects2[i].getVariables().getFromIndex(0), false) ) {
        isConditionTrue_0 = true;
        gdjs.chatCode.GDmessagesObjects2[k] = gdjs.chatCode.GDmessagesObjects2[i];
        ++k;
    }
}
gdjs.chatCode.GDmessagesObjects2.length = k;
if (isConditionTrue_0) {
{for(var i = 0, len = gdjs.chatCode.GDmessagesObjects2.length ;i < len;++i) {
    gdjs.chatCode.GDmessagesObjects2[i].setVariableBoolean(gdjs.chatCode.GDmessagesObjects2[i].getVariables().getFromIndex(0), true);
}
}{for(var i = 0, len = gdjs.chatCode.GDmessagesObjects2.length ;i < len;++i) {
    gdjs.chatCode.GDmessagesObjects2[i].setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ": " + (( gdjs.chatCode.GDtextinputObjects2.length === 0 ) ? "" :gdjs.chatCode.GDtextinputObjects2[0].getString()));
}
}{for(var i = 0, len = gdjs.chatCode.GDtextinputObjects2.length ;i < len;++i) {
    gdjs.chatCode.GDtextinputObjects2[i].setString("");
}
}}
}

}


};gdjs.chatCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("message", false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("messages"), gdjs.chatCode.GDmessagesObjects1);
{for(var i = 0, len = gdjs.chatCode.GDmessagesObjects1.length ;i < len;++i) {
    gdjs.chatCode.GDmessagesObjects1[i].setY(gdjs.chatCode.GDmessagesObjects1[i].getY() - (34));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.chatCode.mapOfGDgdjs_9546chatCode_9546GDmessagesObjects1Objects, 20, 588, "");
}{gdjs.evtTools.p2p.getEventVariable("message", runtimeScene.getScene().getVariables().getFromIndex(0));
}
{ //Subevents
gdjs.chatCode.eventsList1(runtimeScene);} //End of subevents
}

}


{

gdjs.copyArray(runtimeScene.getObjects("sendbutton"), gdjs.chatCode.GDsendbuttonObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.chatCode.mapOfGDgdjs_9546chatCode_9546GDsendbuttonObjects1Objects, runtimeScene, true, false);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("messages"), gdjs.chatCode.GDmessagesObjects1);
gdjs.copyArray(runtimeScene.getObjects("textinput"), gdjs.chatCode.GDtextinputObjects1);
{runtimeScene.getScene().getVariables().getFromIndex(1).setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + ": " + (( gdjs.chatCode.GDtextinputObjects1.length === 0 ) ? "" :gdjs.chatCode.GDtextinputObjects1[0].getString()));
}{gdjs.evtTools.p2p.sendVariableToAll("message", runtimeScene.getScene().getVariables().getFromIndex(1));
}{for(var i = 0, len = gdjs.chatCode.GDmessagesObjects1.length ;i < len;++i) {
    gdjs.chatCode.GDmessagesObjects1[i].setY(gdjs.chatCode.GDmessagesObjects1[i].getY() - (34));
}
}{gdjs.evtTools.object.createObjectOnScene((typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : runtimeScene), gdjs.chatCode.mapOfGDgdjs_9546chatCode_9546GDmessagesObjects1Objects, 20, 588, "");
}
{ //Subevents
gdjs.chatCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onConnection();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9297252);
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.p2p.sendDataToAll("hostconfirm", "");
}}

}


};

gdjs.chatCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.chatCode.GDbluebottomObjects1.length = 0;
gdjs.chatCode.GDbluebottomObjects2.length = 0;
gdjs.chatCode.GDbluebottomObjects3.length = 0;
gdjs.chatCode.GDtextinputObjects1.length = 0;
gdjs.chatCode.GDtextinputObjects2.length = 0;
gdjs.chatCode.GDtextinputObjects3.length = 0;
gdjs.chatCode.GDNewBBTextObjects1.length = 0;
gdjs.chatCode.GDNewBBTextObjects2.length = 0;
gdjs.chatCode.GDNewBBTextObjects3.length = 0;
gdjs.chatCode.GDmessagesObjects1.length = 0;
gdjs.chatCode.GDmessagesObjects2.length = 0;
gdjs.chatCode.GDmessagesObjects3.length = 0;
gdjs.chatCode.GDsendbuttonObjects1.length = 0;
gdjs.chatCode.GDsendbuttonObjects2.length = 0;
gdjs.chatCode.GDsendbuttonObjects3.length = 0;

gdjs.chatCode.eventsList4(runtimeScene);

return;

}

gdjs['chatCode'] = gdjs.chatCode;
