import React from 'react';

interface PanelProps {
  className?: string;
  children?: React.ReactNode;
}

const Section: React.FC<PanelProps> = (props) => {
  const { children, className } = props;

  return (
    <>
      <div className={`section ${className ? className : ''}`}>{children}</div>
    </>
  );
};

const Panel: React.FC<PanelProps> = (props) => {
  const { children, className } = props;

  return (
    <>
      <div className={`panel ${className ? className : ''}`}>{children}</div>
    </>
  );
};

const PanelHeader: React.FC<PanelProps> = (props) => {
  const { children, className } = props;
  return (
    <>
      <div className={`panel-header ${className ? className : ''}`}>{children}</div>
    </>
  );
};

const PanelBody: React.FC<PanelProps> = (props) => {
  const { children, className } = props;
  return (
    <>
      <div className={`panel-body ${className ? className : ''}`}>{children}</div>
    </>
  );
};

export { Section, Panel, PanelHeader, PanelBody };
