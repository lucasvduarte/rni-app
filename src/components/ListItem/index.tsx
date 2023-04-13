import {
  ListItemAccordionProps,
  ListItemTitleProps,
  ListItemSubtitleProps,
  ListItemContentProps,
} from "@rneui/base";
import { ListItemStyled } from "./style";
import { ListItemProps } from "./type";

export const ListItem = (props: ListItemProps) => {
  const { children } = props;
  return <ListItemStyled {...props}>{children}</ListItemStyled>;
};

export const ListItemAccordion = (props: ListItemAccordionProps) => {
  const { children } = props;
  return (
    <ListItemStyled.Accordion {...props}>{children}</ListItemStyled.Accordion>
  );
};

export const ListItemTitle = (props: ListItemTitleProps) => {
  const { children } = props;
  return <ListItemStyled.Title {...props}>{children}</ListItemStyled.Title>;
};

export const ListItemSubtitle = (props: ListItemSubtitleProps) => {
  const { children } = props;
  return (
    <ListItemStyled.Subtitle {...props}>{children}</ListItemStyled.Subtitle>
  );
};

export const ListItemContent = (props: ListItemContentProps) => {
  const { children } = props;
  return <ListItemStyled.Content {...props}>{children}</ListItemStyled.Content>;
};
