import React from 'react';
import { Link, Route } from 'react-router-dom';
import './Breadcrumbs.scss';

// interface IExternalProps {}

// interface IProps extends IExternalProps {}

const Breadcrumbs = () => (
  <div className="breadcrumbs">
    <ul className="container">
      <Route path="/:path" component={BreadcrumbsItem} />
    </ul>
  </div>
);

const BreadcrumbsItem = ({ match }: any) => (
  <span>
    <li className={match.isExact ? 'breadcrumb-active' : undefined}>
      <Link className="breadcrumbs-Link" to={match.url || ''}>
        {match.url}
      </Link>
    </li>
    <Route path={`${match.url}/:path`} component={BreadcrumbsItem} />
  </span>
);

export default Breadcrumbs;
