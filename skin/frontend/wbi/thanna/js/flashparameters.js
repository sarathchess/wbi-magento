function flash_start(skin_url){
  var fo = new FlashObject(skin_url + "flash/header_v8.swf?xmlUrl="+ skin_url +"flash/tfile_main.xml", "mymovie", "100%", "665", "7", "");
  fo.addParam("quality", "high");
  fo.addParam("scale", "noscale");
  fo.addParam("wmode", "transparent");
  fo.write("flashcontent");
}