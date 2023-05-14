import styled from "styled-components/native";
import { ModalProps } from "./type";
import { Dialog } from "@rneui/themed";

export const DialogStyled = styled(Dialog).attrs<ModalProps>((props) => ({
  overlayStyle: {
    backgroundColor: props.bg,
    borderRadius: 10,
  },
}))<ModalProps>``;
