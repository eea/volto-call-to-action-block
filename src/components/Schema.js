import { defineMessages } from 'react-intl';
import { addStyling } from '@plone/volto/helpers';
import config from '@plone/volto/registry';

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
  Download: {
    id: 'Download',
    defaultMessage: 'Download file',
  },
  DownloadDescription: {
    id: 'DownloadDescription',
    defaultMessage:
      'If enabled, the file linked will be downloaded instead of opened',
  },
});

export const EditSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.Type),
  block: 'callToAction',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['text', 'href', 'download', 'target'],
    },
  ],

  properties: {
    text: {
      title: intl.formatMessage(messages.Label),
      default: intl.formatMessage(messages.DefaultLabel),
    },
    href: {
      title: intl.formatMessage(messages.Link),
      widget: 'call_to_action',
    },
    download: {
      title: intl.formatMessage(messages.Download),
      description: intl.formatMessage(messages.DownloadDescription),
      type: 'boolean',
      default: false,
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
        widget: 'theme_picker',
        colors: [
          ...(config.settings && config.settings.themeColors
            ? config.settings.themeColors.map(({ value, title }) => ({
                name: value,
                label: title,
              }))
            : []),
          //and add extra ones here
        ],
      },
      inverted: {
        title: intl.formatMessage(messages.Inverted),
        type: 'boolean',
      },
      icon: {
        title: intl.formatMessage(messages.Icon),
        description: (
          <>
            Ex. ri-home-line. See{' '}
            <a target="_blank" rel="noopener" href="https://remixicon.com/">
              Remix Icon set
            </a>
          </>
        ),
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
