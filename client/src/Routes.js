import React from 'react';
import { Routes as Switch, Route } from 'react-router-dom';
import PostFormModal from './components/PostFormModal';
import PostList from './components/PostList';
import PostCommentsPage from './components/PostCommentsPage';
import UserPage from './components/UserPage';
import SubPage from './components/SubPage';
import TopSubsPanel from './components/TopSubsPanel';
import SearchResults from './components/SearchResults';
import NotFoundPage from './components/NotFoundPage';

import { Container } from '@material-ui/core/';
import { useMainPaperStyles } from './styles/muiStyles';

const Routes = () => {
  const classes = useMainPaperStyles();

  return (
    <Switch>
      <Route
        exact path='/'
        element={
          <>
            <Container disableGutters className={classes.homepage}>
              <div className={classes.postsPanel}>
                <PostFormModal />
                <PostList />
              </div>
              <TopSubsPanel />
            </Container>
          </>
        }
      />
      <Route exact path="/comments/:id" element={<PostCommentsPage />} />
      <Route exact path="/u/:username" element={<UserPage />} />
      <Route exact path="/r/:sub" element={<SubPage />} />
      <Route exact path="/search/:query" element={<SearchResults />} />
      <Route path='*' element={<NotFoundPage />} />
    </Switch>
  );
};

export default Routes;