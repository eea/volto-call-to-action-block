import BlockDataForm from '@plone/volto/components/manage/Form/BlockDataForm';
import SidebarPortal from '@plone/volto/components/manage/Sidebar/SidebarPortal';
import { defineMessages } from 'react-intl';
import { EditSchema } from './Schema';
import View from './View';

const messages = defineMessages({
  Type: {
    id: 'Call to Action',
    defaultMessage: 'Call to Action',
  },
});

const Edit = (props) => {
  const { data, block, onChangeBlock, selected, intl } = props;
  const schema = EditSchema({ intl });
  return (
    <>
      <View {...props} isEditMode />
      <SidebarPortal selected={selected}>
        <BlockDataForm
          schema={schema}
          title={intl.formatMessage(messages.Type)}
          onChangeField={(id, value) => {
            onChangeBlock(block, {
              ...data,
              [id]: value,
            });
          }}
          formData={data}
          fieldIndex={data.index}
          block={block}
        />
      </SidebarPortal>
    </>
  );
};

export default Edit;
