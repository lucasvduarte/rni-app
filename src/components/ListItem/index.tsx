import {
  ListItemTitleProps,
  ListItemSubtitleProps,
  ListItemContentProps,
} from "@rneui/base";
import { ListItemStyled } from "./style";
import { ListItemAccordionProps, ListItemProps } from "./type";
import { Text } from "../Text";
import { useState } from "react";
import { Icon } from "../Icon";

export const ListItem = (props: ListItemProps) => {
  const { children } = props;
  return <ListItemStyled {...props}>{children}</ListItemStyled>;
};

export const ListItemAccordion = (props: ListItemAccordionProps) => {
  const { children, title, fontSize, color = "blackSuvaGrey" } = props;
  const [expanded, setExpanded] = useState(false);
  return (
    <ListItemStyled.Accordion
      content={
        <ListItemContent>
          <ListItemTitle>
            <Text title={title} color={color} fontSize={fontSize} />
          </ListItemTitle>
        </ListItemContent>
      }
      isExpanded={expanded}
      onPress={() => setExpanded(!expanded)}
      containerStyle={{
        backgroundColor: "transparent",
      }}
      icon={
        <Icon
          name="chevron-down"
          type="material-community"
          size={28}
          iconColor={color}
          mb="sm"
        />
      }
    >
      {children}
    </ListItemStyled.Accordion>
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

export const ListDescription = (props: ListItemAccordionProps) => {
  const { title, description } = props;
  return (
    <ListItem px="none">
      <ListItemContent>
        <ListItemTitle>
          <Text
            title={title}
            color="blackSuvaGrey"
            fontSize="3xl"
            fontWeight="bold"
          />
        </ListItemTitle>
        <ListItemSubtitle>
          <Text title={description} color="blackSuvaGrey" fontSize="xl" />
        </ListItemSubtitle>
      </ListItemContent>
    </ListItem>
  );
};
