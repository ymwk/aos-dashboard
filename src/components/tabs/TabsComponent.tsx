import React, { useState } from 'react';
import classes from './tab.module.scss';

interface TabsProps {
  children?: any;
  onTabChange?: (tabLabel: string) => void;
}

const Tabs: React.FC<TabsProps> = (props) => {
  const { children, onTabChange } = props;
  const [activeTab, setActiveTab] = useState(children[0].props.label);

  const handleTabClick = (tabLabel: string) => {
    setActiveTab(tabLabel);
    if (onTabChange) {
      onTabChange(tabLabel);
    }
  };

  return (
    <>
      {/*tabButton*/}
      <div className={classes.tabButtonWrap}>
        {children &&
          React.Children.toArray(children).map((child) => (
            <button
              className={`${classes.tabButton} ${
                activeTab === (child as React.ReactElement).props.label ? classes.active : ''
              }`}
              key={(child as React.ReactElement).props.label}
              onClick={() => handleTabClick((child as React.ReactElement).props.label)}
              disabled={(child as React.ReactElement).props.disabled}
            >
              {(child as React.ReactElement).props.label}
            </button>
          ))}
      </div>

      {/*tabContent*/}
      {children &&
        React.Children.toArray(children).map((child) =>
          (child as React.ReactElement).props.label === activeTab ? (child as React.ReactElement).props.children : null
        )}
    </>
  );
};

export { Tabs };
