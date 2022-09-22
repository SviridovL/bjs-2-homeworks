function cachingDecoratorNew(func) {
  // Ваш код
  let cache = [];
  function wrapper(...args) {
    const hash = args.join`,`;

    const objinCache = cache.find((obj) => obj.subject === hash);
    if (objinCache) {
      console.log("Из кэша: " + objinCache.value);
      return "Из кэша: " + objinCache.value;
    }
    if (!objinCache) {
      let result = func(...args);
      obj = { subject: hash, value: result };
      cache.push(obj);
      if (cache.length > 5) {
        cache.slice(0, 1);
      }
      console.log("Вычисляем: " + result);
      return "Вычисляем: " + result;
    }
  }
  return wrapper;
}

function debounceDecoratorNew(func) {
  // Ваш код
}
