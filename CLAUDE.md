# @formkit/theme-schemas

JSON schema definitions and example data for all FormKit input types. Used for theme previews, testing, and documentation.

## Architecture

```
theme-schemas/
├── index.json        # Catalog of all schemas by category
└── schemas/
    ├── [36 input schemas]
    └── form/
        ├── login.json
        ├── registration.json
        ├── tshirt.json
        ├── survey.json
        └── application.json
```

## Schema Categories

### Core Inputs (22)
button, checkbox, color, date, datetime-local, email, file, month, number, password, radio, range, search, select, submit, summary, telephone, text, textarea, time, url, week

### Pro Inputs (12)
autocomplete, colorpicker, datepicker, dropdown, mask, rating, repeater, slider, taglist, toggle, togglebuttons, transferlist

### Addon Inputs (2)
barcode, multi-step

### Form Examples (5)
login, registration, tshirt, survey, application

## Schema Format

Each schema file is a JSON array of FormKit node definitions:

```json
[
  {
    "$formkit": "text",
    "label": "Username",
    "placeholder": "Enter username",
    "help": "Your unique identifier",
    "validation": "required|length:3,20"
  },
  {
    "$formkit": "text",
    "label": "With Icon",
    "prefixIcon": "user",
    "suffixIcon": "check"
  }
]
```

## Example Variations

Each input schema includes multiple examples showing:
- Basic usage
- With placeholder/help text
- With icons (prefix/suffix)
- With validation
- Disabled state
- Input-specific options

## No Build Required

This is a pure data repository:
- No `package.json`
- No build scripts
- No TypeScript
- Just JSON files

## Interconnections

```
theme-schemas (this package)
    ↓ provides example data
├── theme-editor (displays previews)
├── theme-creator (test data)
├── themes.formkit.com (form examples)
├── docs-ui (documentation examples)
└── FormKitKitchenSink component
```

## Common Tasks

### Adding examples for a new input

1. Create `schemas/[inputname].json`
2. Add array of example configurations
3. Update `index.json` to include in appropriate category

### Adding a form example

1. Create `schemas/form/[name].json`
2. Define complete form with multiple inputs
3. Update `index.json` under "form" category

### Schema Properties

Common properties across schemas:
- `$formkit` - Input type (required)
- `label` - Display label
- `help` - Helper text
- `placeholder` - Input placeholder
- `validation` - Validation rules
- `value` - Default value
- `disabled` - Disabled state
- `prefixIcon` / `suffixIcon` - Icons

Input-specific properties vary (e.g., `options` for select, `draggable` for repeater).

## Version Control

Maintained as sub-repo in FormKit monorepo. Changes tracked for:
- New input examples
- Schema structure updates
- Form example additions
