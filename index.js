export const core = [
  "button",
  "checkbox",
  "color",
  "date",
  "datetime-local",
  "email",
  "file",
  "month",
  "number",
  "password",
  "radio",
  "range",
  "search",
  "select",
  "submit",
  "telephone",
  "text",
  "textarea",
  "time",
  "url",
  "week",
]

export const pro = [
  "autocomplete",
  // "colorpicker",
  // "datepicker",
  // "dropdown",
  // "mask",
  // "rating",
  // "repeater",
  // "slider",
  // "taglist",
  // "toggle",
  // "transferlist",
]

const allInputs = [...core, ...pro].sort()
export default allInputs
