import Edit from './components/Edit';
import View from './components/View';
import circleMenuSVG from '@plone/volto/icons/circle-menu.svg';
import './theme/main.less';

const applyConfig = (config) => {
  config.blocks.blocksConfig.callToActionBlock = {
    availableColors: ['#ebebeb', '#023d6b', '#ddeeff', '#eb5f73', '#b9d25f'],
    id: 'callToActionBlock',
    title: 'Call to Action',
    icon: circleMenuSVG,
    group: 'common',
    view: View,
    edit: Edit,
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
