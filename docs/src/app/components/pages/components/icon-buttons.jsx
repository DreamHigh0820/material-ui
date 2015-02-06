var React = require('react');
var mui = require('mui');
var IconButton = mui.IconButton;
var NavigationMenu = mui.Icons.NavigationMenu;
var ComponentDoc = require('../../component-doc.jsx');
var ActionGrade = require('../../svg-icons/action-grade.jsx');
var ActionHome = require('../../svg-icons/action-home.jsx');
var FontIcon = mui.FontIcon;

var IconButtonsPage = React.createClass({

  render: function() {

    var code =
        '//Method 1: mui-icon-github is defined in a style sheet.\n' +
        '<IconButton iconClassName="mui-icon-github" tooltip="GitHub"/>\n\n' +
        '//Method 2: ActionGrade is a component created using mui.SvgIcon.\n' +
        '<IconButton tooltip="Star" touch={true}>\n' +
        '  <ActionGrade/>\n' +
        '</IconButton>\n\n' +
        '//Method 3: Manually creating a mui.FontIcon component within ' +
        'IconButton\n' +
        '<IconButton tooltip="Sort" disabled={true}>\n' +
        '  <FontIcon className="mui-icon-sort"/>\n' +
        '</IconButton>';

    var desc =  <p>
                  This component generates a button element and all props. 
                  Also, focus styles will happen on tab but not on click. 
                  There are three ways to add an icon:
                  <br/>
                  <ol>
                  <li>For stylesheets: Set the prop "iconClassName" to the 
                  classname for you icon.
                  </li><li>
                  For svg icons: Insert the svg component as a child of icon
                  buttons. This is the method we are using. See font-icons to
                  learn how to create a svg component using mui.SvgIcon.
                  </li><li>
                  Alternative: You can also insert a FontIcon component 
                  as a child of IconButton. This is similiar to how the 
                  iconClassName prop from method 1 is handled.
                  </li>
                  </ol>
                </p>;

    var componentInfo = [
      {
        name: 'Props',
        infoArray: [
          {
            name: 'iconClassName',
            type: 'string',
            header: 'optional',
            desc: 'If you are using a stylesheet for your icons, enter the ' + 
                  'class name for the icon to be used here.'
          },
          {
            name: 'tooltip',
            type: 'string',
            header: 'optional',
            desc: 'The tooltip text to show.'
          },
          {
            name: 'touch',
            type: 'bool',
            header: 'default: false',
            desc: 'If true, this component will render the touch sized tooltip.'
          }
        ]
      }
    ];

    return (
      <ComponentDoc
        name="Icon Buttons"
        className="icon-button-description"
        code={code}
        desc={desc}
        componentInfo={componentInfo}>

        <IconButton iconClassName="mui-icon-github" tooltip="GitHub"/>

        <IconButton tooltip="Star" touch={true}>
          <ActionGrade/>
        </IconButton>

        <IconButton tooltip="Sort" disabled={true}>
          <FontIcon className="mui-icon-sort"/>
        </IconButton>

      </ComponentDoc>
    );
    
  }

});

module.exports = IconButtonsPage;