import { defaultDateTimeOptions } from "_utils/_constants";

String.prototype.titleizeAndHumanize = function () {
  return this.replace(/[-_\s+]+/g, " ")
    .trim()
    .replace(
      /(\w)(\w*)/g,
      (_, first, rest) => first.toUpperCase() + rest.toLowerCase()
    );
};

Date.prototype.formattedDate = function (options = {}) {
  const optionKeyValues = Object.entries(options);
  const { weekday, year, month, day } = defaultDateTimeOptions;
  const newOptions = { weekday, day, month, year, ...options };
  if (optionKeyValues.length) {
    optionKeyValues.forEach(([key, value]) => {
      if (value === "") delete newOptions[key];
    });
  }
  return this.toLocaleDateString("en-US", newOptions);
};

Date.prototype.formattedTime = function (options = {}) {
  const optionKeyValues = Object.entries(options);
  const { hour, minute, second } = defaultDateTimeOptions;
  const newOptions = { hour, minute, second, ...options };
  if (optionKeyValues.length) {
    optionKeyValues.forEach(([key, value]) => {
      if (value === "") delete newOptions[key];
    });
  }
  return this.toLocaleTimeString("en-US", newOptions);
};

Date.prototype.formattedDateTime = function (options = {}) {
  const optionKeyValues = Object.entries(options);
  const newOptions = { ...defaultDateTimeOptions, ...options };
  if (optionKeyValues.length) {
    optionKeyValues.forEach(([key, value]) => {
      if (value === "") delete newOptions[key];
    });
  }
  return this.toLocaleTimeString("en-US", newOptions);
};

// Date.prototype.formatted = function () {
//   let year = new Intl.DateTimeFormat("en", { year: "numeric" }).format(this);
//   let month = new Intl.DateTimeFormat("en", { month: "short" }).format(this);
//   let day = new Intl.DateTimeFormat("en", { day: "2-digit" }).format(this);

//   return `${day}-${month}-${year}`;
// };

Number.prototype.formatWithCommas = function () {
  return this.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};

export const newUUID = () => {
  const timestamp = new Date().getTime();
  const hexTimestamp = timestamp.toString(16);
  const uuid =
    `${hexTimestamp.substr(0, 8)}-` +
    "xxxx-4xxx-yxxx-xxxxxxxxxxxx".replace(/[xy]/g, function (c) {
      const r = (Math.random() * 16) | 0;
      const v = c === "x" ? r : (r & 0x3) | 0x8;
      return v.toString(16);
    });

  return uuid;
};

export const setElementHeightBetweenTwoElements = ({
  elementRef,
  skipTopNavHeight,
  skipBottomNavHeight = true,
}) => {
  if (elementRef.current) {
    const [topNavElement, mainWrapperElement, bottomNavElement] =
      elementRef.current.parentNode.childNodes;

    let topNavElementHeight = 0;
    let bottomNavElementHeight = 0;

    if (!skipTopNavHeight) {
      let topNavClasses = Array.from(topNavElement.classList);
      if (topNavClasses.includes("d-none")) {
        topNavClasses.splice(topNavClasses.indexOf("d-none"), 1);
        let classesString = topNavClasses.join(" ");
        topNavElement.setAttribute("class", classesString);
        topNavElementHeight = topNavElement.offsetHeight;
        topNavElement.setAttribute("class", classesString + " d-none");
      } else topNavElementHeight = topNavElement.offsetHeight;
    }

    if (!skipBottomNavHeight) {
      let bottomNavClasses = Array.from(bottomNavElement?.classList || []);
      if (bottomNavClasses.includes("d-none")) {
        bottomNavClasses.splice(bottomNavClasses.indexOf("d-none"), 1);
        let classesString = bottomNavClasses.join(" ");
        bottomNavElement.setAttribute("class", classesString);
        bottomNavElementHeight = bottomNavElement.offsetHeight;
        bottomNavElement.setAttribute("class", classesString + " d-none");
      } else bottomNavElementHeight = bottomNavElement.offsetHeight;
    }

    const { innerHeight } = window;
    const docHeight =
      innerHeight - (topNavElementHeight * 2.17 + bottomNavElementHeight);
    let newHeight = docHeight - 1.5;
    const heightWithUnit = newHeight + "px";
    mainWrapperElement.style.minHeight = heightWithUnit;
  }
};

export const convertToFormData = (obj, namespace = null, form = null) => {
  //namespace && form used for recursive call
  const newFormData = form || new FormData();
  let formKey;

  if (obj === null) return;

  for (const property in obj) {
    if (typeof obj[property] === "boolean") {
      obj[property] = obj[property].toString();
    }

    if (obj.hasOwnProperty(property) && obj[property] !== undefined) {
      if (namespace) {
        formKey = namespace + "[" + property + "]";
      } else {
        formKey = property;
      }

      // if the property is an object, but not a File, use recursivity.
      if (obj[property] instanceof Date) {
        newFormData.append(formKey, obj[property].toISOString());
      } else if (
        typeof obj[property] === "object" &&
        !(obj[property] instanceof Blob)
      ) {
        this.convertToFormData(obj[property], formKey, newFormData);
      } else {
        // if it's a string or a File object
        newFormData.append(formKey, obj[property]);
      }
    }
  }
  return newFormData;
};
