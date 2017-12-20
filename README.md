# adapt-flippableCard  
This component displays a set of cards that can be flipped to show the backface. The front face of the card holds an image, the backface can include a title and body text.

To improve the experience on mobile devices, course creators can specify the number of columns used to display the cards for each individual device size. Also, overlapping Text is displayed in the Notify plugin.

![FlippableCard](https://github.com/LearnChamp/sharedAssets/blob/master/assets/adapt-flippableCard.gif?raw=true)    

## Installation
To install the component with the [Adapt CLI](https://github.com/adaptlearning/adapt-cli), run the following from the command line:  
`adapt install adapt-flippableCard`

Alternatively, this component can also be installed by adding the following line of code to the *adapt.json* file:  
`"adapt-flippableCard": "*"`  
Then running the command:  
`adapt install`  
(This second method will reinstall all plug-ins listed in *adapt.json*.)  

Use the [Plug-in Manager](https://github.com/adaptlearning/adapt_authoring/wiki/Plugin-Manager) to use this component in the Adapt authoring tool.

## Settings Overview
A properly formatted JSON is available in *example.json*

### Specify the number of columns:
With this settings you can define the column size for each device size.  
`_columns._large`  
`_columns._medium`  
`_columns._small`  


### Define the cards aspect ratio:
The size of the cards is defined by the aspect ratio of the images. Therefore you must specify the cards width and height. This makes sure that all card have the same size and that the content on the backface is handled in a save and cross brower way on all devices. 
`_width`
`_height`

### Show overlapping content:
Overlapping text on the back face is hidden. If overlapping text is detected, the whole text is displayed in the notify popup extension. The button text that triggers this popup can be defined with `_items.moreButton`.


## Limitations
**Caution!**
This plugin extends from itemsModel. This model will be removed from Version 3.0.0 of the Framework. **Therefore this Version of the plugin is not compatible with Versions 3.0.0 of the Framework!** If you would like to use the plugin, you will need to include the itemsModel in the plugin directly.


----------------------------
**Author / maintainer:** [LearnChamp](https://github.com/LearnChamp)  
**Accessibility support:** WAI AA  
**Cross-platform coverage:** Chrome, Chrome for Android, Firefox (ESR + latest version), Edge 12, IE 11, Safari iOS 9+10, Safari OS X 9+10, Opera    
