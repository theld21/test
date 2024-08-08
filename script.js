var _addMoreBtn = $('input[type=button][value="Thêm chủng loại/mã sản phẩm"]');
var _form = () => {
  return $("#addChungLoaiMaPopup_iframe_").contents();
};
var _saleName = () => {
  return _form().find("[id$='_tenThuongMai']");
};
var _quality = () => {
  return _form().find("[id$='_tieuChuanApDung']");
};
var _type = () => {
  return _form().find("[id$='_chungLoaiTB']");
};
var _pack = () => {
  return _form().find("[id$='_quyCachDongGoi']");
};
var _code = () => {
  return _form().find("[id$='_maTB']");
};
var _addFactoryBtn = () => {
  return _form().find('input[type=button][value="Thêm cơ sở sản xuất"]');
};
var _factoryName = (index) => {
  return _form().find(`[id$='_dsCoSoSx.ten_${index}']`);
};
var _factoryAddress = (index) => {
  return _form().find(`[id$='_dsCoSoSx.diachi_${index}']`);
};
var _factoryCountry = (index) => {
  return _form().find(`[id$='_dsCoSoSx.nuocsx_${index}']`);
};
var _updateCountry = (index, name) => {
  _factoryCountry().find("option");
};
var _loading = () => {
  return _form().find(".loadingmask-message-content");
};
