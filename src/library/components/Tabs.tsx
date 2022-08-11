// TODO: figure out if we want to add aria-label or aria-labelledby on the tablist

import {
  createRef,
  KeyboardEvent,
  ReactElement,
  RefObject,
  useEffect,
  useState,
} from "react";
import Tab from "./Tab";

type Props = {
  children: ReactElement[] | ReactElement;
};

let tabsId = 0;

const Tabs = ({ children }: Props): JSX.Element => {
  const [selectedTab, setSelectedTab] = useState(0);
  const [tabPanelId, setTabPanelId] = useState("");
  const [tabPanels, setTabPanels] = useState<ReactElement[]>([]);
  const [tabRefs, setTabRefs] = useState<RefObject<HTMLButtonElement>[]>([]);

  const selectTab = (index: number) => {
    const tabRef = tabRefs[index];
    setSelectedTab(index);
    tabRef.current?.focus();
  };

  const keyManager = (e: KeyboardEvent<HTMLDivElement>) => {
    e.preventDefault();
    let nextTab = 0;
    switch (e.key) {
      case "ArrowLeft":
        if (selectedTab === 0) {
          nextTab = tabPanels.length - 1;
        } else {
          nextTab = selectedTab - 1;
        }
        selectTab(nextTab);
        break;

      case "ArrowRight":
        if (selectedTab === tabPanels.length - 1) {
          nextTab = 0;
        } else {
          nextTab = selectedTab + 1;
        }
        selectTab(nextTab);
        break;

      case "Home":
        selectTab(0);
        break;

      case "End":
        selectTab(tabPanels.length - 1);
        break;

      default:
        break;
    }
  };

  useEffect(() => {
    const idNum = ++tabsId;
    setTabPanelId("tabPanel" + idNum);
  }, []);

  useEffect(() => {
    if (Array.isArray(children)) {
      setTabPanels(children);
    } else {
      setTabPanels([children]);
    }
    let refs: RefObject<HTMLButtonElement>[] = [];
    for (let i = 0; i < tabPanels.length; i++) {
      refs.push(createRef());
    }
    setTabRefs(refs);
  }, [children, tabPanels.length]);

  return (
    <div className="bsds-tabs">
      <div className="bsds-tab-list" role="tablist" onKeyDown={keyManager}>
        {tabPanels.map((tabPanel, index) => (
          <Tab
            key={`${tabPanelId + index}Tab`}
            tabName={tabPanel.props.tabName}
            index={index}
            setSelectedTab={setSelectedTab}
            isActive={index === selectedTab}
            tabPanelId={tabPanelId + index}
            tabRef={tabRefs[index]}
          />
        ))}
      </div>
      <div className="bsds-tab-panels">
        {tabPanels.map((tabPanel, index) => (
          <div
            key={tabPanelId + index}
            id={tabPanelId + index}
            className="bsds-tab-panel"
            role="tabpanel"
            aria-labelledby={`${tabPanelId + index}Tab`}
            tabIndex={0}
            hidden={index !== selectedTab}
          >
            {tabPanel}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Tabs;
