import React from 'react';
import { render, fireEvent, cleanup } from '@testing-library/react';
import { CallToActionWidget } from './Widget';
import { Provider } from 'react-intl-redux';
import configureStore from 'redux-mock-store';
import { URLUtils } from '@plone/volto/helpers';

const mockStore = configureStore();
const store = mockStore({
  intl: {
    locale: 'en',
    messages: {},
  },
});

const mockOpenObjectBrowser = jest.fn();
const mockOnChange = jest.fn();

const isUrlSpy = jest.spyOn(URLUtils, 'isUrl');

const props = {
  id: '1',
  title: 'Test Widget',
  onChange: mockOnChange,
  openObjectBrowser: mockOpenObjectBrowser,
};

describe('CallToActionWidget', () => {
  afterEach(cleanup);

  it('renders without crashing', () => {
    const { container } = render(
      <Provider store={store}>
        <CallToActionWidget {...props} />
      </Provider>,
    );
    expect(container).toBeTruthy();
  });

  it('calls onChange with the correct value and triggers click and blur on input', () => {
    const { getByRole } = render(
      <Provider store={store}>
        <CallToActionWidget {...props} />
      </Provider>,
    );
    const input = getByRole('textbox');
    fireEvent.change(input, { target: { value: 'test-value' } });
    expect(mockOnChange).toHaveBeenCalledWith(props.id, 'http://test-value');
    isUrlSpy.mockReturnValue(true);
    fireEvent.change(input, { target: { value: 'test-value-2' } });

    fireEvent.click(input, { value: 'test-value' });
    fireEvent.blur(input, { value: 'test-value' });
    fireEvent.blur(input, { target: { value: '' } });
  });

  it('calls openObjectBrowser when "openUrlBrowser" button is clicked', () => {
    const { getByLabelText } = render(
      <Provider store={store}>
        <CallToActionWidget {...props} />
      </Provider>,
    );
    const openUrlBrowserButton = getByLabelText('openUrlBrowser');
    fireEvent.click(openUrlBrowserButton);
    expect(mockOpenObjectBrowser).toHaveBeenCalled();
  });

  it('clears input when "clearUrlBrowser" button is clicked', () => {
    const { getByLabelText, getByRole } = render(
      <Provider store={store}>
        <CallToActionWidget {...props} value={'initial value'} />
      </Provider>,
    );
    const clearUrlBrowserButton = getByLabelText('clearUrlBrowser');
    fireEvent.click(clearUrlBrowserButton);
    expect(mockOnChange).toHaveBeenCalledWith(props.id, undefined);
    const input = getByRole('textbox');
    expect(input.value).toBe('');
  });
});
