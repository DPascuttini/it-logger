import React, { Fragment, useEffect } from 'react';
import { SearchBar } from './components/layout/SearchBar';
import { Logs } from './components/layout/logs/Logs';
import 'materialize-css/dist/css/materialize.min.css';
import M from 'materialize-css/dist/js/materialize.min.js';
import { AddBtn } from './components/layout/AddBtn';
import './App.css';
import { AddLogModal } from './components/layout/logs/AddLogModal';
import { EditLogModal } from './components/layout/logs/EditLogModal';
import { AddTechModal } from './components/Techs/AddTechModal';
import { TechListModal } from './components/Techs/TechListModal';

const App = () => {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });
  return (
    <Fragment>
      <SearchBar />
      <div className='container'>
        <AddBtn />
        <AddLogModal />
        <EditLogModal />
        <AddTechModal />
        <TechListModal />
        <Logs />
      </div>
    </Fragment>
  );
};

export default App;
