import { defineMessages } from 'react-intl';
import { addStyling } from '@plone/volto/helpers';

const messages = defineMessages({
  Type: {
    id: 'Call to Action',
    defaultMessage: 'Call to Action',
  },
  Label: {
    id: 'Label',
    defaultMessage: 'Label',
  },
  Link: {
    id: 'Link',
    defaultMessage: 'Link',
  },
  Icon: {
    id: 'Icon',
    defaultMessage: 'Icon',
  },
  IconRight: {
    id: 'Icon on the right',
    defaultMessage: 'Icon on the right',
  },
  Align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  Theme: {
    id: 'Theme',
    defaultMessage: 'Theme',
  },
  ThemePrimary: {
    id: 'Primary',
    defaultMessage: 'Primary',
  },
  ThemeSecondary: {
    id: 'Secondary',
    defaultMessage: 'Secondary',
  },
  ThemeTertiary: {
    id: 'Tertiary',
    defaultMessage: 'Tertiary',
  },
  ThemeLink: {
    id: 'Link',
    defaultMessage: 'Link',
  },
  Inverted: {
    id: 'Inverted',
    defaultMessage: 'Inverted',
  },
  DefaultLabel: {
    id: 'Click here',
    defaultMessage: 'Click here',
  },
  Target: {
    id: 'Target',
    defaultMessage: 'Target',
  },
  TargetEmpty: {
    id: 'Open in this window / frame',
    defaultMessage: 'Open in this window / frame',
  },
  TargetBlank: {
    id: 'Open in new window',
    defaultMessage: 'Open in new window',
  },
  TargetParent: {
    id: 'Open in parent window / frame',
    defineMessages: 'Open in parent window / frame',
  },
  TargetTop: {
    id: 'Open in top frame (replaces all frames)',
    defaultMessage: 'Open in top frame (replaces all frames)',
  },
});

export const EditSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.Type),
  block: 'callToAction',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['text', 'href', 'target'],
    },
  ],

  properties: {
    text: {
      title: intl.formatMessage(messages.Label),
      default: intl.formatMessage(messages.DefaultLabel),
    },
    href: {
      title: intl.formatMessage(messages.Link),
      widget: 'object_browser',
      mode: 'link',
      selectedItemAttrs: ['Title', 'Description', 'hasPreviewImage'],
      allowExternals: true,
    },
    target: {
      title: intl.formatMessage(messages.Target),
      choices: [
        ['_self', intl.formatMessage(messages.TargetEmpty)],
        ['_blank', intl.formatMessage(messages.TargetBlank)],
        ['_parent', intl.formatMessage(messages.TargetParent)],
        ['_top', intl.formatMessage(messages.TargetTop)],
      ],
    },
  },
  required: [],
});

export const StylingSchema = (props) => {
  const { intl } = props;
  const schema = addStyling(props);
  schema.properties.styles.schema = {
    title: intl.formatMessage(messages.Type),
    block: 'callToAction',
    fieldsets: [
      {
        id: 'default',
        title: 'Default',
        fields: ['align', 'theme', 'inverted', 'icon', 'rightIcon'],
      },
    ],
    properties: {
      align: {
        title: intl.formatMessage(messages.Align),
        widget: 'align',
      },
      theme: {
        title: intl.formatMessage(messages.Theme),
        widget: 'color_picker',
        colors: [
          { name: 'primary', label: intl.formatMessage(messages.ThemePrimary) },
          {
            name: 'secondary',
            label: intl.formatMessage(messages.ThemeSecondary),
          },
          {
            name: 'tertiary',
            label: intl.formatMessage(messages.ThemeTertiary),
          },
          {
            name: 'link',
            label: intl.formatMessage(messages.ThemeLink),
          },
        ],
      },
      inverted: {
        title: intl.formatMessage(messages.Inverted),
        type: 'boolean',
      },
      icon: {
        title: intl.formatMessage(messages.Icon),
      },
      rightIcon: {
        title: intl.formatMessage(messages.IconRight),
        type: 'boolean',
      },
    },
    required: [],
  };
  return schema;
};
