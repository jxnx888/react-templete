import React from 'react';
import './index.scss';
import {Row, Col} from 'antd'
import {useTranslation} from 'react-i18next';

interface IProps {
  [PropName: string]: any
}

const Index = (props: IProps) => {
  const {} = props || {};
  let {t, i18n} = useTranslation();

  const defaultLangList = [
    {
      id: 2,
      lang: 'en',
      txt: t('ENGLISH')
    },
    {
      id: 1,
      lang: 's_line',
      txt: '/'
    },
    {
      id: 0,
      lang: 'fr',
      txt:  t('FRENCH')
    }
  ]
  // 语言切换功能
  const switchLocale = (lang: any) => {
    i18n.changeLanguage(lang);
  };

  return (
    <Row>
      <Col span={8}>
        left
      </Col>
      <Col span={8}>
        Center
      </Col>
      <Col span={8}>
        <div className={`lang_area`}>
          {
            defaultLangList.map((item, index) =>
              ((index % 2 !== 0)
                ?
                (<span className={`${item.lang} `}
                       key={index}>{item.txt}</span>)
                :
                (<span className={`${item.lang} lang_option ${i18n.language === item.lang ? 'active_lang' : ''}`}
                       key={index} onClick={() => switchLocale(item.lang)}>{item.txt}</span>))
            )
          }
        </div>
      </Col>
    </Row>
  );
};
export default Index;