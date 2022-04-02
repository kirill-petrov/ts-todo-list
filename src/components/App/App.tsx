// eslint-disable-next-line @typescript-eslint/no-unused-vars
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Typography } from '@mui/material';

import Notes from '../Notes/Notes';
import Create from '../Notes/Create';
import TodoApp from '../TodoApp';
import NotFound from '../NotFound';

function App() {
  return (
    <Router>
      <div>
        <Typography
          variant="h1"
          color="primary"
          align="center"
        >
          qwe
        </Typography>

        <Link to="/create">Create</Link>
        <Link to="/notes">Notes</Link>
        <Link to="/">Home</Link>
        <hr />

        <Routes>
          <Route
            path="/"
            element={<TodoApp />}
          />
          <Route
            path="/notes"
            element={<Notes />}
          />
          <Route
            path="/create"
            element={<Create />}
          />
          <Route
            path="*"
            element={<NotFound />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
