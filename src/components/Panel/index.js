import { Icon } from "../Shared";
import { PanelHeader, PanelContent, PanelContainer } from "./styledItems";

const Panel = (props) => {
  return (
    <PanelContainer>
      <PanelHeader>
        <Icon
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6"
          fill="none"
          viewBox="0 0 24 24"
          stroke="#fff"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d={props.icon}
          />
        </Icon>
        <span>{props.title}</span>
      </PanelHeader>
      <PanelContent>{props.children}</PanelContent>
    </PanelContainer>
  );
};

export default Panel;
