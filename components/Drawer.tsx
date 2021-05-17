import React from 'react';
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListSubheader from '@material-ui/core/ListSubheader';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import LabelIcon from '@material-ui/icons/Label';
import IconButton from "@material-ui/core/IconButton";
import FilterList from "@material-ui/icons/FilterList";
import SearchIcon from "@material-ui/icons/Search";
import Chip from '@material-ui/core/Chip';
import Autocomplete from '@material-ui/lab/Autocomplete';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles({
  list: {
    width: 250,
  },
  fullList: {
    width: 'auto',
  },
  button: {
    color: "#fff",
    backgroundColor: "black",
    position: "fixed",
    top: "10px",
  },
  buttonFilter: {
    margin: "auto",
  },
  autoComplete: {
    margin: "0 10px",
  }
});

type Anchor = 'top' | 'left' | 'bottom' | 'right';

type Filters = ['Inbox', 'Starred', 'Send email', 'Drafts'];

//Request backend to get required Filters

export default function TempDrawer({ filters }) {
  const classes = useStyles();
  const [state, setState] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [tags, setTags] = React.useState([]);

  const handleChangeTags = (e) => {
      e.target.innerHTML ? setTags(prevState => [...prevState, e.target.innerHTML]) : setTags([]);
  }

  const toggleDrawer = (anchor: Anchor, open: boolean) => (
    event: React.KeyboardEvent | React.MouseEvent,
  ) => {
    if (
      event.type === 'keydown' &&
      ((event as React.KeyboardEvent).key === 'Tab' ||
        (event as React.KeyboardEvent).key === 'Shift')
    ) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };

  const list = (anchor: Anchor, filters = ['Tag']) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
    // onClick={toggleDrawer(anchor, false)}
    // onKeyDown={toggleDrawer(anchor, false)}
    >
      <List
        component="nav"
        aria-labelledby="nested-list-subheader"
        subheader={
          <ListSubheader disableSticky component="div" id="nested-list-subheader">
            <ListItemIcon>{<LabelIcon />}</ListItemIcon>
            Filter by Tags
        </ListSubheader>
        }>
        <Autocomplete
          multiple
          id={`tags-filter`}
          className={classes.autoComplete}
          limitTags={2}
          options={filters}
          defaultValue={tags || []}
          onChange={handleChangeTags}
          freeSolo
          renderTags={(value, getTagProps) =>
            value.map((option, index) => (
              <Chip variant="outlined" label={option} {...getTagProps({ index })} />
            ))
          }
          renderInput={(params) => (
            <TextField {...params} variant="standard" label="Tags" placeholder="#" />
          )}
        />
      </List>
      <IconButton className={classes.buttonFilter} onClick={toggleDrawer(anchor, false)} aria-label="settings">
        <SearchIcon />
      </IconButton>
    </div>
  );

  return (
    <div>
      {(['left'] as Anchor[]).map((anchor) => (
        <React.Fragment key={anchor}>
          <IconButton className={classes.button} onClick={toggleDrawer(anchor, true)} aria-label="settings">
            <FilterList />
          </IconButton>
          <Drawer anchor={anchor} open={state[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor, filters)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
