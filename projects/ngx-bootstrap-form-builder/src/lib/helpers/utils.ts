export const TAB = 9;
export const LEFT_ARROW = 37;
export const RIGHT_ARROW = 39;
export const BACKSPACE = 8;
export const DELETE = 46;

export const SPECIAL_CHARACTERS = [' ', '/', '(', ')', '+', '/', '-'];

export const overwriteCharAtPosition = (
  input: HTMLInputElement,
  position: number,
  key: string
) => {
  const currentValue = input.value;
  input.value =
    currentValue.slice(0, position) + key + currentValue.slice(position + 1);
};

export const getRandomNumber = (min: number, max: number, precision = true) => {
  min = Math.ceil(min);
  max = Math.floor(max);
  if (precision) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
  } else {
    return Math.random() * (max - min) + min;
  }
};

export const getExtension = (filename: string) =>
  filename.substring(filename.lastIndexOf('.') + 1);

export const toSentenceCase = (str: string) => {
  let result = str.replace(/([A-Z])/g, ' $1');
  result = result.replace(/^_*(.)|_+(.)/g, (s, c, d) =>
    c ? c.toUpperCase() : ' ' + d
  );
  result = result.replace(/^-*(.)|-+(.)/g, (s, c, d) =>
    c ? c.toUpperCase() : ' ' + d
  );

  return result.charAt(0).toUpperCase() + result.slice(1);
};

export const getRandom = (arr: string | any[], n: number) => {
  const result = new Array(n);
  let len = arr.length;
  const taken = new Array(len);
  if (n > len) {
    throw new RangeError('getRandom: more elements taken than available');
  }
  while (n--) {
    const x = Math.floor(Math.random() * len);
    result[n] = arr[x in taken ? taken[x] : x];
    taken[x] = --len in taken ? taken[len] : len;
  }
  return result;
};

/**
 * https://stackoverflow.com/fields/14446511/most-efficient-method-to-groupby-on-an-array-of-objects
 */
export const groupBy = (xs: any[], key: string, type = {}) =>
  xs.reduce((rv, x) => {
    (rv[x[key]] = rv[x[key]] || []).push(x);
    return rv;
  }, type);

export const logError = (err: any) => {
  console.warn(err.message);
};

export const propByString = (obj: any, propName: string): string => {
  propName = propName.replace(/\[(\w+)\]/g, '.$1');
  propName = propName.replace(/^\./, '');
  const a = propName.split('.');
  for (let i = 0, n = a.length; i < n; ++i) {
    const k = a[i];
    if (obj && k in obj) {
      obj = obj[k];
    }
  }
  return obj;
};

export const isJsonString = (str: string): boolean => {
  try {
    JSON.parse(str);
  } catch (e) {
    return false;
  }
  return true;
};

export const uniqueArray = <T>(arr: T[]): T[] =>  arr.filter((value, index, self) => self.indexOf(value) === index);

export const toCamelCase = (str: string) =>
  str
    .replace(/(?:^\w|[A-Z]|\b\w)/g, (word, index) =>
      index === 0 ? word.toLowerCase() : word.toUpperCase()
    )
    .replace(/\s+/g, '');

export const checkImageExists = (
  url: string,
  callback: (exists: boolean) => void
) => {
  const img = new Image();
  img.src = url;

  if (img.complete) {
    callback(true);
  } else {
    img.onload = () => {
      callback(true);
    };

    img.onerror = () => {
      callback(false);
    };
  }
};

export const sorter = (fields: any[]) => (a: any, b: any) =>
  fields
    .map((o) => {
      let dir = 1;
      if (o[0] === '-') {
        dir = -1;
        o = o.substring(1);
      }
      return a[o] > b[o] ? dir : a[o] < b[o] ? -dir : 0;
    })
    .reduce((p, n) => (p ? p : n), 0);

export const toKebabCase = (str: string) =>  str
    .replace(/([a-z])([A-Z])/g, '$1-$2')
    .replace(/[\s_]+/g, '-')
    .toLowerCase();

export const removeUndefinedProps = <T>(item: any) => {
  Object.keys(item).forEach((key) => {
    const _item = item as any;
    if (_item[key] === '' || _item[key] === null || _item[key] === undefined) {
      delete _item[key];
    }
  });
  return item;
};

export const stringArray2KeyValueArray = (
  enumm: any[],
  casing: 'camel' | 'kebab' | 'sentence' | 'none' = 'kebab',
  reverse?: boolean
): { key: any; value: any }[] => {
  const arrayObjects = [];
  if (typeof enumm)
    for (const value of Object.values(enumm)) {
      if (!Number.isNaN(Number(value))) continue;
      const objValue =
        casing === 'camel'
          ? toCamelCase(value)
          : casing === 'kebab'
          ? toKebabCase(value)
          : casing === 'sentence'
          ? toSentenceCase(value)
          : value;
      arrayObjects.push(reverse ? { value, key: objValue }: { value: objValue, key: value });
    }
  return arrayObjects;
};

export const enum2Array = (
  enumm: any,
  reverse?: boolean,
  casing: 'camel' | 'kebab' | 'sentence' | 'none' = 'kebab'
): { key: any; value: any }[] => {
  const arrayObjects = [];
  if (typeof enumm)
    for (const [propertyKey, propertyValue] of Object.entries(enumm)) {
      if (!Number.isNaN(Number(propertyKey))) continue;
      const value =
        casing === 'camel'
          ? toCamelCase(propertyKey)
          : casing === 'kebab'
          ? toKebabCase(propertyKey)
          : casing === 'sentence'
          ? toSentenceCase(propertyKey)
          : propertyKey;
      if (reverse) {
        arrayObjects.push({ value, key: propertyValue });
      } else {
        arrayObjects.push({ value: propertyValue, key: value });
      }
    }
  return arrayObjects;
};

export const camelize = (s: string) =>
  s.replace(/-./g, (x) => x[1].toUpperCase());

export const configureRoles = (
  roles: string[] | undefined,
  userRoles: string[] | undefined
) => userRoles?.some((role) => roles && roles.length > 0 ? roles.includes(role) : true);

export const deepCopy = (data: unknown) => JSON.parse(JSON.stringify(data));

export const getUrlParameter = (link: string, param: string) => {
  const urlVariables = link.split('?')[1].split('&');
  let paramName;

  for (let i = 0; i < urlVariables.length; i++) {
    paramName = urlVariables[i].split('=');
    if (paramName[0] === param) {
      return paramName[1];
    }
  }
  return '';
};

export const getGreeting = () => {
  const hour = new Date().getHours();
  const welcomeTypes = ['Good morning', 'Good afternoon', 'Good evening'];
  let welcomeText = '';

  if (hour < 12) welcomeText = welcomeTypes[0];
  else if (hour < 18) welcomeText = welcomeTypes[1];
  else welcomeText = welcomeTypes[2];
};
