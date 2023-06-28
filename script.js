(function (_0x4189dc, _0x1a7629) {
  const _0x5d1567 = _0x30ae,
    _0x34c239 = _0x4189dc();
  while (!![]) {
    try {
      const _0x4f82ec =
        parseInt(_0x5d1567(0x15f)) / 0x1 +
        (-parseInt(_0x5d1567(0x158)) / 0x2) *
          (-parseInt(_0x5d1567(0x150)) / 0x3) +
        parseInt(_0x5d1567(0x14f)) / 0x4 +
        (-parseInt(_0x5d1567(0x15b)) / 0x5) *
          (parseInt(_0x5d1567(0x154)) / 0x6) +
        (-parseInt(_0x5d1567(0x157)) / 0x7) *
          (-parseInt(_0x5d1567(0x156)) / 0x8) +
        -parseInt(_0x5d1567(0x153)) / 0x9 +
        -parseInt(_0x5d1567(0x15d)) / 0xa;
      if (_0x4f82ec === _0x1a7629) break;
      else _0x34c239["push"](_0x34c239["shift"]());
    } catch (_0x3569e7) {
      _0x34c239["push"](_0x34c239["shift"]());
    }
  }
})(_0x2cde, 0x89f89);
function _0x30ae(_0x36a2f3, _0x441f32) {
  const _0x2cde28 = _0x2cde();
  return (
    (_0x30ae = function (_0x30ae45, _0x362c45) {
      _0x30ae45 = _0x30ae45 - 0x14d;
      let _0x3de6a7 = _0x2cde28[_0x30ae45];
      return _0x3de6a7;
    }),
    _0x30ae(_0x36a2f3, _0x441f32)
  );
}
function _0x2cde() {
  const _0x74920a = [
    "</td><td>",
    "863335dvJyuE",
    "fixedAmountValue",
    "9296620URGlJS",
    "fixedAmountInput",
    "672583OjniET",
    "</td></tr>",
    "getElementById",
    "innerHTML",
    "3561436XCcThO",
    "26337pYjjWo",
    "value",
    "currentPenaltyValue",
    "9819639sYVStm",
    "30lxvNYN",
    "table",
    "253424BoEyCc",
    "217INbDAR",
    "206iSpRaw",
    "innerText",
  ];
  _0x2cde = function () {
    return _0x74920a;
  };
  return _0x2cde();
}
let fixedAmount,
  count = 0x0;
const submitFixedAmount = () => {
    const _0x312d0b = _0x30ae;
    (fixedAmount = Number(
      document["getElementById"](_0x312d0b(0x15e))[_0x312d0b(0x151)]
    )),
      (document[_0x312d0b(0x14d)](_0x312d0b(0x15c))[_0x312d0b(0x14e)] =
        fixedAmount);
  },
  addPenalty = () => {
    const _0x30b157 = _0x30ae,
      _0x227ada = document[_0x30b157(0x14d)](_0x30b157(0x152));
    count++;
    const _0x257998 = fixedAmount + Number(_0x227ada[_0x30b157(0x159)]);
    _0x227ada[_0x30b157(0x159)] = _0x257998;
    const _0x2439e7 =
      "<tr><td>" +
      count +
      _0x30b157(0x15a) +
      fixedAmount +
      "</td><td>" +
      _0x257998 +
      _0x30b157(0x160);
    document[_0x30b157(0x14d)]("table")["innerHTML"] =
      document[_0x30b157(0x14d)](_0x30b157(0x155))["innerHTML"] + _0x2439e7;
  };
