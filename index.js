;(function () {

  if ('serviceWorker' in navigator) {
    return installServiceWorker();
  }

  function installServiceWorker() {
    navigator.serviceWorker.register('./service-worker.js');

    navigator.serviceWorker.oncontrollerchange = onControllerChange;
  }

  function onControllerChange() {
    if (localStorage.getItem('sw')) {
      window.alert('Refresh the page to see newest content.');
    } else {
      window.alert('Offline ready.');

      localStorage.setItem('sw', 'done');
    }
  }

}());
