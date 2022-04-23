var masterExt = navigator.engmodeExtension || navigator.jrdExtension || navigator.kaiosExtension
var propSet = {
  'service.adb.tcp.port': 5555,
  'ctl.stop': 'adbd',
  'ctl.start': 'adbd'
};
for(var key in propSet) {
  masterExt.setPropertyValue(key, propSet[key])
}
