gdjs.roomconnectsceneCode = {};
gdjs.roomconnectsceneCode.forEachIndex2 = 0;

gdjs.roomconnectsceneCode.forEachObjects2 = [];

gdjs.roomconnectsceneCode.forEachTemporary2 = null;

gdjs.roomconnectsceneCode.forEachTotalCount2 = 0;

gdjs.roomconnectsceneCode.GDchooseroomtxtObjects1= [];
gdjs.roomconnectsceneCode.GDchooseroomtxtObjects2= [];
gdjs.roomconnectsceneCode.GDchooseroomtxtObjects3= [];
gdjs.roomconnectsceneCode.GDchooseroomtxtObjects4= [];
gdjs.roomconnectsceneCode.GDchooseroomtxtObjects5= [];
gdjs.roomconnectsceneCode.GDtypeusernameheretxtObjects1= [];
gdjs.roomconnectsceneCode.GDtypeusernameheretxtObjects2= [];
gdjs.roomconnectsceneCode.GDtypeusernameheretxtObjects3= [];
gdjs.roomconnectsceneCode.GDtypeusernameheretxtObjects4= [];
gdjs.roomconnectsceneCode.GDtypeusernameheretxtObjects5= [];
gdjs.roomconnectsceneCode.GDNewSpriteObjects1= [];
gdjs.roomconnectsceneCode.GDNewSpriteObjects2= [];
gdjs.roomconnectsceneCode.GDNewSpriteObjects3= [];
gdjs.roomconnectsceneCode.GDNewSpriteObjects4= [];
gdjs.roomconnectsceneCode.GDNewSpriteObjects5= [];
gdjs.roomconnectsceneCode.GDroomnameObjects1= [];
gdjs.roomconnectsceneCode.GDroomnameObjects2= [];
gdjs.roomconnectsceneCode.GDroomnameObjects3= [];
gdjs.roomconnectsceneCode.GDroomnameObjects4= [];
gdjs.roomconnectsceneCode.GDroomnameObjects5= [];
gdjs.roomconnectsceneCode.GDNewSprite2Objects1= [];
gdjs.roomconnectsceneCode.GDNewSprite2Objects2= [];
gdjs.roomconnectsceneCode.GDNewSprite2Objects3= [];
gdjs.roomconnectsceneCode.GDNewSprite2Objects4= [];
gdjs.roomconnectsceneCode.GDNewSprite2Objects5= [];
gdjs.roomconnectsceneCode.GDroomspriteObjects1= [];
gdjs.roomconnectsceneCode.GDroomspriteObjects2= [];
gdjs.roomconnectsceneCode.GDroomspriteObjects3= [];
gdjs.roomconnectsceneCode.GDroomspriteObjects4= [];
gdjs.roomconnectsceneCode.GDroomspriteObjects5= [];
gdjs.roomconnectsceneCode.GDcustoncodeinputObjects1= [];
gdjs.roomconnectsceneCode.GDcustoncodeinputObjects2= [];
gdjs.roomconnectsceneCode.GDcustoncodeinputObjects3= [];
gdjs.roomconnectsceneCode.GDcustoncodeinputObjects4= [];
gdjs.roomconnectsceneCode.GDcustoncodeinputObjects5= [];
gdjs.roomconnectsceneCode.GDusernameinputObjects1= [];
gdjs.roomconnectsceneCode.GDusernameinputObjects2= [];
gdjs.roomconnectsceneCode.GDusernameinputObjects3= [];
gdjs.roomconnectsceneCode.GDusernameinputObjects4= [];
gdjs.roomconnectsceneCode.GDusernameinputObjects5= [];
gdjs.roomconnectsceneCode.GDerrortxtObjects1= [];
gdjs.roomconnectsceneCode.GDerrortxtObjects2= [];
gdjs.roomconnectsceneCode.GDerrortxtObjects3= [];
gdjs.roomconnectsceneCode.GDerrortxtObjects4= [];
gdjs.roomconnectsceneCode.GDerrortxtObjects5= [];
gdjs.roomconnectsceneCode.GDconnectiontypeObjects1= [];
gdjs.roomconnectsceneCode.GDconnectiontypeObjects2= [];
gdjs.roomconnectsceneCode.GDconnectiontypeObjects3= [];
gdjs.roomconnectsceneCode.GDconnectiontypeObjects4= [];
gdjs.roomconnectsceneCode.GDconnectiontypeObjects5= [];


gdjs.roomconnectsceneCode.mapOfGDgdjs_9546roomconnectsceneCode_9546GDroomspriteObjects2Objects = Hashtable.newFrom({"roomsprite": gdjs.roomconnectsceneCode.GDroomspriteObjects2});
gdjs.roomconnectsceneCode.eventsList0 = function(runtimeScene) {

};gdjs.roomconnectsceneCode.mapOfGDgdjs_9546roomconnectsceneCode_9546GDroomspriteObjects2Objects = Hashtable.newFrom({"roomsprite": gdjs.roomconnectsceneCode.GDroomspriteObjects2});
gdjs.roomconnectsceneCode.eventsList1 = function(runtimeScene) {

{

gdjs.copyArray(runtimeScene.getObjects("usernameinput"), gdjs.roomconnectsceneCode.GDusernameinputObjects3);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.roomconnectsceneCode.GDusernameinputObjects3.length === 0 ) ? "" :gdjs.roomconnectsceneCode.GDusernameinputObjects3[0].getString())) >= 13);
}
if (isConditionTrue_0) {
/* Reuse gdjs.roomconnectsceneCode.GDusernameinputObjects3 */
{runtimeScene.getGame().getVariables().getFromIndex(0).setString((( gdjs.roomconnectsceneCode.GDusernameinputObjects3.length === 0 ) ? "" :gdjs.roomconnectsceneCode.GDusernameinputObjects3[0].getString()));
}}

}


};gdjs.roomconnectsceneCode.eventsList2 = function(runtimeScene) {

};gdjs.roomconnectsceneCode.asyncCallback9499132 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chat", false);
}}
gdjs.roomconnectsceneCode.eventsList3 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.roomconnectsceneCode.asyncCallback9499132(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.roomconnectsceneCode.eventsList4 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9497348);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("connectiontype"), gdjs.roomconnectsceneCode.GDconnectiontypeObjects4);
{for(var i = 0, len = gdjs.roomconnectsceneCode.GDconnectiontypeObjects4.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDconnectiontypeObjects4[i].setString("host sent confermation switching scenes . . .");
}
}{runtimeScene.getScene().getVariables().get("messageout").setString(gdjs.evtTools.variable.getVariableString(runtimeScene.getGame().getVariables().getFromIndex(0)) + " is connecting . . .");
}{gdjs.evtTools.p2p.sendVariableToAll("message", runtimeScene.getScene().getVariables().get("messageout"));
}
{ //Subevents
gdjs.roomconnectsceneCode.eventsList3(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
{
}

}


};gdjs.roomconnectsceneCode.asyncCallback9503084 = function (runtimeScene, asyncObjectsList) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(2);
}}
gdjs.roomconnectsceneCode.eventsList5 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.roomconnectsceneCode.asyncCallback9503084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.roomconnectsceneCode.eventsList6 = function(runtimeScene, asyncObjectsList) {

{


let isConditionTrue_0 = false;
{
gdjs.copyArray(asyncObjectsList.getObjects("connectiontype"), gdjs.roomconnectsceneCode.GDconnectiontypeObjects3);

gdjs.copyArray(runtimeScene.getObjects("errortxt"), gdjs.roomconnectsceneCode.GDerrortxtObjects3);
{for(var i = 0, len = gdjs.roomconnectsceneCode.GDerrortxtObjects3.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDerrortxtObjects3[i].setString("");
}
}{for(var i = 0, len = gdjs.roomconnectsceneCode.GDconnectiontypeObjects3.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDconnectiontypeObjects3[i].setString("disconnecting from broker server and resetting connections . . .");
}
}{gdjs.evtTools.p2p.disconnectFromAll();
}
{ //Subevents
gdjs.roomconnectsceneCode.eventsList5(runtimeScene, asyncObjectsList);} //End of subevents
}

}


};gdjs.roomconnectsceneCode.asyncCallback9501812 = function (runtimeScene, asyncObjectsList) {

{ //Subevents
gdjs.roomconnectsceneCode.eventsList6(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.roomconnectsceneCode.eventsList7 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
for (const obj of gdjs.roomconnectsceneCode.GDconnectiontypeObjects2) asyncObjectsList.addObject("connectiontype", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(1), (runtimeScene) => (gdjs.roomconnectsceneCode.asyncCallback9501812(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.roomconnectsceneCode.eventsList8 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9493876);
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("connectiontype"), gdjs.roomconnectsceneCode.GDconnectiontypeObjects3);
{gdjs.evtTools.p2p.useDefaultBrokerServer();
}{for(var i = 0, len = gdjs.roomconnectsceneCode.GDconnectiontypeObjects3.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDconnectiontypeObjects3[i].setString("connecting to broker server . . .");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.isReady();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9495244);
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("connectiontype"), gdjs.roomconnectsceneCode.GDconnectiontypeObjects3);
{gdjs.evtTools.p2p.connect(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(6)));
}{for(var i = 0, len = gdjs.roomconnectsceneCode.GDconnectiontypeObjects3.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDconnectiontypeObjects3[i].setString("attempting to connect to room id . . .");
}
}}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onEvent("hostconfirm", false);
if (isConditionTrue_0) {

{ //Subevents
gdjs.roomconnectsceneCode.eventsList4(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.onError();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.p2p.getLastError() == "Could not connect to peer " + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9500940);
}
}
}
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("connectiontype"), gdjs.roomconnectsceneCode.GDconnectiontypeObjects2);
{for(var i = 0, len = gdjs.roomconnectsceneCode.GDconnectiontypeObjects2.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDconnectiontypeObjects2[i].setString("room not found creating it . . .");
}
}
{ //Subevents
gdjs.roomconnectsceneCode.eventsList7(runtimeScene);} //End of subevents
}

}


};gdjs.roomconnectsceneCode.eventsList9 = function(runtimeScene) {

{


gdjs.roomconnectsceneCode.eventsList8(runtimeScene);
}


};gdjs.roomconnectsceneCode.asyncCallback9506276 = function (runtimeScene, asyncObjectsList) {
}
gdjs.roomconnectsceneCode.eventsList10 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.roomconnectsceneCode.asyncCallback9506276(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.roomconnectsceneCode.asyncCallback9505460 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(asyncObjectsList.getObjects("connectiontype"), gdjs.roomconnectsceneCode.GDconnectiontypeObjects4);

{for(var i = 0, len = gdjs.roomconnectsceneCode.GDconnectiontypeObjects4.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDconnectiontypeObjects4[i].setString("connect to breaker server . . .");
}
}{gdjs.evtTools.p2p.useDefaultBrokerServer();
}
{ //Subevents
gdjs.roomconnectsceneCode.eventsList10(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.roomconnectsceneCode.eventsList11 = function(runtimeScene, asyncObjectsList) {

{


{
const parentAsyncObjectsList = asyncObjectsList;
{
const asyncObjectsList = gdjs.LongLivedObjectsList.from(parentAsyncObjectsList);
for (const obj of gdjs.roomconnectsceneCode.GDconnectiontypeObjects3) asyncObjectsList.addObject("connectiontype", obj);
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.roomconnectsceneCode.asyncCallback9505460(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.roomconnectsceneCode.asyncCallback9504188 = function (runtimeScene, asyncObjectsList) {
gdjs.copyArray(runtimeScene.getObjects("connectiontype"), gdjs.roomconnectsceneCode.GDconnectiontypeObjects3);
{for(var i = 0, len = gdjs.roomconnectsceneCode.GDconnectiontypeObjects3.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDconnectiontypeObjects3[i].setString("setting id . . .");
}
}{gdjs.evtTools.p2p.overrideId(gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(6)));
}
{ //Subevents
gdjs.roomconnectsceneCode.eventsList11(runtimeScene, asyncObjectsList);} //End of subevents
}
gdjs.roomconnectsceneCode.eventsList12 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.roomconnectsceneCode.asyncCallback9504188(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.roomconnectsceneCode.eventsList13 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9504028);
}
if (isConditionTrue_0) {

{ //Subevents
gdjs.roomconnectsceneCode.eventsList12(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.p2p.isReady();
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(0)) + gdjs.evtTools.variable.getVariableString(runtimeScene.getScene().getVariables().getFromIndex(6)) == gdjs.evtTools.p2p.getCurrentId());
}
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9507668);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "chat", false);
}}

}


};gdjs.roomconnectsceneCode.eventsList14 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9492172);
}
if (isConditionTrue_0) {
{runtimeScene.getScene().getVariables().getFromIndex(5).setNumber(1);
}}

}


{



}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) == 1;
if (isConditionTrue_0) {

{ //Subevents
gdjs.roomconnectsceneCode.eventsList9(runtimeScene);} //End of subevents
}

}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableNumber(runtimeScene.getScene().getVariables().getFromIndex(5)) == 2;
if (isConditionTrue_0) {

{ //Subevents
gdjs.roomconnectsceneCode.eventsList13(runtimeScene);} //End of subevents
}

}


};gdjs.roomconnectsceneCode.mapOfGDgdjs_9546roomconnectsceneCode_9546GDerrortxtObjects1Objects = Hashtable.newFrom({"errortxt": gdjs.roomconnectsceneCode.GDerrortxtObjects1});
gdjs.roomconnectsceneCode.eventsList15 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("roomsprite"), gdjs.roomconnectsceneCode.GDroomspriteObjects1);
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "default", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.roomconnectsceneCode.GDroomspriteObjects1.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDroomspriteObjects1[i].getBehavior("Effect").enableEffect("Effect", false);
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("roomsprite"), gdjs.roomconnectsceneCode.GDroomspriteObjects1);

for (gdjs.roomconnectsceneCode.forEachIndex2 = 0;gdjs.roomconnectsceneCode.forEachIndex2 < gdjs.roomconnectsceneCode.GDroomspriteObjects1.length;++gdjs.roomconnectsceneCode.forEachIndex2) {
gdjs.roomconnectsceneCode.GDroomspriteObjects2.length = 0;


gdjs.roomconnectsceneCode.forEachTemporary2 = gdjs.roomconnectsceneCode.GDroomspriteObjects1[gdjs.roomconnectsceneCode.forEachIndex2];
gdjs.roomconnectsceneCode.GDroomspriteObjects2.push(gdjs.roomconnectsceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.roomconnectsceneCode.mapOfGDgdjs_9546roomconnectsceneCode_9546GDroomspriteObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
}
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "pointer", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.roomconnectsceneCode.GDroomspriteObjects2.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDroomspriteObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}}
}

}


{

gdjs.copyArray(runtimeScene.getObjects("roomsprite"), gdjs.roomconnectsceneCode.GDroomspriteObjects1);

for (gdjs.roomconnectsceneCode.forEachIndex2 = 0;gdjs.roomconnectsceneCode.forEachIndex2 < gdjs.roomconnectsceneCode.GDroomspriteObjects1.length;++gdjs.roomconnectsceneCode.forEachIndex2) {
gdjs.roomconnectsceneCode.GDroomspriteObjects2.length = 0;


gdjs.roomconnectsceneCode.forEachTemporary2 = gdjs.roomconnectsceneCode.GDroomspriteObjects1[gdjs.roomconnectsceneCode.forEachIndex2];
gdjs.roomconnectsceneCode.GDroomspriteObjects2.push(gdjs.roomconnectsceneCode.forEachTemporary2);
let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.roomconnectsceneCode.mapOfGDgdjs_9546roomconnectsceneCode_9546GDroomspriteObjects2Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), false);
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__CursorType__ChangeCursorType.func(runtimeScene, "wait", (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}{for(var i = 0, len = gdjs.roomconnectsceneCode.GDroomspriteObjects2.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDroomspriteObjects2[i].getBehavior("Effect").enableEffect("Effect", true);
}
}{gdjs.evtTools.variable.setVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true);
}{runtimeScene.getScene().getVariables().getFromIndex(6).setString("room1");
}
{ //Subevents: 
gdjs.roomconnectsceneCode.eventsList1(runtimeScene);} //Subevents end.
}
}

}


{



}


{


gdjs.roomconnectsceneCode.eventsList2(runtimeScene);
}


{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.variable.getVariableBoolean(runtimeScene.getScene().getVariables().getFromIndex(1), true);
if (isConditionTrue_0) {

{ //Subevents
gdjs.roomconnectsceneCode.eventsList14(runtimeScene);} //End of subevents
}

}


{



}


{


let isConditionTrue_0 = false;
{
gdjs.copyArray(runtimeScene.getObjects("errortxt"), gdjs.roomconnectsceneCode.GDerrortxtObjects1);
{for(var i = 0, len = gdjs.roomconnectsceneCode.GDerrortxtObjects1.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDerrortxtObjects1[i].setString(gdjs.evtTools.p2p.getLastError());
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("errortxt"), gdjs.roomconnectsceneCode.GDerrortxtObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.cursorOnObject(gdjs.roomconnectsceneCode.mapOfGDgdjs_9546roomconnectsceneCode_9546GDerrortxtObjects1Objects, runtimeScene, true, false);
if (isConditionTrue_0) {
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.input.isMouseButtonReleased(runtimeScene, "Left");
if (isConditionTrue_0) {
isConditionTrue_0 = false;
{isConditionTrue_0 = runtimeScene.getOnceTriggers().triggerOnce(9530980);
}
}
}
if (isConditionTrue_0) {
{gdjs.evtsExt__UploadDownloadTextFile__DownloadTextFile.func(runtimeScene, "error", gdjs.evtTools.p2p.getLastError(), (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("usernameinput"), gdjs.roomconnectsceneCode.GDusernameinputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.roomconnectsceneCode.GDusernameinputObjects1.length === 0 ) ? "" :gdjs.roomconnectsceneCode.GDusernameinputObjects1[0].getString())) <= 13);
}
if (isConditionTrue_0) {
/* Reuse gdjs.roomconnectsceneCode.GDusernameinputObjects1 */
{for(var i = 0, len = gdjs.roomconnectsceneCode.GDusernameinputObjects1.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDusernameinputObjects1[i].setTextColor("243;243;243");
}
}}

}


{

gdjs.copyArray(runtimeScene.getObjects("usernameinput"), gdjs.roomconnectsceneCode.GDusernameinputObjects1);

let isConditionTrue_0 = false;
isConditionTrue_0 = false;
{isConditionTrue_0 = (gdjs.evtTools.string.strLen((( gdjs.roomconnectsceneCode.GDusernameinputObjects1.length === 0 ) ? "" :gdjs.roomconnectsceneCode.GDusernameinputObjects1[0].getString())) >= 13);
}
if (isConditionTrue_0) {
/* Reuse gdjs.roomconnectsceneCode.GDusernameinputObjects1 */
{for(var i = 0, len = gdjs.roomconnectsceneCode.GDusernameinputObjects1.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDusernameinputObjects1[i].setTextColor("255;0;0");
}
}{for(var i = 0, len = gdjs.roomconnectsceneCode.GDusernameinputObjects1.length ;i < len;++i) {
    gdjs.roomconnectsceneCode.GDusernameinputObjects1[i].setPosition(490 + gdjs.randomFloatInRange(-(2), 2),137 + gdjs.randomFloatInRange(-(2), 2));
}
}}

}


};

gdjs.roomconnectsceneCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.roomconnectsceneCode.GDchooseroomtxtObjects1.length = 0;
gdjs.roomconnectsceneCode.GDchooseroomtxtObjects2.length = 0;
gdjs.roomconnectsceneCode.GDchooseroomtxtObjects3.length = 0;
gdjs.roomconnectsceneCode.GDchooseroomtxtObjects4.length = 0;
gdjs.roomconnectsceneCode.GDchooseroomtxtObjects5.length = 0;
gdjs.roomconnectsceneCode.GDtypeusernameheretxtObjects1.length = 0;
gdjs.roomconnectsceneCode.GDtypeusernameheretxtObjects2.length = 0;
gdjs.roomconnectsceneCode.GDtypeusernameheretxtObjects3.length = 0;
gdjs.roomconnectsceneCode.GDtypeusernameheretxtObjects4.length = 0;
gdjs.roomconnectsceneCode.GDtypeusernameheretxtObjects5.length = 0;
gdjs.roomconnectsceneCode.GDNewSpriteObjects1.length = 0;
gdjs.roomconnectsceneCode.GDNewSpriteObjects2.length = 0;
gdjs.roomconnectsceneCode.GDNewSpriteObjects3.length = 0;
gdjs.roomconnectsceneCode.GDNewSpriteObjects4.length = 0;
gdjs.roomconnectsceneCode.GDNewSpriteObjects5.length = 0;
gdjs.roomconnectsceneCode.GDroomnameObjects1.length = 0;
gdjs.roomconnectsceneCode.GDroomnameObjects2.length = 0;
gdjs.roomconnectsceneCode.GDroomnameObjects3.length = 0;
gdjs.roomconnectsceneCode.GDroomnameObjects4.length = 0;
gdjs.roomconnectsceneCode.GDroomnameObjects5.length = 0;
gdjs.roomconnectsceneCode.GDNewSprite2Objects1.length = 0;
gdjs.roomconnectsceneCode.GDNewSprite2Objects2.length = 0;
gdjs.roomconnectsceneCode.GDNewSprite2Objects3.length = 0;
gdjs.roomconnectsceneCode.GDNewSprite2Objects4.length = 0;
gdjs.roomconnectsceneCode.GDNewSprite2Objects5.length = 0;
gdjs.roomconnectsceneCode.GDroomspriteObjects1.length = 0;
gdjs.roomconnectsceneCode.GDroomspriteObjects2.length = 0;
gdjs.roomconnectsceneCode.GDroomspriteObjects3.length = 0;
gdjs.roomconnectsceneCode.GDroomspriteObjects4.length = 0;
gdjs.roomconnectsceneCode.GDroomspriteObjects5.length = 0;
gdjs.roomconnectsceneCode.GDcustoncodeinputObjects1.length = 0;
gdjs.roomconnectsceneCode.GDcustoncodeinputObjects2.length = 0;
gdjs.roomconnectsceneCode.GDcustoncodeinputObjects3.length = 0;
gdjs.roomconnectsceneCode.GDcustoncodeinputObjects4.length = 0;
gdjs.roomconnectsceneCode.GDcustoncodeinputObjects5.length = 0;
gdjs.roomconnectsceneCode.GDusernameinputObjects1.length = 0;
gdjs.roomconnectsceneCode.GDusernameinputObjects2.length = 0;
gdjs.roomconnectsceneCode.GDusernameinputObjects3.length = 0;
gdjs.roomconnectsceneCode.GDusernameinputObjects4.length = 0;
gdjs.roomconnectsceneCode.GDusernameinputObjects5.length = 0;
gdjs.roomconnectsceneCode.GDerrortxtObjects1.length = 0;
gdjs.roomconnectsceneCode.GDerrortxtObjects2.length = 0;
gdjs.roomconnectsceneCode.GDerrortxtObjects3.length = 0;
gdjs.roomconnectsceneCode.GDerrortxtObjects4.length = 0;
gdjs.roomconnectsceneCode.GDerrortxtObjects5.length = 0;
gdjs.roomconnectsceneCode.GDconnectiontypeObjects1.length = 0;
gdjs.roomconnectsceneCode.GDconnectiontypeObjects2.length = 0;
gdjs.roomconnectsceneCode.GDconnectiontypeObjects3.length = 0;
gdjs.roomconnectsceneCode.GDconnectiontypeObjects4.length = 0;
gdjs.roomconnectsceneCode.GDconnectiontypeObjects5.length = 0;

gdjs.roomconnectsceneCode.eventsList15(runtimeScene);

return;

}

gdjs['roomconnectsceneCode'] = gdjs.roomconnectsceneCode;
