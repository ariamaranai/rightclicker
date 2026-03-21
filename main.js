{
  let f = e => e.stopImmediatePropagation();
  addEventListener("contextmenu", f, 1);
  addEventListener("selectstart", f, 1);
  addEventListener("copy", f, 1);
}