import React from 'react';
import { Icon } from 'semantic-ui-react';
import cx from 'classnames';

import { UniversalLink } from '@plone/volto/components';
import { flattenToAppURL, isInternalURL } from '@plone/volto/helpers';

const Content = ({ data }) =>
  data.styles?.rightIcon ? (
    <>
      {data.text}
      {data.styles?.icon ? <Icon className={data.styles?.icon} /> : ''}
    </>
  ) : (
    <>
      {data.styles?.icon ? <Icon className={data.styles?.icon} /> : ''}
      {data.text}
    </>
  );

const View = ({ data, isEditMode }) => {
  const [hasLink, setHasLink] = React.useState(false);
  const href = data.href?.[0]?.['@id'] || data.href;
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

  const url = hasLink && isInternalURL(href) ? flattenToAppURL(href) : href;
  const As = hasLink && isInternalURL(url) ? UniversalLink : 'a';
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
        href={hasLink ? url : null}
        to={hasLink ? url : null}
        title={hasLink ? data.text : ''}
        target={data.target}
      >
        <Content data={data} />
      </As>
    </div>
  );
};

export default View;
