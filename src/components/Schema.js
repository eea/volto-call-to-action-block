import { defineMessages } from 'react-intl';

const messages = defineMessages({
  Type: {
    id: 'Call to Action',
    defaultMessage: 'Call to Action',
  },
  Title: {
    id: 'Title',
    defaultMessage: 'Title',
  },
  Link: {
    id: 'Link',
    defaultMessage: 'Link',
  },
  Align: {
    id: 'Alignment',
    defaultMessage: 'Alignment',
  },
  Theme: {
    id: 'Theme',
    defaultMessage: 'Theme',
  },
  Inverted: {
    id: 'Inverted',
    defaultMessage: 'Inverted',
  },
  DefaultTitle: {
    id: 'Click here',
    defaultMessage: 'Click here',
  },
});

export const EditSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.Type),
  block: 'callToAction',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['title', 'href'],
    },
  ],

  properties: {
    title: {
      title: intl.formatMessage(messages.Title),
      default: intl.formatMessage(messages.DefaultTitle),
    },
    href: {
      title: intl.formatMessage(messages.Link),
      widget: 'object_browser',
      mode: 'link',
      selectedItemAttrs: ['Title', 'Description', 'hasPreviewImage'],
      allowExternals: true,
    },
  },
  required: [],
});

export const StylingSchema = ({ intl }) => ({
  title: intl.formatMessage(messages.Type),
  block: 'callToAction',
  fieldsets: [
    {
      id: 'default',
      title: 'Default',
      fields: ['align', 'theme', 'inverted'],
    },
  ],
  properties: {
    align: {
      title: intl.formatMessage(messages.Align),
      widget: 'align',
    },
    theme: {
      title: intl.formatMessage(messages.Theme),
      choices: [
        ['primary', 'Primary'],
        ['secondary', 'Secondary'],
        ['link', 'Link'],
      ],
      default: 'primary',
    },
    inverted: {
      title: intl.formatMessage(messages.Inverted),
      type: 'boolean',
    },
  },
  required: [],
});
