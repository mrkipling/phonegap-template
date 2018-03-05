---
to: src/js/components/<%= name %>/index.js
---
import React from 'react';
import PropTypes from 'prop-types';

import { withStyles } from 'material-ui/styles';

const styles = theme => ({
  root: {
    display: 'block',
    padding: theme.spacing.unit * 2,
  },
});

function <%= name %>(props) {
  const { classes } = props;

  return (
    <section className={classes.root}>
      <p><%= name %></p>
    </section>
  );
}

<%= name %>.propTypes = {
  classes: PropTypes.object.isRequired,
};

export default withStyles(styles)(<%= name %>);
