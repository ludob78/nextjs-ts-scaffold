import React, { useEffect, useState } from 'react';
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
import CircularProgress from '@material-ui/core/CircularProgress';

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
interface TagsType {
  name: string;
}

type Anchor = 'top' | 'left' | 'bottom' | 'right';


//Request backend to get required Filters
const fetchTags = async () => {
  const tags = await new Promise((res, rej) => {
    setTimeout(() => res(["game", "adventure"]), 5000)
  })
  return tags
}

export default function TempDrawer({ filters }) {
  const classes = useStyles();
  const [position, setPosition] = React.useState({
    top: false,
    left: false,
    bottom: false,
    right: false,
  });

  const [options, setOptions] = React.useState([]);
  const [open, setOpen] = React.useState(false);
  const loading = open && options.length === 0;


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

    setPosition({ ...position, [anchor]: open });
  };

  useEffect(() => {
    let active = true;
    if (!loading) {
      return undefined;
    }

    (async () => {
      const res = await fetchTags();

      if (active) {
        setOptions(prevState => ([...prevState, ...res as TagsType[]]));
      }
    })();

    return () => {
      active = false;
    }
  }, [loading])

  useEffect(() => {
    if (!position.left) {
      setOptions([]);
    }
  }, [position]);

  const list = (anchor: Anchor, filters = ['Tag']) => (
    <div
      className={clsx(classes.list, {
        [classes.fullList]: anchor === 'top' || anchor === 'bottom',
      })}
      role="presentation"
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
          id="asynchronous-demo"
          style={{ width: 300 }}
          open={open}
          onOpen={() => {
            setOpen(true);
          }}
          onClose={() => {
            setOpen(false);
          }}
          getOptionSelected={(option, value) => option === value}
          getOptionLabel={(option) => option}
          options={options}
          loading={loading}
          renderInput={(params) => (
            <TextField
              {...params}
              label="Tags"
              variant="outlined"
              InputProps={{
                ...params.InputProps,
                endAdornment: (
                  <React.Fragment>
                    {loading ? <CircularProgress color="inherit" size={20} /> : null}
                    {params.InputProps.endAdornment}
                  </React.Fragment>
                ),
              }}
            />
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
          <Drawer anchor={anchor} open={position[anchor]} onClose={toggleDrawer(anchor, false)}>
            {list(anchor, filters)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}
