First of all (even before the block's name), its README.md should contain the following sentence at the very beginning:

`📢 Use this project, [contribute](https://github.com/{OrganizationName}/{AppName}) to it or open issues to help evolve it using [Store Discussion](https://github.com/vtex-apps/store-discussion).`

> :warning: *Remember to replace the values between braces according to your scenario. For example: https://github.com/vtex-apps/breadcrumb*

# BLOCK NAME

Under the block's name, you should explain the topic, giving a **brief description** of the **block's functionality** in a store.

Next, **add media** (either an image of a GIF) with the rendered block, so that users can better understand how the block works in practice. 

![Media Placeholder](https://user-images.githubusercontent.com/52087100/71204177-42ca4f80-227e-11ea-89e6-e92e65370c69.png)

## Configuration 

In this section, you first must **add the primary instructions** that will allow users to use the block in their store, such as adding the block's app as a dependency in the `manifest.json` and declaring the block itself in a given template.

Next, add the **block's props table**:

| Prop name    | Type            | Description    | Default value                                                                                                                               |
| ------------ | --------------- | --------------------------------------------------------------------------------------------------------------------------------------------- | ---------- | 
| `XXXXX`      | `XXXXXX`       | XXXXXXXX         | `XXXXXX`        |


Remember to also **showcase any necessary disclaimer** related to the block in this section, such as the different behavior it may display during its configuration. 

## Modus Operandi *(not mandatory)*

There are scenarios in which a block can behave differently in a store, according to how it was added to the catalog, for example. It's crucial to go through these **behavioral changes** in this section, allowing users to fully understand the **practical application** of the block in their store.

If you feel compelled to give further details about the block, such as it's **relationship with the VTEX admin**, don't hesitate to use this section. 

## Customization

The first thing that should be present in this section is the sentence below, showing users the recipe pertaining to CSS customization in blocks:

`In order to apply CSS customizations in this and other blocks, follow the instructions given in the recipe on [Using CSS Handles for store customization](https://vtex.io/docs/recipes/style/using-css-handles-for-store-customization).`

Thereafter, you should add a single column table with the available CSS handles for that block:

| CSS Handles |
| ----------- | 
| `XXXXX` | 
| `XXXXX` | 
| `XXXXX` | 
| `XXXXX` | 
| `XXXXX` |


If there are none, add the following sentence instead:

`The component still doesn't have CSS Handles for its specific customization.`

---

Check out some documentation models that are already live: 
- [Breadcrumb](https://github.com/vtex-apps/breadcrumb)
- [Image](https://vtex.io/docs/components/general/vtex.store-components/image)

