// 5

function invoke(f, initial, interval) {
  function interation() {
    f();
    initial -= interval;
    if (initial >= 0) {
      setInterval(interation, initial);
    }

    if (initial >= 0) {
      setTimeout(interation, initial);
    }
  }
}
