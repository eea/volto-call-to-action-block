import callToActionSVG from '@plone/volto/icons/circle-right.svg';
import Edit from './components/Edit';
import View from './components/View';
import { StylingSchema, EditSchema } from './components/Schema';

import './theme/main.less';

const applyConfig = (config) => {
  config.blocks.blocksConfig.callToActionBlock = {
    id: 'callToActionBlock',
    title: 'Call to Action',
    icon: callToActionSVG,
    group: 'common',
    view: View,
    edit: Edit,
    editSchema: EditSchema,
    stylesSchema: StylingSchema,
    restricted: false,
    mostUsed: false,
    sidebarTab: 1,
    enableStyling: true,
    security: {
      addPermission: [],
      view: [],
    },
  };
  return config;
};

export default applyConfig;
