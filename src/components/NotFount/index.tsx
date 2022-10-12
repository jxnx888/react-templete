import React from 'react';
import './index.scss';
import {useTranslation} from "react-i18next";

interface IProps {
  [PropName: string]: any
}

const Index = (props: IProps) => {
  const {status} = props || {};
  const {t} = useTranslation();
  const content = () => {
    switch (status) {
      case 404:
        return (<div className={`bg-404`}>
          <div className="result-mes">{t('PAGE_404_NOT')}</div>
        </div>);
      case 500:
        return (<div className={`bg-500`}>
          <div className="result-mes">{t('SERVER_ERROR')}</div>
        </div>);
      default:
        return (<div></div>);
    }
  };
  return (
    <div className="failed-page">{content()}</div>
  );
};
export default Index;

