import callToActionSVG from '@plone/volto/icons/circle-right.svg';
import Edit from './components/Edit';
import View from './components/View';
import Widget from './components/Widget';
import { StylingSchema, EditSchema } from './components/Schema';

import './theme/main.less';

const applyConfig = (config) => {
  // Custom Call to Action URL Widget
  config.widgets.widget.call_to_action = Widget;

  // Call to Action Block
  config.blocks.blocksConfig.callToActionBlock = {
    id: 'callToActionBlock',
    title: 'Call to Action',
    icon: callToActionSVG,
    group: 'common',
    view: View,
    edit: Edit,
    editSchema: EditSchema,
    schemaEnhancer: StylingSchema,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    security: {
      addPermission: [],
      view: [],
    },
  };

  return config;
};

export default applyConfig;
