import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {TextInput} from 'react-native-paper';
//import {useSelector} from 'react-redux';
// import {IThemeState} from 'app/models/reducers/theme';
//import AppStyles from 'app/config/styles';
import styles from './styles';

interface Props {
  text?: string;
  mode?: 'outlined' | 'flat';
  style?: any;
  placeholder?: string;
  label?: string;
  secureTextEntry?: boolean;
  autoCapitalize?: 'none' | 'sentences' | 'words' | 'characters';
  autoCorrect?: boolean;
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad';
  returnKeyType?: 'done' | 'go' | 'next' | 'search' | 'send';
  onChangeText: (text: string) => void;
  onSubmitEditing?: () => void;
  onBlur?: () => void;
  onFocus?: () => void;
  onEndEditing?: () => void;
  left?: React.ReactNode;
  right?: React.ReactNode;
  disabled?: boolean;
  activeUnderlineColor?: string;
  maxLength?: number;
  multiline?: boolean;
  numberOfLines?: number;
  theme?: any;
}

// interface IState {
//   themeReducer: IThemeState;
// }

const TextInputController: React.FC<Props> = props => {
  return (
    <TextInput
      {...props}
      mode={props.mode}
      value={props.text}
      onChangeText={props.onChangeText}
      style={props.style}
      placeholder={props.placeholder}
      label={props.label}
      secureTextEntry={props.secureTextEntry}
      autoCapitalize={props.autoCapitalize}
      autoCorrect={props.autoCorrect}
      keyboardType={props.keyboardType}
      returnKeyType={props.returnKeyType}
      onSubmitEditing={props.onSubmitEditing}
      onBlur={props.onBlur}
      onFocus={props.onFocus}
      onEndEditing={props.onEndEditing}
      left={props.left}
      right={props.right}
      disabled={props.disabled}
      activeUnderlineColor={props.activeUnderlineColor}
      maxLength={props.maxLength}
      multiline={props.multiline}
      numberOfLines={props.numberOfLines}
      theme={props.theme}
    />
  );
};

TextInputController.defaultProps = {
  text: '',
  style: {},
  placeholder: '',
  label: '',
  secureTextEntry: false,
  autoCapitalize: 'none',
  autoCorrect: false,
  keyboardType: 'default',
  returnKeyType: 'done',
  onChangeText: () => {},
  onSubmitEditing: () => {},
  onBlur: () => {},
  onFocus: () => {},
  onEndEditing: () => {},
  left: null,
  right: null,
  disabled: false,
  activeUnderlineColor: '',
  maxLength: 10,
  multiline: false,
  numberOfLines: 1,
  theme:{},
};

export default TextInputController;
