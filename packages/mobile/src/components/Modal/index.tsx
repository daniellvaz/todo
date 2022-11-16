import React, { RefObject } from "react";
import { Text, TextInput, TouchableOpacity, View } from "react-native";
import { Modalize, ModalizeProps } from "react-native-modalize";

import { style } from "./style";

type Props = Modalize & {
  children: React.ReactNode
}

const Modal = React.forwardRef<RefObject<ModalizeProps>, Props>((props, ref) => (
  <Modalize 
    ref={ref}
    modalStyle={style.container}
    modalHeight={300}
  >
    { props.children }
  </Modalize>
));

export default Modal;