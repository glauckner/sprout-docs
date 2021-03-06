# Sections

Use the Section Settings Importer to import data for Sections, Entry Types, and Fields.

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Section",
    "name": "Example Section",
    "handle": "exampleSection",
    "type": "channel",
    "maxLevels": null,
    "enableVersioning": 1,
    "sites": {
      "default": {
        "enabled": 1,
        "singleUri": "",
        "uriFormat": "news/{slug}",
        "template": "section-one/_entry",
        "enabledByDefault": 1
      },
      "craftUk": {
        "enabled": 1,
        "singleUri": "",
        "uriFormat": "newsuk/{slug}",
        "template": "section-one/_entry",
        "enabledByDefault": 1
      }
    }
  }
]
```

:::

## Section with Fields

::: code

``` craft3
[
  {
    "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Section",
    "name": "Test section",
    "handle": "testSection",
    "type": "channel",
    "maxLevels": null,
    "enableVersioning": 1,
    "sites": {
      "default": {
        "enabled": 1,
        "singleUri": "",
        "uriFormat": "news/{slug}",
        "template": "section-one/_entry",
        "enabledByDefault": 1
      },
      "craftUk": {
        "enabled": 1,
        "singleUri": "",
        "uriFormat": "newsuk/{slug}",
        "template": "section-one/_entry",
        "enabledByDefault": 1
      }
    },
    "entryTypes": [
      {
        "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\EntryType",
        "name": "All Fields",
        "handle": "allFields",
        "showTitles": true,
        "titleLabel": "Title",
        "fieldLayout": {
          "fieldLayoutTab": {
            "name": "Content",
            "fields": [
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Assets",
                "groupId": 1,
                "name": "Example Assets",
                "handle": "sproutExampleAssets",
                "instructions": "",
                "settings": {
                  "useSingleFolder": false,
                  "sources": "*",
                  "defaultUploadLocationSource": null,
                  "defaultUploadLocationSubpath": null,
                  "singleUploadLocationSource": null,
                  "singleUploadLocationSubpath": null,
                  "restrictFiles": true,
                  "allowedKinds": [
                    "image"
                  ],
                  "limit": 3,
                  "viewMode": "list",
                  "selectionLabel": "Add an asset"
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Categories",
                "groupId": 1,
                "name": "Example Categories",
                "handle": "sproutExampleCategories",
                "instructions": "",
                "settings": {
                  "source": "group:1",
                  "limit": 3,
                  "selectionLabel": "Add a category"
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Checkboxes",
                "groupId": 1,
                "name": "Example Checkboxes",
                "handle": "sproutExampleCheckboxes",
                "instructions": "",
                "settings": {
                  "options": [
                    {
                      "label": "Option One",
                      "value": "optionOne",
                      "default": true
                    },
                    {
                      "label": "Option Two",
                      "value": "optionTwo",
                      "default": false
                    },
                    {
                      "label": "Option Three",
                      "value": "optionThree",
                      "default": false
                    }
                  ]
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Color",
                "groupId": 1,
                "name": "Example Color",
                "handle": "color",
                "instructions": ""
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Date",
                "groupId": 1,
                "name": "Example Date",
                "handle": "sproutExampleDate",
                "instructions": "",
                "settings": {
                  "dateTime": "showBoth",
                  "minuteIncrement": 30
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Dropdown",
                "groupId": 1,
                "name": "Example Dropdown",
                "handle": "sproutExampleDropdown",
                "instructions": "",
                "settings": {
                  "options": [
                    {
                      "label": "Option One",
                      "value": "optionOne",
                      "default": true
                    },
                    {
                      "label": "Option Two",
                      "value": "optionTwo",
                      "default": false
                    },
                    {
                      "label": "Option Three",
                      "value": "optionThree",
                      "default": false
                    }
                  ]
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Entries",
                "groupId": 1,
                "name": "Example Entries",
                "handle": "sproutExampleEntries",
                "instructions": "",
                "settings": {
                  "limit": 3,
                  "sources": "*",
                  "selectionLabel": "Add an entry"
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Lightswitch",
                "groupId": 1,
                "name": "Example Lightswitch",
                "handle": "sproutExampleLightswitch",
                "instructions": "",
                "settings": {
                  "default": true
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "groupId": 1,
                "name": "Example Matrix",
                "handle": "sproutExampleMatrix",
                "instructions": "",
                "type": "craft\\fields\\Matrix",
                "settings": {
                  "blockTypes": {
                    "new1": {
                      "name": "Block One",
                      "handle": "blockOne",
                      "fields": {
                        "new1": {
                          "type": "craft\\fields\\PlainText",
                          "name": "Plain Text",
                          "handle": "sproutExamplePlainTextMatrixOne",
                          "instructions": "",
                          "typesettings": {
                            "placeholder": "",
                            "multiline": false
                          }
                        }
                      }
                    },
                    "new2": {
                      "name": "Block Two",
                      "handle": "blockTwo",
                      "fields": {
                        "new1": {
                          "type": "craft\\fields\\PlainText",
                          "name": "Plain Text",
                          "handle": "sproutExamplePlainTextMatrixTwo",
                          "instructions": "",
                          "typesettings": {
                            "placeholder": "",
                            "multiline": false
                          }
                        }
                      }
                    }
                  },
                  "maxBlocks": null
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\MultiSelect",
                "groupId": 1,
                "name": "Example Multi-select",
                "handle": "sproutExampleMultiselect",
                "instructions": "",
                "settings": {
                  "options": [
                    {
                      "label": "Option One",
                      "value": "optionOne",
                      "default": true
                    },
                    {
                      "label": "Option Two",
                      "value": "optionTwo",
                      "default": false
                    },
                    {
                      "label": "Option Three",
                      "value": "optionThree",
                      "default": false
                    }
                  ]
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Number",
                "groupId": 1,
                "name": "Example Number",
                "handle": "sproutExampleNumber",
                "instructions": "",
                "settings": {
                  "min": 0,
                  "max": 100,
                  "decimals": 2
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\PlainText",
                "groupId": 1,
                "name": "Example Plain Text",
                "handle": "sproutExamplePlainText",
                "instructions": "",
                "settings": {
                  "placeholder": "",
                  "multiline": false
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\RadioButtons",
                "groupId": 1,
                "name": "Example Radio Buttons",
                "handle": "sproutExampleRadioButtons",
                "instructions": "",
                "settings": {
                  "options": [
                    {
                      "label": "Option One",
                      "value": "optionOne",
                      "default": true
                    },
                    {
                      "label": "Option Two",
                      "value": "optionTwo",
                      "default": false
                    },
                    {
                      "label": "Option Three",
                      "value": "optionThree",
                      "default": false
                    }
                  ]
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Table",
                "groupId": 1,
                "name": "Example Table",
                "handle": "sproutExampleTable",
                "instructions": "",
                "settings": {
                  "columns": {
                    "col1": {
                      "heading": "Column One",
                      "handle": "columnOne",
                      "width": "30%",
                      "type": "singleline"
                    },
                    "col2": {
                      "heading": "Column Two",
                      "handle": "columnTwo",
                      "width": "50%",
                      "type": "multiline"
                    },
                    "col3": {
                      "heading": "Column Three",
                      "handle": "columnThree",
                      "width": "10%",
                      "type": "number"
                    },
                    "col4": {
                      "heading": "Column Four",
                      "handle": "columnFour",
                      "width": "10%",
                      "type": "checkbox"
                    }
                  },
                  "defaults": {
                    "row1": {
                      "col1": "Lorem ipsum dolor",
                      "col2": "Lorem ipsum dolor sit amet, consectetuer adipiscing elit.",
                      "col3": 11,
                      "col4": true
                    },
                    "row2": {
                      "col1": "Lorem ipsum dolor",
                      "col2": "Aenean commodo ligula eget dolor.",
                      "col3": 3,
                      "col4": false
                    }
                  }
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Tags",
                "groupId": 1,
                "name": "Example Tags",
                "handle": "sproutExampleTags",
                "instructions": "",
                "settings": {
                  "source": "taggroup:1",
                  "selectionLabel": "Add a tag"
                }
              },
              {
                "@model": "barrelstrength\\sproutbase\\app\\import\\importers\\settings\\Field",
                "type": "craft\\fields\\Users",
                "groupId": 1,
                "name": "Example Users",
                "handle": "sproutExampleUsers",
                "instructions": "",
                "settings": {
                  "sources": "*",
                  "selectionLabel": "Add a user"
                }
              }
            ]
          }
        }
      }
    ]
  }
]
```
:::