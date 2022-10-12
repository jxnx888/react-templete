import React, { useState } from 'react';
import { Modal } from 'antd';
import { useTranslation } from 'react-i18next';
import './index.scss';
import img from '../../assets/loading.gif';

interface IProps {
  [PropName: string]: any
}

const PopUpLoading = (props:IProps) => {
  const { isModalVisible, showPage } = props;
  let { t } = useTranslation();

  return (
    <div>
      {
        !showPage ? <Modal
          open={isModalVisible}
          centered={true}
          closable={false}
          footer={null}
          maskClosable={true}
          width={!showPage ? '15rem' : 0}
        >
          <div
            className={'pcVisible_loading'}
          >
            <div>
              <img src={img} draggable="false" />
            </div>
            <p>{t('LOADING')}</p>
          </div>
        </Modal> : <Modal
          visible={isModalVisible}
          centered={true}
          closable={false}
          footer={null}
          maskClosable={true}
          mask={false}
          width={ 0}
        >
          <div
            className={'pcVisible_loading_'}
          >
            <div>
              <img src={img} draggable="false" />
            </div>

          </div>
        </Modal>
      }

    </div>

  );
};
export default PopUpLoading;
