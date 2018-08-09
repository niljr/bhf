export function transformArrayToObject(arr, key) {
  return arr.reduce((obj, item) => {
      obj[item[key]] = item;

      return obj;
  }, {});
}


/**
* Convert objects into an array
* @param {Object} obj
* @returns {Array}
*/
export function transformObjectToArray(obj) {
  let arr = [];

  for (let item in obj) {
      arr.push(obj[item]);
  }

  return arr;
}


export function formatPrice(cents) {
  return (cents / 100).toLocaleString("en-US", {
    style: "currency",
    currency: "PHP"
  });
}

export function rando(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

export function slugify(text) {
  return text
    .toString()
    .toLowerCase()
    .replace(/\s+/g, "-")
    .replace(/[^\w-]+/g, "")
    .replace(/--+/g, "-")
    .replace(/^-+/, "")
    .replace(/-+$/, "");
}
