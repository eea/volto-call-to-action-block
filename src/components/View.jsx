import React from 'react';
import { Icon } from 'semantic-ui-react';
import cx from 'classnames';
import { flattenToAppURL } from '@plone/volto/helpers';

const View = ({ data, isEditMode }) => {
  const [hasLink, setHasLink] = React.useState(false);

  React.useEffect(() => {
    if (isEditMode) {
      setHasLink(false);
    } else {
      if (data.href) {
        if (data.href && data.href.length > 0) {
          setHasLink(true);
        }
        if (data.href.length === 0) {
          setHasLink(false);
        }
      }
    }
  }, [isEditMode, data.href]);

  return (
    <div className={cx('block button align', data.styles?.align)}>
      <a
        className={cx(
          data.styles?.theme !== 'link' ? 'ui button' : '',
          data.styles?.inverted ? 'inverted' : '',
          data.styles?.icon
            ? data.styles?.rightIcon
              ? 'icon right labeled'
              : 'icon left labeled'
            : '',
          data.styles?.theme,
        )}
        href={hasLink ? flattenToAppURL(data.href[0]['@id']) : null}
        title={hasLink ? data.href[0]['title'] : ''}
        target={data.target}
      >
        {data.styles?.icon && <Icon className={data.styles?.icon} />}
        {data.text}
      </a>
    </div>
  );
};

export default View;
