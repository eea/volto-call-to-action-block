import React from 'react';
import { Button } from 'semantic-ui-react';
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

  const link = hasLink ? flattenToAppURL(data.href[0]['@id']) : null;
  const title = hasLink ? data.href[0]['title'] : '';

  return (
    <div className={cx('block button align', data?.styles?.align)}>
      {data?.styles?.theme === 'link' ? (
        <a href={link} title={title}>
          {data.title}
        </a>
      ) : (
        <Button
          inverted={data?.styles?.inverted}
          className={cx(data?.styles?.theme, data?.styles?.align)}
          as="a"
          href={link}
          title={title}
        >
          {data.title}
        </Button>
      )}
    </div>
  );
};

export default View;
