import React from 'react';
import { Icon } from 'semantic-ui-react';
import cx from 'classnames';
import { Link } from 'react-router-dom';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';

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

  const As = hasLink && isInternalURL(data.href[0]['@id']) ? Link : 'a';

  return (
    <div className={cx('block call-to-action align', data.styles?.align)}>
      <As
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
        to={hasLink ? flattenToAppURL(data.href[0]['@id']) : null}
        title={hasLink ? data.href[0]['title'] : ''}
        target={data.target}
      >
        {data.styles?.icon && <Icon className={data.styles?.icon} />}
        {data.text}
      </As>
    </div>
  );
};

export default View;
