const DEFAULT_RESOURCES = {
  resource1: "The first resource",
  resource2: "The second resource",
  resource3: "The third resource",
  whatINeed: "resource2",
};
function asyncRequest(resource, callback, resources = DEFAULT_RESOURCES) {
  const MIN_DELAY = 1_000;
  const RANDOM_DELAY = 2_000;
  var randomDelay = Math.round(Math.random() * RANDOM_DELAY) + MIN_DELAY;
  //   console.log("**Requesting: " + resource + "**");
  // eslint-disable-next-line no-undef
  setTimeout(function () {
    // console.log("**Returning: " + resources[resource] + "**");
    callback(resources[resource]);
  }, randomDelay);
}
export { asyncRequest };
