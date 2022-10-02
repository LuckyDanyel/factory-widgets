import loadTravelataWidgets from "./loadTravelataWidgets";

export default {
    loadTravelataWidgets,
}
export {
    loadTravelataWidgets,
}
const createWidget = await loadTravelataWidgets();
createWidget('tizer', {id:"app", text:"fucking widgets"})