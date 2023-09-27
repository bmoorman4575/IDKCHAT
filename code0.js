gdjs.loadingCode = {};
gdjs.loadingCode.GDNewSpriteObjects1= [];
gdjs.loadingCode.GDNewSpriteObjects2= [];
gdjs.loadingCode.GDchooseroomtxtObjects1= [];
gdjs.loadingCode.GDchooseroomtxtObjects2= [];
gdjs.loadingCode.GDchooseroomtxt2Objects1= [];
gdjs.loadingCode.GDchooseroomtxt2Objects2= [];
gdjs.loadingCode.GDNewSprite3Objects1= [];
gdjs.loadingCode.GDNewSprite3Objects2= [];
gdjs.loadingCode.GDNewSprite2Objects1= [];
gdjs.loadingCode.GDNewSprite2Objects2= [];
gdjs.loadingCode.GDscreenwillbeusedlaterObjects1= [];
gdjs.loadingCode.GDscreenwillbeusedlaterObjects2= [];


gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDchooseroomtxt2Objects1Objects = Hashtable.newFrom({"chooseroomtxt2": gdjs.loadingCode.GDchooseroomtxt2Objects1});
gdjs.loadingCode.asyncCallback9425084 = function (runtimeScene, asyncObjectsList) {
{gdjs.evtTools.runtimeScene.replaceScene(runtimeScene, "roomconnectscene", true);
}}
gdjs.loadingCode.eventsList0 = function(runtimeScene) {

{


{
{
const asyncObjectsList = new gdjs.LongLivedObjectsList();
runtimeScene.getAsyncTasksManager().addTask(gdjs.evtTools.runtimeScene.wait(2), (runtimeScene) => (gdjs.loadingCode.asyncCallback9425084(runtimeScene, asyncObjectsList)));
}
}

}


};gdjs.loadingCode.eventsList1 = function(runtimeScene) {

{


let isConditionTrue_0 = false;
isConditionTrue_0 = false;
isConditionTrue_0 = gdjs.evtTools.runtimeScene.sceneJustBegins(runtimeScene);
if (isConditionTrue_0) {
gdjs.copyArray(runtimeScene.getObjects("chooseroomtxt2"), gdjs.loadingCode.GDchooseroomtxt2Objects1);
{gdjs.evtsExt__AlignObject__ToSceneCenter.func(runtimeScene, gdjs.loadingCode.mapOfGDgdjs_9546loadingCode_9546GDchooseroomtxt2Objects1Objects, (typeof eventsFunctionContext !== 'undefined' ? eventsFunctionContext : undefined));
}
{ //Subevents
gdjs.loadingCode.eventsList0(runtimeScene);} //End of subevents
}

}


};

gdjs.loadingCode.func = function(runtimeScene) {
runtimeScene.getOnceTriggers().startNewFrame();

gdjs.loadingCode.GDNewSpriteObjects1.length = 0;
gdjs.loadingCode.GDNewSpriteObjects2.length = 0;
gdjs.loadingCode.GDchooseroomtxtObjects1.length = 0;
gdjs.loadingCode.GDchooseroomtxtObjects2.length = 0;
gdjs.loadingCode.GDchooseroomtxt2Objects1.length = 0;
gdjs.loadingCode.GDchooseroomtxt2Objects2.length = 0;
gdjs.loadingCode.GDNewSprite3Objects1.length = 0;
gdjs.loadingCode.GDNewSprite3Objects2.length = 0;
gdjs.loadingCode.GDNewSprite2Objects1.length = 0;
gdjs.loadingCode.GDNewSprite2Objects2.length = 0;
gdjs.loadingCode.GDscreenwillbeusedlaterObjects1.length = 0;
gdjs.loadingCode.GDscreenwillbeusedlaterObjects2.length = 0;

gdjs.loadingCode.eventsList1(runtimeScene);

return;

}

gdjs['loadingCode'] = gdjs.loadingCode;
