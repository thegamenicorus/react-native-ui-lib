// TODO: depreacte value allowing passing an object, allow only string or number
// TODO: extract picker labels from children in order to obtain the
// correct label to render (similar to what we do in NativePicker)
// TODO: simplify this component, stop inherit from TextInput

import React from 'react';
import { StyleSheet } from 'react-native';
import PropTypes from 'prop-types';
import _ from 'lodash';
import NativePicker from './NativePicker';
import { Colors } from '../../style';
import { TextInput } from '../inputs';
import PickerModal from './PickerModal';
import PickerItem from './PickerItem';
import * as PickerPresenter from './PickerPresenter';
import Button from '../../components/button';
import Text from '../../components/text';
import TouchableOpacity from '../../components/touchableOpacity';
import View from '../../components/view';
import Image from '../../components/image';
import Modal from '../../screensComponents/modal';
import { Constants } from '../../helpers';

const PICKER_MODES = {
  SINGLE: 'SINGLE',
  MULTI: 'MULTI',
};

const ItemType = PropTypes.shape({
  value: PropTypes.any,
  label: PropTypes.string,
});

/**
 * @description: Picker Component, support single or multiple selection, blurModel and floatingPlaceholder
 * @extends: TextInput
 * @extendslink: docs/TextInput
 * @gif: https://media.giphy.com/media/3o751SiuZZiByET2lq/giphy.gif, https://media.giphy.com/media/TgMQnyw5grJIDohzvx/giphy.gif, https://media.giphy.com/media/5hsdmVptBRskZKn787/giphy.gif
 * @example: https://github.com/wix/react-native-ui-lib/blob/master/demo/src/screens/componentScreens/FormScreen.js
 */
class Picker extends TextInput {
  static displayName = 'Picker';
  static modes = PICKER_MODES;
  static propTypes = {
    ...TextInput.propTypes,
    /**
     * Picker current value in the shape of {value: ..., label: ...}, for custom shape use 'getItemValue' prop
     */
    value: PropTypes.oneOfType([
      ItemType,
      PropTypes.arrayOf(ItemType),
      PropTypes.object,
      PropTypes.string,
      PropTypes.number,
    ]),
    /**
     * Callback for when picker value change
     */
    onChange: PropTypes.func,
    /**
     * SINGLE mode or MULTI mode
     */
    mode: PropTypes.oneOf(Object.keys(PICKER_MODES)),
    /**
     * Adds blur effect to picker modal (only iOS)
     */
    enableModalBlur: PropTypes.bool,
    /**
     * Render custom picker
     */
    renderPicker: PropTypes.func,
    /**
     * Add onPress callback for when pressing the picker
     */
    onPress: PropTypes.func,
    /**
     * A function that extract the unique value out of the value prop in case value has a custom structure.
     */
    getItemValue: PropTypes.func,
    /**
     * A function that returns the label to show for the selected Picker value
     */
    getLabel: PropTypes.func,
    /**
     * The picker modal top bar props
     */
    topBarProps: PropTypes.shape(Modal.TopBar.propTypes),
    /**
     * Show search input to filter picker items by label
     */
    showSearch: PropTypes.bool,
    /**
     * Determine if need to hide picker after selecting value or not
     */
    hidePickerWhenSelect: PropTypes.bool,
    /**
     * Style object for the search input (only when passing showSearch)
     */
    searchStyle: PropTypes.shape({
      color: PropTypes.string,
      placeholderTextColor: PropTypes.string,
      selectionColor: PropTypes.string,
    }),
    /**
     * Placeholder text for the search input (only when passing showSearch)
     */
    searchPlaceholder: PropTypes.string,
    /**
     * Allow to use the native picker solution (different for iOS and Android)
     */
    useNativePicker: PropTypes.bool,
    /**
     * Callback for rendering a custom native picker inside the dialog (relevant to native picker only)
     */
    renderNativePicker: PropTypes.func,
    /**
     * Icon asset source for showing on the right side, appropriate for dropdown icon and such
     */
    rightIconSource: PropTypes.oneOfType([PropTypes.object, PropTypes.number]),
  };

  static defaultProps = {
    ...TextInput.defaultProps,
    mode: PICKER_MODES.SINGLE,
    // enableModalBlur: true,
    expandable: true,
    hidePickerWhenSelect: true,
    text70: true,
    // floatingPlaceholder: true,
    enableErrors: false,
  };

  constructor(props) {
    super(props);

    this.onDoneSelecting = this.onDoneSelecting.bind(this);
    this.toggleItemSelection = this.toggleItemSelection.bind(this);
    this.appendPropsToChildren = this.appendPropsToChildren.bind(this);
    this.cancelSelect = this.cancelSelect.bind(this);
    this.handlePickerOnPress = this.handlePickerOnPress.bind(this);
    this.close = this.close.bind(this);

    this.state = {
      ...this.state,
      showModal: false,
      selectedItemPosition: this.props.selectedItemPosition || 0,
    };

    if (props.mode === Picker.modes.SINGLE && Array.isArray(props.value)) {
      console.warn('Picker in SINGLE mode cannot accept an array for value');
    }

    if (props.mode === Picker.modes.MULTI && !Array.isArray(props.value)) {
      console.warn('Picker in MULTI mode must accept an array for value');
    }

    if (props.useNativePicker && _.isPlainObject(props.value)) {
      console.warn(
        'UILib Picker: dont use object as value for native picker, use either string or a number'
      );
    }
  }

  // componentWillReceiveProps(nexProps) {
  //   this.setState({
  //     value: nexProps.value,
  //   });
  // }

  componentDidUpdate(prevProps, prevState) {
    const isValueUpdated = prevProps.value !== this.props.value;
    const isSelectedItemPositionUpdated =
      prevProps.selectedItemPosition !== this.props.selectedItemPosition;
    const shouldUpdate = isValueUpdated || isSelectedItemPositionUpdated;
    let value = this.props.value;
    let selectedItemPosition = this.props.selectedItemPosition;
    if (shouldUpdate)
      this.setState({
        value,
        selectedItemPosition,
      });
  }

  toggleItemSelection(item) {
    const { value } = this.state;
    const newValue = _.xorBy(value, [item], 'value');
    this.setState({
      value: newValue,
    });
  }

  onDoneSelecting(item) {
    // this.setState({ searchValue: '' }); // clean search when done selecting
    this.onChangeText(item);
    if (this.props.hidePickerWhenSelect) {
      this.toggleExpandableModal(false);
    }
    _.invoke(this.props, 'onChange', item);
  }

  onSearchChange = (searchValue) => {
    this.setState({
      searchValue,
    });
  };

  scrollToSelected = () => {
    if (this.pickerModal) {
      this.pickerModal.scrollToSelected();
    }
  };

  clearSearch = () => {
    this.setState({ searchValue: '' });
    if (this.pickerModal) {
      this.pickerModal.clearSearch();
    }
  };

  cancelSelect() {
    this.setState({
      value: this.props.value,
      searchValue: '',
    });
    this.toggleExpandableModal(false);
  }

  close() {
    this.setState({ searchValue: '' });
    this.toggleExpandableModal(false);
  }

  onSelectedItemLayout = ({
    nativeEvent: {
      layout: { y },
    },
  }) => {
    this.setState({ selectedItemPosition: y });
  };

  appendPropsToChildren() {
    const { children, mode, getItemValue, showSearch } = this.props;
    const { value, searchValue } = this.state;
    const childrenWithProps = React.Children.map(children, (child) => {
      const childValue = PickerPresenter.getItemValue({
        getItemValue,
        ...child.props,
      });
      const childLabel = PickerPresenter.getItemLabel({
        ...child.props,
        getLabel: child.props.getItemLabel,
      });
      if (
        !showSearch ||
        _.isEmpty(searchValue) ||
        _.includes(_.lowerCase(childLabel), _.lowerCase(searchValue))
      ) {
        const selectedValue = PickerPresenter.getItemValue({
          value,
          getItemValue,
        });
        return React.cloneElement(child, {
          isSelected: PickerPresenter.isItemSelected(childValue, selectedValue),
          onPress:
            mode === Picker.modes.MULTI
              ? this.toggleItemSelection
              : this.onDoneSelecting,
          getItemValue: child.props.getItemValue || getItemValue,
          onSelectedLayout: this.props.customSelectedItemPosition
            ? null
            : this.onSelectedItemLayout,
        });
      }
    });

    return childrenWithProps;
  }

  getLabel() {
    const { getLabel } = this.props;
    const { value } = this.state;
    if (_.isArray(value)) {
      return _.chain(value).map('label').join(', ').value();
    }
    return _.isFunction(getLabel) ? getLabel(value) : _.get(value, 'label');
  }

  handlePickerOnPress() {
    this.toggleExpandableModal(true);
    _.invoke(this.props, 'onPress');
  }

  renderExpandableInput() {
    const { value } = this.state;
    const {
      placeholder,
      rightIconSource,
      style,
      placeholderStyle,
    } = this.props;
    const typography = this.getTypography();
    const color = this.extractColorValue() || Colors.dark10;
    const label = this.getLabel();
    const shouldShowPlaceholder = _.isEmpty(value);

    return (
      <TouchableOpacity
        style={styles.pickerInputWrapper}
        activeOpacity={1}
        onPress={this.handlePickerOnPress}
      >
        <Text
          style={[
            this.styles.input,
            typography,
            { color },
            style,
            { height: Constants.isAndroid ? typography.lineHeight : undefined },
            shouldShowPlaceholder &&
              this.styles.placeholder &&
              placeholderStyle,
          ]}
          numberOfLines={3}
        >
          {shouldShowPlaceholder ? placeholder : label}
        </Text>
        {rightIconSource && <Image source={rightIconSource} />}
      </TouchableOpacity>
    );
  }

  renderExpandableModal() {
    const {
      mode,
      enableModalBlur,
      topBarProps,
      showSearch,
      searchStyle,
      searchPlaceholder,
    } = this.getThemeProps();
    const { showExpandableModal, selectedItemPosition } = this.state;
    return (
      <PickerModal
        ref={(pickerModal) => (this.pickerModal = pickerModal)}
        visible={showExpandableModal}
        scrollPosition={selectedItemPosition}
        customSelectedItemPosition={this.props.customSelectedItemPosition}
        enableModalBlur={enableModalBlur}
        topBarProps={{
          onCancel: this.cancelSelect,
          onDone:
            mode === Picker.modes.MULTI
              ? () => this.onDoneSelecting(this.state.value)
              : undefined,
          ...topBarProps,
        }}
        showSearch={showSearch}
        searchStyle={searchStyle}
        searchPlaceholder={searchPlaceholder}
        onSearchChange={this.onSearchChange}
        enableContentSizeChange={
          this.props.hidePickerWhenSelect || this.props.enableContentSizeChange
        }
      >
        {this.appendPropsToChildren(this.props.children)}
      </PickerModal>
    );
  }

  render() {
    const { useNativePicker, renderPicker, testID } = this.props;

    if (useNativePicker) return <NativePicker {...this.props} />;

    if (_.isFunction(renderPicker)) {
      const { value } = this.state;
      return (
        <View left>
          <Button link onPress={this.handlePickerOnPress} testID={testID}>
            {renderPicker(value)}
          </Button>
          {this.renderExpandableModal()}
        </View>
      );
    }

    return super.render();
  }
}

const styles = StyleSheet.create({
  pickerInputWrapper: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
  },
});

Picker.Item = PickerItem;
export default Picker;
