import React from 'react';
import { Link } from 'react-router-dom';
import classes from './header.module.scss';
import logo from '@assets/images/logo/logo_incheon.svg';
import { Combobox } from '@components/select/ComboboxComponent';

interface HeaderProps {
  title?: string;
}

const Header: React.FC<HeaderProps> = (props) => {
  const { title = "공항 대시보드" } = props;
  return (
    <>
      <header className={classes.header}>
        <div className={classes.logo}>
          <Link to={'/'}>
            <h1>
              <img src={logo} alt="인천공항 로고" />
              <span>{title}</span>
            </h1>
          </Link>
          <Combobox options={[{ value: 'KOR' }, { value: 'ENG' }]} />
        </div>

        <div className={classes.utils}>
          <span className={classes.slogan}>사람과 문화를 이어 미래로 나아갑니다.</span>

          <div className={classes.time}>
            <i className="ic-comm i--clock" />
            <span>2025-05-21 (수)</span>
            <span>09:27:32</span>
          </div>
        </div>
      </header>
    </>
  );
};
export { Header };
